import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Hash,
  MapPin,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import type { CartItem } from "../types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getNextOrderNumber(): string {
  const stored = localStorage.getItem("twogood_order_counter");
  const next = Number.parseInt(stored ?? "1000", 10) + 1;
  localStorage.setItem("twogood_order_counter", String(next));
  return `TG-${next}`;
}

function buildWhatsAppMessage(
  orderNumber: string,
  items: CartItem[],
  name: string,
  address: string,
  grandTotal: number,
): string {
  const itemLines = items
    .map((i) => {
      const priceEntry = i.menuItem.prices[i.selectedPriceIndex];
      const label = priceEntry.label ? ` (${priceEntry.label})` : "";
      return `• ${i.menuItem.name}${label} x${i.quantity} — ₹${priceEntry.amount * i.quantity}`;
    })
    .join("\n");

  return encodeURIComponent(
    [
      "🍕 *New Order — Two Good Mini Café*",
      "",
      `Order ID: *${orderNumber}*`,
      "",
      "*Items:*",
      itemLines,
      "",
      `*Grand Total: ₹${grandTotal}*`,
      "",
      `📍 Deliver to: ${address}`,
      `👤 Name: ${name}`,
      "",
      "Please confirm my order. Thank you!",
    ].join("\n"),
  );
}

// ─── Order Summary ────────────────────────────────────────────────────────────

function OrderSummary({
  items,
  subtotal,
  delivery,
  gst,
  grandTotal,
}: {
  items: CartItem[];
  subtotal: number;
  delivery: number;
  gst: number;
  grandTotal: number;
}) {
  return (
    <div
      className="glass rounded-2xl p-6 shadow-elevated"
      data-ocid="checkout.summary_panel"
    >
      <h2 className="font-display font-bold text-lg text-foreground mb-4">
        Order Summary
      </h2>
      <div className="space-y-3 mb-4" data-ocid="checkout.item_list">
        {items.map((item, i) => {
          const priceEntry = item.menuItem.prices[item.selectedPriceIndex];
          const label = priceEntry.label ? ` (${priceEntry.label})` : "";
          return (
            <div
              key={`${item.menuItem.id}__${item.selectedPriceIndex}`}
              className="flex justify-between items-start gap-2 text-sm"
              data-ocid={`checkout.item.${i + 1}`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-foreground font-medium truncate">
                  {item.menuItem.name}
                  {label}
                </p>
                <p className="text-muted-foreground text-xs">
                  Qty: {item.quantity}
                </p>
              </div>
              <span className="text-foreground font-semibold shrink-0">
                ₹{priceEntry.amount * item.quantity}
              </span>
            </div>
          );
        })}
      </div>

      <Separator className="bg-border/50 mb-4" />

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Delivery fee</span>
          <span>₹{delivery}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>GST (5%)</span>
          <span>₹{gst}</span>
        </div>
        <Separator className="bg-border/50" />
        <div className="flex justify-between font-display font-bold text-base pt-1">
          <span className="text-foreground">Grand Total</span>
          <span className="text-primary">₹{grandTotal}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Confirmation Card ────────────────────────────────────────────────────────

function ConfirmationView({
  orderNumber,
  customerName,
  address,
  grandTotal,
  items,
  onBack,
}: {
  orderNumber: string;
  customerName: string;
  address: string;
  grandTotal: number;
  items: CartItem[];
  onBack: () => void;
}) {
  const waMsg = buildWhatsAppMessage(
    orderNumber,
    items,
    customerName,
    address,
    grandTotal,
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="glass rounded-2xl p-8 shadow-elevated text-center max-w-md mx-auto"
      data-ocid="checkout.confirmation_dialog"
    >
      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="w-20 h-20 rounded-full bg-green-500/15 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle2 className="w-10 h-10 text-green-500" />
      </motion.div>

      <h2 className="font-display font-bold text-2xl text-foreground mb-1">
        Order Placed! 🎉
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        Your delicious food is being prepared with love
      </p>

      {/* Order details */}
      <div className="glass rounded-xl p-4 text-left space-y-3 mb-6">
        <div className="flex items-center gap-3">
          <Hash className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Order ID</p>
            <p className="font-display font-bold text-primary">{orderNumber}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <User className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Name</p>
            <p className="font-medium text-foreground">{customerName}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground">Delivery Address</p>
            <p className="font-medium text-foreground text-sm">{address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Estimated Time</p>
            <p className="font-medium text-foreground">30 – 45 minutes</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <a
          href={`https://wa.me/919958658589?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="checkout.track_whatsapp_button"
        >
          <Button
            className="w-full h-12 font-display font-semibold text-base transition-smooth"
            style={{ backgroundColor: "#25d366" }}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Track via WhatsApp
          </Button>
        </a>

        <Button
          variant="outline"
          onClick={onBack}
          className="w-full border-border/60 text-foreground font-display font-medium transition-smooth h-11"
          data-ocid="checkout.back_to_menu_button"
        >
          Back to Menu
        </Button>
      </div>
    </motion.div>
  );
}

// ─── Checkout Page ────────────────────────────────────────────────────────────

interface FormFields {
  name: string;
  phone: string;
  address: string;
  city: string;
  postal: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
  city?: string;
  postal?: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const [form, setForm] = useState<FormFields>({
    name: "",
    phone: "",
    address: "",
    city: "Delhi",
    postal: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [confirmed, setConfirmed] = useState(false);
  const [orderInfo, setOrderInfo] = useState<{
    orderNumber: string;
    snapshotItems: CartItem[];
    grandTotal: number;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const delivery = cartItems.length > 0 ? 20 : 0;
  const gst = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + delivery + gst;

  // redirect if cart empty and not confirmed
  if (cartItems.length === 0 && !confirmed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center page-enter">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-lg">Your cart is empty.</p>
          <Link to="/menu">
            <Button
              className="bg-primary text-primary-foreground font-display font-semibold shadow-glow-orange"
              data-ocid="checkout.browse_menu_button"
            >
              Browse Menu <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone.trim()))
      e.phone = "Enter a valid 10-digit phone number";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!/^\d{6}$/.test(form.postal.trim()))
      e.postal = "Enter a valid 6-digit postal code";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const orderNumber = getNextOrderNumber();
    setOrderInfo({ orderNumber, snapshotItems: [...cartItems], grandTotal });
    clearCart();
    setConfirmed(true);
  }

  function handleBackToMenu() {
    navigate({ to: "/menu" });
  }

  const waQuickOrder = buildWhatsAppMessage(
    "Quick Order",
    cartItems,
    form.name || "Customer",
    `${form.address || "—"}, ${form.city} – ${form.postal || "—"}`,
    grandTotal,
  );

  return (
    <div className="min-h-screen bg-background page-enter">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          {confirmed && orderInfo ? (
            <motion.div
              key="confirmed"
              className="flex flex-col items-center pt-8"
            >
              <ConfirmationView
                orderNumber={orderInfo.orderNumber}
                customerName={form.name}
                address={`${form.address}, ${form.city} – ${form.postal}`}
                grandTotal={orderInfo.grandTotal}
                items={orderInfo.snapshotItems}
                onBack={handleBackToMenu}
              />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <h1 className="font-display font-bold text-3xl text-foreground">
                  Checkout
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  Complete your order details
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Delivery Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="lg:col-span-3"
                >
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="glass rounded-2xl p-6 shadow-elevated space-y-5"
                    noValidate
                    data-ocid="checkout.delivery_form"
                  >
                    <h2 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" /> Delivery
                      Details
                    </h2>

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-foreground font-medium flex items-center gap-1.5"
                      >
                        <User className="w-3.5 h-3.5 text-primary" /> Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        data-ocid="checkout.name_input"
                      />
                      {errors.name && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="checkout.name_field_error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-foreground font-medium flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-primary" /> Phone
                        Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={`bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        data-ocid="checkout.phone_input"
                      />
                      {errors.phone && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="checkout.phone_field_error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Street Address */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="address"
                        className="text-foreground font-medium flex items-center gap-1.5"
                      >
                        <MapPin className="w-3.5 h-3.5 text-primary" /> Street
                        Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="House no, Street, Colony"
                        className={`bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.address ? "border-destructive focus-visible:ring-destructive" : ""}`}
                        data-ocid="checkout.address_input"
                      />
                      {errors.address && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="checkout.address_field_error"
                        >
                          {errors.address}
                        </p>
                      )}
                    </div>

                    {/* City + Postal */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="city"
                          className="text-foreground font-medium"
                        >
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          className={`bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.city ? "border-destructive focus-visible:ring-destructive" : ""}`}
                          data-ocid="checkout.city_input"
                        />
                        {errors.city && (
                          <p
                            className="text-destructive text-xs"
                            data-ocid="checkout.city_field_error"
                          >
                            {errors.city}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="postal"
                          className="text-foreground font-medium"
                        >
                          Postal Code
                        </Label>
                        <Input
                          id="postal"
                          name="postal"
                          value={form.postal}
                          onChange={handleChange}
                          placeholder="110090"
                          maxLength={6}
                          className={`bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.postal ? "border-destructive focus-visible:ring-destructive" : ""}`}
                          data-ocid="checkout.postal_input"
                        />
                        {errors.postal && (
                          <p
                            className="text-destructive text-xs"
                            data-ocid="checkout.postal_field_error"
                          >
                            {errors.postal}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base shadow-glow-orange transition-smooth mt-2"
                      data-ocid="checkout.submit_button"
                    >
                      Place Order — ₹{grandTotal}
                    </Button>

                    {/* WhatsApp alternative */}
                    <div className="text-center pt-1">
                      <p className="text-muted-foreground text-xs mb-2">
                        — or —
                      </p>
                      <a
                        href={`https://wa.me/919958658589?text=${waQuickOrder}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium transition-smooth"
                        style={{ color: "#25d366" }}
                        data-ocid="checkout.whatsapp_order_link"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Order via WhatsApp instead
                      </a>
                    </div>
                  </form>
                </motion.div>

                {/* Order Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="lg:col-span-2"
                >
                  <OrderSummary
                    items={cartItems}
                    subtotal={cartTotal}
                    delivery={delivery}
                    gst={gst}
                    grandTotal={grandTotal}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
