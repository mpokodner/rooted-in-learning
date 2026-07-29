import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

const mockResendSend = vi.fn().mockResolvedValue({ id: "email_123" });
const mockListLineItems = vi.fn().mockResolvedValue({ data: [] });

vi.mock("@/lib/resend", () => ({
  getResend: () => ({ emails: { send: mockResendSend } }),
  FROM_EMAIL: "Test <test@test.com>",
}));

vi.mock("@/lib/stripe", () => ({
  constructWebhookEvent: vi.fn(),
  getStripe: () => ({
    checkout: { sessions: { listLineItems: mockListLineItems } },
  }),
}));

vi.mock("nanoid", () => ({
  nanoid: () => "TESTID01",
}));

function createMockSupabase(ordersStore: Array<Record<string, unknown>>) {
  type ChainResult = {
    data: unknown;
    error: null;
    select: (cols: string) => ChainResult;
    eq: (col: string, val: unknown) => ChainResult;
    maybeSingle: () => Promise<{ data: unknown; error: null }>;
    single: () => Promise<{ data: unknown; error: null }>;
    limit: (n: number) => ChainResult;
    delete: () => ChainResult;
    insert: (row: Record<string, unknown> | Record<string, unknown>[]) => ChainResult;
  };

  let currentTable = "";
  let isInsert = false;
  let isDelete = false;
  let insertedRow: Record<string, unknown> | null = null;
  let filterCol = "";
  let filterVal: unknown = null;
  let selectCols = "";

  const chain: ChainResult = {
    data: null,
    error: null,
    select(cols: string) {
      selectCols = cols;
      return chain;
    },
    eq(col: string, val: unknown) {
      filterCol = col;
      filterVal = val;
      if (isDelete) {
        return chain;
      }
      return chain;
    },
    async maybeSingle() {
      if (currentTable === "orders" && filterCol === "stripe_checkout_session_id") {
        const found = ordersStore.find(
          (o) => o.stripe_checkout_session_id === filterVal
        );
        return { data: found || null, error: null };
      }
      if (currentTable === "products" && filterCol === "slug") {
        return { data: null, error: null };
      }
      return { data: null, error: null };
    },
    async single() {
      if (isInsert && insertedRow) {
        const row = { ...insertedRow, id: `order-${ordersStore.length}` };
        ordersStore.push(row);
        insertedRow = null;
        return { data: { id: row.id }, error: null };
      }
      return { data: null, error: null };
    },
    limit() {
      return chain;
    },
    delete() {
      isDelete = true;
      return chain;
    },
    insert(row: Record<string, unknown> | Record<string, unknown>[]) {
      if (currentTable === "orders") {
        isInsert = true;
        insertedRow = Array.isArray(row) ? row[0] : row;
      }
      return chain;
    },
  };

  return {
    from(table: string) {
      currentTable = table;
      isInsert = false;
      isDelete = false;
      insertedRow = null;
      filterCol = "";
      filterVal = null;
      selectCols = "";
      return chain;
    },
  };
}

let ordersStore: Array<Record<string, unknown>>;

vi.mock("@/lib/supabase-server", () => ({
  createServerSupabaseClient: vi.fn(),
}));

import { constructWebhookEvent } from "@/lib/stripe";
import { createServerSupabaseClient } from "@/lib/supabase-server";

const fakeCheckoutEvent = {
  type: "checkout.session.completed",
  data: {
    object: {
      id: "cs_test_abc123",
      payment_intent: "pi_test_xyz",
      customer_details: { email: "buyer@example.com" },
      metadata: { user_id: "" },
      amount_total: 2400,
    },
  },
};

function makeRequest(): NextRequest {
  return new NextRequest("http://localhost/api/webhooks/stripe", {
    method: "POST",
    body: JSON.stringify({}),
    headers: { "stripe-signature": "test_sig" },
  });
}

describe("Stripe webhook idempotency", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    ordersStore = [];

    const mockSupabase = createMockSupabase(ordersStore);
    vi.mocked(createServerSupabaseClient).mockReturnValue(mockSupabase as never);
    vi.mocked(constructWebhookEvent).mockReturnValue(fakeCheckoutEvent as never);
  });

  it("creates exactly one order and sends one email when the same event is replayed", async () => {
    const { POST } = await import("../route");

    const response1 = await POST(makeRequest());
    expect(response1.status).toBe(200);

    const response2 = await POST(makeRequest());
    expect(response2.status).toBe(200);

    expect(ordersStore).toHaveLength(1);
    expect(ordersStore[0].stripe_checkout_session_id).toBe("cs_test_abc123");
    expect(mockResendSend).toHaveBeenCalledTimes(1);
  });

  it("returns 200 for both the original and the duplicate", async () => {
    const { POST } = await import("../route");

    const r1 = await POST(makeRequest());
    const r2 = await POST(makeRequest());

    const body1 = await r1.json();
    const body2 = await r2.json();

    expect(body1).toEqual({ received: true });
    expect(body2).toEqual({ received: true });
  });
});
