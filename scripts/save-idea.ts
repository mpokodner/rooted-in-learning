import { parseArgs } from "node:util";
import { readFileSync } from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const REQUIRED_ENV = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
] as const;

for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    console.error(`Missing required env var: ${key}`);
    console.error("Ensure .env.local exists and contains this variable.");
    process.exit(1);
  }
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const VALID_STATUSES = ["draft", "researched", "routed", "complete", "archived"];
const VALID_CHANNELS = ["tpt", "rooted-learner", "both"];

function parseCliArgs() {
  const { values } = parseArgs({
    options: {
      create: { type: "boolean", default: false },
      update: { type: "boolean", default: false },
      status: { type: "boolean", default: false },
      id: { type: "string" },
      file: { type: "string" },
    },
    strict: true,
  });

  const ops = [values.create, values.update, values.status].filter(Boolean).length;
  if (ops !== 1) {
    console.error("Specify exactly one operation: --create, --update, or --status");
    console.error("\nUsage:");
    console.error('  npm run save-idea -- --create --file=idea.json');
    console.error('  npm run save-idea -- --update --id=<uuid> --file=updates.json');
    console.error('  npm run save-idea -- --status --id=<uuid>');
    process.exit(1);
  }

  if ((values.update || values.status) && !values.id) {
    console.error("--update and --status require --id=<uuid>");
    process.exit(1);
  }

  return {
    operation: values.create ? "create" : values.update ? "update" : "status",
    id: values.id,
    file: values.file,
  } as const;
}

function readInput(filePath?: string): Record<string, unknown> {
  if (filePath) {
    const resolved = path.resolve(filePath);
    const raw = readFileSync(resolved, "utf-8");
    return JSON.parse(raw);
  }

  let stdin = "";
  const fd = require("fs").openSync("/dev/stdin", "r");
  const buf = Buffer.alloc(4096);
  let n: number;
  while ((n = require("fs").readSync(fd, buf)) > 0) {
    stdin += buf.toString("utf-8", 0, n);
  }
  require("fs").closeSync(fd);

  if (!stdin.trim()) {
    console.error("No input: provide --file=<path> or pipe JSON to stdin");
    process.exit(1);
  }
  return JSON.parse(stdin);
}

function validateIdea(data: Record<string, unknown>, isCreate: boolean) {
  if (isCreate && !data.original_idea) {
    console.error("Validation error: original_idea is required for --create");
    process.exit(1);
  }

  if (data.status && !VALID_STATUSES.includes(data.status as string)) {
    console.error(`Validation error: status must be one of ${VALID_STATUSES.join(", ")}`);
    process.exit(1);
  }

  if (data.channel && !VALID_CHANNELS.includes(data.channel as string)) {
    console.error(`Validation error: channel must be one of ${VALID_CHANNELS.join(", ")}`);
    process.exit(1);
  }
}

async function createIdea(data: Record<string, unknown>) {
  validateIdea(data, true);

  const row = {
    original_idea: data.original_idea,
    title: data.title || (data.original_idea as string).slice(0, 60),
    status: data.status || "draft",
    tpt_research: data.tpt_research || null,
    brand_research: data.brand_research || null,
    routing: data.routing || null,
    optimized: data.optimized || null,
    channel: data.channel || null,
    sources: data.sources || [],
  };

  const { data: result, error } = await supabase
    .from("ideas")
    .insert(row)
    .select("id")
    .single();

  if (error) {
    console.error(`Insert failed: ${error.message}`);
    process.exit(1);
  }

  console.log(`Created idea: ${result.id}`);
  return result.id;
}

async function updateIdea(id: string, data: Record<string, unknown>) {
  validateIdea(data, false);

  const allowedFields = [
    "title", "original_idea", "status", "tpt_research", "brand_research",
    "routing", "optimized", "channel", "sources",
  ];
  const updates: Record<string, unknown> = {};
  for (const key of allowedFields) {
    if (key in data) updates[key] = data[key];
  }

  if (Object.keys(updates).length === 0) {
    console.error("No valid fields to update");
    process.exit(1);
  }

  const { error } = await supabase
    .from("ideas")
    .update(updates)
    .eq("id", id);

  if (error) {
    console.error(`Update failed: ${error.message}`);
    process.exit(1);
  }

  console.log(`Updated idea: ${id}`);
  console.log(`Fields updated: ${Object.keys(updates).join(", ")}`);
}

async function getStatus(id: string) {
  const { data, error } = await supabase
    .from("ideas")
    .select("id, title, status, channel, created_at, updated_at")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`Lookup failed: ${error.message}`);
    process.exit(1);
  }

  console.log(`Idea:     ${data.id}`);
  console.log(`Title:    ${data.title || "(untitled)"}`);
  console.log(`Status:   ${data.status}`);
  console.log(`Channel:  ${data.channel || "(not routed)"}`);
  console.log(`Created:  ${data.created_at}`);
  console.log(`Updated:  ${data.updated_at}`);
}

async function main() {
  const args = parseCliArgs();

  switch (args.operation) {
    case "create": {
      const data = readInput(args.file);
      await createIdea(data);
      break;
    }
    case "update": {
      const data = readInput(args.file);
      await updateIdea(args.id!, data);
      break;
    }
    case "status": {
      await getStatus(args.id!);
      break;
    }
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
