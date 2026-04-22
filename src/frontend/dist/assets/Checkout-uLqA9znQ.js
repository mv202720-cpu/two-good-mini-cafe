import { c as createLucideIcon, j as jsxRuntimeExports, d as cn, r as reactExports, b as useNavigate, u as useCart, L as Link, M as MapPin, P as Phone, a as MessageCircle, C as Clock } from "./index-JAF6-6qf.js";
import { P as Primitive, B as Button, S as Separator } from "./separator-D0G49_4l.js";
import { C as ChevronRight } from "./chevron-right-Be4RGCaQ.js";
import { A as AnimatePresence } from "./index-DqgVw44B.js";
import { m as motion } from "./proxy-bYZ_owAr.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function getNextOrderNumber() {
  const stored = localStorage.getItem("twogood_order_counter");
  const next = Number.parseInt(stored ?? "1000", 10) + 1;
  localStorage.setItem("twogood_order_counter", String(next));
  return `TG-${next}`;
}
function buildWhatsAppMessage(orderNumber, items, name, address, grandTotal) {
  const itemLines = items.map((i) => {
    const priceEntry = i.menuItem.prices[i.selectedPriceIndex];
    const label = priceEntry.label ? ` (${priceEntry.label})` : "";
    return `• ${i.menuItem.name}${label} x${i.quantity} — ₹${priceEntry.amount * i.quantity}`;
  }).join("\n");
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
      "Please confirm my order. Thank you!"
    ].join("\n")
  );
}
function OrderSummary({
  items,
  subtotal,
  delivery,
  gst,
  grandTotal
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass rounded-2xl p-6 shadow-elevated",
      "data-ocid": "checkout.summary_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground mb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4", "data-ocid": "checkout.item_list", children: items.map((item, i) => {
          const priceEntry = item.menuItem.prices[item.selectedPriceIndex];
          const label = priceEntry.label ? ` (${priceEntry.label})` : "";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between items-start gap-2 text-sm",
              "data-ocid": `checkout.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground font-medium truncate", children: [
                    item.menuItem.name,
                    label
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
                    "Qty: ",
                    item.quantity
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-semibold shrink-0", children: [
                  "₹",
                  priceEntry.amount * item.quantity
                ] })
              ]
            },
            `${item.menuItem.id}__${item.selectedPriceIndex}`
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/50 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              subtotal
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Delivery fee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              delivery
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST (5%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "₹",
              gst
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-bold text-base pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Grand Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
              "₹",
              grandTotal
            ] })
          ] })
        ] })
      ]
    }
  );
}
function ConfirmationView({
  orderNumber,
  customerName,
  address,
  grandTotal,
  items,
  onBack
}) {
  const waMsg = buildWhatsAppMessage(
    orderNumber,
    items,
    customerName,
    address,
    grandTotal
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      className: "glass rounded-2xl p-8 shadow-elevated text-center max-w-md mx-auto",
      "data-ocid": "checkout.confirmation_dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0 },
            animate: { scale: 1 },
            transition: { delay: 0.2, type: "spring", stiffness: 200, damping: 15 },
            className: "w-20 h-20 rounded-full bg-green-500/15 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-green-500" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-1", children: "Order Placed! 🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Your delicious food is being prepared with love" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-4 text-left space-y-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "w-4 h-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Order ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-primary", children: orderNumber })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: customerName })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Delivery Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: address })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Estimated Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "30 – 45 minutes" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/919958658589?text=${waMsg}`,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "checkout.track_whatsapp_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full h-12 font-display font-semibold text-base transition-smooth",
                  style: { backgroundColor: "#25d366" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 w-5 h-5" }),
                    "Track via WhatsApp"
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: onBack,
              className: "w-full border-border/60 text-foreground font-display font-medium transition-smooth h-11",
              "data-ocid": "checkout.back_to_menu_button",
              children: "Back to Menu"
            }
          )
        ] })
      ]
    }
  );
}
function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    address: "",
    city: "Delhi",
    postal: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [confirmed, setConfirmed] = reactExports.useState(false);
  const [orderInfo, setOrderInfo] = reactExports.useState(null);
  const formRef = reactExports.useRef(null);
  const delivery = cartItems.length > 0 ? 20 : 0;
  const gst = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + delivery + gst;
  if (cartItems.length === 0 && !confirmed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Your cart is empty." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "bg-primary text-primary-foreground font-display font-semibold shadow-glow-orange",
          "data-ocid": "checkout.browse_menu_button",
          children: [
            "Browse Menu ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 w-4 h-4" })
          ]
        }
      ) })
    ] }) });
  }
  function validate() {
    const e = {};
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
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  }
  function handleSubmit(e) {
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
    grandTotal
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: confirmed && orderInfo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "flex flex-col items-center pt-8",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ConfirmationView,
        {
          orderNumber: orderInfo.orderNumber,
          customerName: form.name,
          address: `${form.address}, ${form.city} – ${form.postal}`,
          grandTotal: orderInfo.grandTotal,
          items: orderInfo.snapshotItems,
          onBack: handleBackToMenu
        }
      )
    },
    "confirmed"
  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -16 },
            animate: { opacity: 1, y: 0 },
            className: "mb-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground", children: "Checkout" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Complete your order details" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1, duration: 0.4 },
              className: "lg:col-span-3",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  ref: formRef,
                  onSubmit: handleSubmit,
                  className: "glass rounded-2xl p-6 shadow-elevated space-y-5",
                  noValidate: true,
                  "data-ocid": "checkout.delivery_form",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-lg text-foreground flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary" }),
                      " Delivery Details"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "name",
                          className: "text-foreground font-medium flex items-center gap-1.5",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-primary" }),
                            " Full Name"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "name",
                          name: "name",
                          value: form.name,
                          onChange: handleChange,
                          placeholder: "e.g. Rahul Sharma",
                          className: `bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`,
                          "data-ocid": "checkout.name_input"
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-destructive text-xs",
                          "data-ocid": "checkout.name_field_error",
                          children: errors.name
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "phone",
                          className: "text-foreground font-medium flex items-center gap-1.5",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 text-primary" }),
                            " Phone Number"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "phone",
                          name: "phone",
                          type: "tel",
                          value: form.phone,
                          onChange: handleChange,
                          placeholder: "10-digit mobile number",
                          maxLength: 10,
                          className: `bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`,
                          "data-ocid": "checkout.phone_input"
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-destructive text-xs",
                          "data-ocid": "checkout.phone_field_error",
                          children: errors.phone
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "address",
                          className: "text-foreground font-medium flex items-center gap-1.5",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 text-primary" }),
                            " Street Address"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "address",
                          name: "address",
                          value: form.address,
                          onChange: handleChange,
                          placeholder: "House no, Street, Colony",
                          className: `bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.address ? "border-destructive focus-visible:ring-destructive" : ""}`,
                          "data-ocid": "checkout.address_input"
                        }
                      ),
                      errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-destructive text-xs",
                          "data-ocid": "checkout.address_field_error",
                          children: errors.address
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Label,
                          {
                            htmlFor: "city",
                            className: "text-foreground font-medium",
                            children: "City"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "city",
                            name: "city",
                            value: form.city,
                            onChange: handleChange,
                            className: `bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.city ? "border-destructive focus-visible:ring-destructive" : ""}`,
                            "data-ocid": "checkout.city_input"
                          }
                        ),
                        errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-destructive text-xs",
                            "data-ocid": "checkout.city_field_error",
                            children: errors.city
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Label,
                          {
                            htmlFor: "postal",
                            className: "text-foreground font-medium",
                            children: "Postal Code"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "postal",
                            name: "postal",
                            value: form.postal,
                            onChange: handleChange,
                            placeholder: "110090",
                            maxLength: 6,
                            className: `bg-background/50 border-input transition-smooth focus-visible:ring-primary ${errors.postal ? "border-destructive focus-visible:ring-destructive" : ""}`,
                            "data-ocid": "checkout.postal_input"
                          }
                        ),
                        errors.postal && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-destructive text-xs",
                            "data-ocid": "checkout.postal_field_error",
                            children: errors.postal
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        type: "submit",
                        className: "w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base shadow-glow-orange transition-smooth mt-2",
                        "data-ocid": "checkout.submit_button",
                        children: [
                          "Place Order — ₹",
                          grandTotal
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-2", children: "— or —" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: `https://wa.me/919958658589?text=${waQuickOrder}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "inline-flex items-center gap-2 text-sm font-medium transition-smooth",
                          style: { color: "#25d366" },
                          "data-ocid": "checkout.whatsapp_order_link",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                            "Order via WhatsApp instead"
                          ]
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.4 },
              className: "lg:col-span-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                OrderSummary,
                {
                  items: cartItems,
                  subtotal: cartTotal,
                  delivery,
                  gst,
                  grandTotal
                }
              )
            }
          )
        ] })
      ]
    },
    "form"
  ) }) }) });
}
export {
  Checkout as default
};
