import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  UtensilsCrossed,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";
import type { CartItem } from "../types";

// ─── Line Item ────────────────────────────────────────────────────────────────

function CartLineItem({ item, index }: { item: CartItem; index: number }) {
  const { updateQuantity, removeFromCart } = useCart();
  const { menuItem, quantity, selectedPriceIndex } = item;
  const priceEntry = menuItem.prices[selectedPriceIndex];
  const lineTotal = priceEntry.amount * quantity;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, height: 0 }}
      transition={{
        delay: index * 0.06,
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="glass rounded-xl p-4 flex gap-4 items-start"
      data-ocid={`cart.item.${index + 1}`}
    >
      {/* Veg/Non indicator */}
      <div className="shrink-0 mt-1">
        <div
          className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center ${
            menuItem.isVeg ? "border-green-500" : "border-red-500"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${menuItem.isVeg ? "bg-green-500" : "bg-red-500"}`}
          />
        </div>
      </div>

      {/* Item info */}
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-foreground truncate">
          {menuItem.name}
        </p>
        {priceEntry.label && (
          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
            {priceEntry.label}
          </span>
        )}
        <p className="text-muted-foreground text-sm mt-0.5">
          ₹{priceEntry.amount} each
        </p>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() =>
            updateQuantity(menuItem.id, selectedPriceIndex, quantity - 1)
          }
          className="w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground hover:text-primary transition-smooth"
          aria-label="Decrease quantity"
          data-ocid={`cart.qty_decrease.${index + 1}`}
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="font-display font-bold text-foreground w-6 text-center">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() =>
            updateQuantity(menuItem.id, selectedPriceIndex, quantity + 1)
          }
          className="w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground hover:text-primary transition-smooth"
          aria-label="Increase quantity"
          data-ocid={`cart.qty_increase.${index + 1}`}
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Line total + remove */}
      <div className="shrink-0 flex flex-col items-end gap-2">
        <p className="font-display font-bold text-primary">₹{lineTotal}</p>
        <button
          type="button"
          onClick={() => removeFromCart(menuItem.id, selectedPriceIndex)}
          className="text-muted-foreground hover:text-destructive transition-smooth"
          aria-label="Remove item"
          data-ocid={`cart.delete_button.${index + 1}`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center justify-center py-20 gap-6 text-center"
      data-ocid="cart.empty_state"
    >
      <div className="relative">
        <div className="w-24 h-24 rounded-full glass flex items-center justify-center shadow-elevated">
          <UtensilsCrossed className="w-12 h-12 text-muted-foreground" />
        </div>
        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
          <span className="text-primary text-xs font-bold">0</span>
        </div>
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-foreground mb-2">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground max-w-xs">
          Looks like you haven't added anything yet. Explore our menu and find
          something delicious!
        </p>
      </div>
      <Link to="/menu">
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-8 shadow-glow-orange transition-smooth"
          data-ocid="cart.browse_menu_button"
        >
          Browse Menu <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </motion.div>
  );
}

// ─── Cart Page ────────────────────────────────────────────────────────────────

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useCart();

  const delivery = cartItems.length > 0 ? 20 : 0;
  const gst = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + delivery + gst;

  return (
    <div className="min-h-screen bg-background page-enter">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display font-bold text-3xl text-foreground">
              Your Cart
            </h1>
            {cartItems.length > 0 && (
              <p className="text-muted-foreground text-sm">
                {cartItems.length} item(s)
              </p>
            )}
          </div>
        </motion.div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items list */}
            <div className="lg:col-span-2 space-y-3" data-ocid="cart.list">
              <AnimatePresence mode="popLayout">
                {cartItems.map((item, i) => (
                  <CartLineItem
                    key={`${item.menuItem.id}__${item.selectedPriceIndex}`}
                    item={item}
                    index={i}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Price summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="lg:col-span-1"
            >
              <div
                className="glass rounded-2xl p-6 shadow-elevated sticky top-24"
                data-ocid="cart.summary_panel"
              >
                <h2 className="font-display font-bold text-lg text-foreground mb-5">
                  Price Details
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-foreground">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span className="text-muted-foreground">Delivery fee</span>
                    <span className="font-medium">₹{delivery}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span className="text-muted-foreground">GST (5%)</span>
                    <span className="font-medium">₹{gst}</span>
                  </div>

                  <Separator className="my-2 bg-border/50" />

                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-base text-foreground">
                      Grand Total
                    </span>
                    <span className="font-display font-bold text-xl text-primary">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button
                    onClick={() => navigate({ to: "/checkout" })}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold shadow-glow-orange transition-smooth h-12 text-base"
                    data-ocid="cart.checkout_button"
                  >
                    Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <Link to="/menu">
                    <Button
                      variant="outline"
                      className="w-full border-border/60 text-foreground font-display font-medium transition-smooth h-11"
                      data-ocid="cart.continue_shopping_button"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                {/* Savings note */}
                <p className="text-center text-xs text-muted-foreground mt-4">
                  🎉 Free delivery on orders above ₹299!
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
