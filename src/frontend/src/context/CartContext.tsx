import { createContext, useContext, useEffect, useReducer } from "react";
import type { CartItem, MenuItem } from "../types";

// ─── Types ────────────────────────────────────────────────────────────────────

type CartAction =
  | { type: "ADD_ITEM"; menuItem: MenuItem; priceIndex: number }
  | { type: "REMOVE_ITEM"; id: string; priceIndex: number }
  | { type: "UPDATE_QUANTITY"; id: string; priceIndex: number; qty: number }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; items: CartItem[] };

interface CartState {
  items: CartItem[];
}

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (menuItem: MenuItem, priceIndex: number) => void;
  removeFromCart: (id: string, priceIndex: number) => void;
  updateQuantity: (id: string, priceIndex: number, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = "twogood_cart";

function cartKey(id: string, priceIndex: number) {
  return `${id}__${priceIndex}`;
}

function isSameItem(item: CartItem, id: string, priceIndex: number) {
  return item.menuItem.id === id && item.selectedPriceIndex === priceIndex;
}

function loadFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

// ─── Reducer ─────────────────────────────────────────────────────────────────

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items };

    case "ADD_ITEM": {
      const existing = state.items.find((i) =>
        isSameItem(i, action.menuItem.id, action.priceIndex),
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            isSameItem(i, action.menuItem.id, action.priceIndex)
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            menuItem: action.menuItem,
            quantity: 1,
            selectedPriceIndex: action.priceIndex,
          },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (i) => !isSameItem(i, action.id, action.priceIndex),
        ),
      };

    case "UPDATE_QUANTITY": {
      if (action.qty <= 0) {
        return {
          items: state.items.filter(
            (i) => !isSameItem(i, action.id, action.priceIndex),
          ),
        };
      }
      return {
        items: state.items.map((i) =>
          isSameItem(i, action.id, action.priceIndex)
            ? { ...i, quantity: action.qty }
            : i,
        ),
      };
    }

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = loadFromStorage();
    if (stored.length > 0) {
      dispatch({ type: "HYDRATE", items: stored });
    }
  }, []);

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0);

  const cartTotal = state.items.reduce(
    (sum, i) =>
      sum + i.menuItem.prices[i.selectedPriceIndex].amount * i.quantity,
    0,
  );

  const value: CartContextValue = {
    cartItems: state.items,
    addToCart: (menuItem, priceIndex) =>
      dispatch({ type: "ADD_ITEM", menuItem, priceIndex }),
    removeFromCart: (id, priceIndex) =>
      dispatch({ type: "REMOVE_ITEM", id, priceIndex }),
    updateQuantity: (id, priceIndex, qty) =>
      dispatch({ type: "UPDATE_QUANTITY", id, priceIndex, qty }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export function useCartCount(): number {
  return useCart().cartCount;
}

// Re-export cartKey for pages that need to reference cart item keys
export { cartKey };
