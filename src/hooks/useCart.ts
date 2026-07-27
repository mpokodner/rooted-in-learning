"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase";
import { useAuth } from "./useAuth";
import type { CartItem, Product } from "@/types";

/**
 * Shopping cart hook.
 * - Authenticated users: cart stored in Supabase (syncs across devices)
 * - Guests: cart stored in localStorage
 */
export function useCart() {
  const supabase = useMemo(() => createClient(), []);
  const { user, isAuthenticated } = useAuth();
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // ─── Fetch cart items ───
  const fetchCart = useCallback(async () => {
    setLoading(true);

    if (isAuthenticated && user && supabase) {
      // Fetch from Supabase
      const { data } = await supabase
        .from("cart_items")
        .select("*, product:products(*)")
        .eq("user_id", user.id);

      setItems((data as CartItem[]) || []);
    } else {
      // Fetch from localStorage
      const stored = localStorage.getItem("ril_cart");
      setItems(stored ? JSON.parse(stored) : []);
    }

    setLoading(false);
  }, [isAuthenticated, user, supabase]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // ─── Add to cart ───
  async function addItem(product: Product, quantity: number = 1) {
    if (isAuthenticated && user && supabase) {
      // Check if already in cart
      const existing = items.find((i) => i.product_id === product.id);
      if (existing) {
        await supabase
          .from("cart_items")
          .update({ quantity: existing.quantity + quantity })
          .eq("id", existing.id);
      } else {
        await supabase.from("cart_items").insert({
          user_id: user.id,
          product_id: product.id,
          quantity,
        });
      }
    } else {
      // localStorage cart
      const existing = items.find((i) => i.product_id === product.id);
      let updated: CartItem[];
      if (existing) {
        updated = items.map((i) =>
          i.product_id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      } else {
        const newItem: CartItem = {
          id: crypto.randomUUID(),
          user_id: "guest",
          product_id: product.id,
          quantity,
          created_at: new Date().toISOString(),
          product,
        };
        updated = [...items, newItem];
      }
      localStorage.setItem("ril_cart", JSON.stringify(updated));
      setItems(updated);
      return;
    }

    await fetchCart();
  }

  // ─── Update quantity ───
  async function updateQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
      return removeItem(itemId);
    }

    if (isAuthenticated && supabase) {
      await supabase
        .from("cart_items")
        .update({ quantity })
        .eq("id", itemId);
    } else {
      const updated = items.map((i) =>
        i.id === itemId ? { ...i, quantity } : i
      );
      localStorage.setItem("ril_cart", JSON.stringify(updated));
      setItems(updated);
      return;
    }

    await fetchCart();
  }

  // ─── Remove from cart ───
  async function removeItem(itemId: string) {
    if (isAuthenticated && supabase) {
      await supabase.from("cart_items").delete().eq("id", itemId);
    } else {
      const updated = items.filter((i) => i.id !== itemId);
      localStorage.setItem("ril_cart", JSON.stringify(updated));
      setItems(updated);
      return;
    }

    await fetchCart();
  }

  // ─── Clear cart ───
  async function clearCart() {
    if (isAuthenticated && user && supabase) {
      await supabase.from("cart_items").delete().eq("user_id", user.id);
    } else {
      localStorage.removeItem("ril_cart");
    }
    setItems([]);
  }

  // ─── Computed values ───
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + (item.product?.price ?? 0) * item.quantity,
    0
  );

  return {
    items,
    loading,
    itemCount,
    subtotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    refetch: fetchCart,
  };
}
