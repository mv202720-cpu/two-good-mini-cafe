import { c as createLucideIcon, b as useNavigate, u as useCart, j as jsxRuntimeExports, S as ShoppingCart, L as Link, U as UtensilsCrossed } from "./index-JAF6-6qf.js";
import { S as Separator, B as Button } from "./separator-D0G49_4l.js";
import { m as motion } from "./proxy-bYZ_owAr.js";
import { A as AnimatePresence } from "./index-DqgVw44B.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function CartLineItem({ item, index }) {
  const { updateQuantity, removeFromCart } = useCart();
  const { menuItem, quantity, selectedPriceIndex } = item;
  const priceEntry = menuItem.prices[selectedPriceIndex];
  const lineTotal = priceEntry.amount * quantity;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20, height: 0 },
      transition: {
        delay: index * 0.06,
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      },
      className: "glass rounded-xl p-4 flex gap-4 items-start",
      "data-ocid": `cart.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-5 h-5 rounded-sm border-2 flex items-center justify-center ${menuItem.isVeg ? "border-green-500" : "border-red-500"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-2 h-2 rounded-full ${menuItem.isVeg ? "bg-green-500" : "bg-red-500"}`
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground truncate", children: menuItem.name }),
          priceEntry.label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full", children: priceEntry.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-0.5", children: [
            "₹",
            priceEntry.amount,
            " each"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => updateQuantity(menuItem.id, selectedPriceIndex, quantity - 1),
              className: "w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground hover:text-primary transition-smooth",
              "aria-label": "Decrease quantity",
              "data-ocid": `cart.qty_decrease.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground w-6 text-center", children: quantity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => updateQuantity(menuItem.id, selectedPriceIndex, quantity + 1),
              className: "w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground hover:text-primary transition-smooth",
              "aria-label": "Increase quantity",
              "data-ocid": `cart.qty_increase.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex flex-col items-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-primary", children: [
            "₹",
            lineTotal
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => removeFromCart(menuItem.id, selectedPriceIndex),
              className: "text-muted-foreground hover:text-destructive transition-smooth",
              "aria-label": "Remove item",
              "data-ocid": `cart.delete_button.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
            }
          )
        ] })
      ]
    }
  );
}
function EmptyCart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      className: "flex flex-col items-center justify-center py-20 gap-6 text-center",
      "data-ocid": "cart.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full glass flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UtensilsCrossed, { className: "w-12 h-12 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold", children: "0" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Your cart is empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xs", children: "Looks like you haven't added anything yet. Explore our menu and find something delicious!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold px-8 shadow-glow-orange transition-smooth",
            "data-ocid": "cart.browse_menu_button",
            children: [
              "Browse Menu ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
            ]
          }
        ) })
      ]
    }
  );
}
function Cart() {
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useCart();
  const delivery = cartItems.length > 0 ? 20 : 0;
  const gst = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + delivery + gst;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background page-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        className: "flex items-center gap-3 mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground", children: "Your Cart" }),
            cartItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              cartItems.length,
              " item(s)"
            ] })
          ] })
        ]
      }
    ),
    cartItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyCart, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-3", "data-ocid": "cart.list", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: cartItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CartLineItem,
        {
          item,
          index: i
        },
        `${item.menuItem.id}__${item.selectedPriceIndex}`
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.4 },
          className: "lg:col-span-1",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "glass rounded-2xl p-6 shadow-elevated sticky top-24",
              "data-ocid": "cart.summary_panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground mb-5", children: "Price Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "₹",
                      cartTotal
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Delivery fee" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "₹",
                      delivery
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "GST (5%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "₹",
                      gst
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-2 bg-border/50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-base text-foreground", children: "Grand Total" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-xl text-primary", children: [
                      "₹",
                      grandTotal
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      onClick: () => navigate({ to: "/checkout" }),
                      className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold shadow-glow-orange transition-smooth h-12 text-base",
                      "data-ocid": "cart.checkout_button",
                      children: [
                        "Proceed to Checkout ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      className: "w-full border-border/60 text-foreground font-display font-medium transition-smooth h-11",
                      "data-ocid": "cart.continue_shopping_button",
                      children: "Continue Shopping"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-4", children: "🎉 Free delivery on orders above ₹299!" })
              ]
            }
          )
        }
      )
    ] })
  ] }) });
}
export {
  Cart as default
};
