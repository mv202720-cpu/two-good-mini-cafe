import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-JAF6-6qf.js";
import { m as motion } from "./proxy-bYZ_owAr.js";
import { C as ChevronRight } from "./chevron-right-Be4RGCaQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
];
const Smile = createLucideIcon("smile", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const WA_ORDER = "https://wa.me/919958658589?text=Hi%2C%20I%20want%20to%20place%20an%20order!";
const featuredItems = [
  {
    name: "Margherita Pizza",
    price: "₹120",
    emoji: "🍕",
    img: "/assets/generated/pizza-margherita.dim_600x400.jpg",
    tag: "Fan Favourite"
  },
  {
    name: "Cheese Burst Burger",
    price: "₹100",
    emoji: "🍔",
    img: "/assets/generated/cheese-burst-burger.dim_600x400.jpg",
    tag: "Bestseller"
  },
  {
    name: "Masala Dosa",
    price: "₹90",
    emoji: "🫓",
    img: "/assets/generated/masala-dosa.dim_600x400.jpg",
    tag: "South Indian"
  },
  {
    name: "Veg Momos (8 pcs)",
    price: "₹70",
    emoji: "🥟",
    img: "/assets/generated/veg-momos.dim_600x400.jpg",
    tag: "Street Hit"
  },
  {
    name: "Paneer Wrap",
    price: "₹100",
    emoji: "🌯",
    img: "/assets/generated/paneer-wrap.dim_600x400.jpg",
    tag: "Loaded"
  },
  {
    name: "Mango Shake",
    price: "₹80",
    emoji: "🥤",
    img: "/assets/generated/mango-shake.dim_600x400.jpg",
    tag: "Refreshing"
  }
];
const reasons = [
  {
    icon: Leaf,
    title: "Fresh Every Day",
    desc: "We prep fresh — no frozen shortcuts, just real ingredients daily."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Order on WhatsApp and get your food ready in minutes. No waiting."
  },
  {
    icon: Smile,
    title: "Honest Prices",
    desc: "Premium taste without burning a hole in your pocket. Always."
  }
];
const reviews = [
  {
    name: "Arjun S.",
    stars: 5,
    text: "Best momos in Khazoori Khas! Spicy and fresh every single time."
  },
  {
    name: "Priya M.",
    stars: 5,
    text: "Ordered dosa and it was crispy perfection. Will order again tonight!"
  },
  {
    name: "Rahul K.",
    stars: 5,
    text: "Their cheese burst burger hits different — loaded and delicious."
  }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "home.hero_section",
        className: "relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden",
        style: {
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,123,0,0.18) 0%, transparent 70%), oklch(0.10 0 0)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20",
              style: { background: "#ff7b00" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-10",
              style: { background: "#ff7b00" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              className: "relative z-10 text-center max-w-3xl mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6", children: "📍 Block E, Khazoori Khas, Delhi" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-6", children: [
                  "Take The Bite",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "of ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Anytime" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "img", "aria-label": "yummy", children: "😋" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed", children: "Slick, bold street café vibes — ultra-fresh pizzas, burgers, momos, south Indian & more. Real flavour, always." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: WA_ORDER,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "home.hero_order_button",
                      className: "rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow-orange transition-smooth hover:scale-105 hover:brightness-110",
                      children: "📲 Order on WhatsApp"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/menu",
                      "data-ocid": "home.hero_menu_button",
                      className: "rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-smooth hover:bg-white/10 hover:border-white/30 flex items-center gap-2 justify-center",
                      children: [
                        "Browse Menu ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4, duration: 0.5 },
              className: "relative z-10 mt-16 flex gap-8 sm:gap-14",
              children: [
                { val: "200+", label: "Daily Orders" },
                { val: "4.9★", label: "Customer Rating" },
                { val: "10AM", label: "Opens Daily" }
              ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold text-primary", children: s.val }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/50 mt-0.5", children: s.label })
              ] }, s.label))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.featured_section",
        className: "py-20 px-4",
        style: { background: "oklch(0.13 0.005 0)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold mb-3", children: [
                  "Featured ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Menu Items" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-sm mx-auto text-sm", children: "Crowd favourites — try these first if you're new here." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "home.featured_list",
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
              children: featuredItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": `home.featured_item.${i + 1}`,
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.08, duration: 0.4 },
                  className: "group rounded-2xl overflow-hidden glass glass-hover shadow-elevated",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 bg-[oklch(0.16_0_0)] overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: item.img,
                          alt: item.name,
                          className: "w-full h-full object-cover transition-smooth group-hover:scale-105",
                          onError: (e) => {
                            e.target.src = "/assets/images/placeholder.svg";
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-bold text-white", children: item.tag })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-white text-base", children: item.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-sm", children: item.price })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `${WA_ORDER}&item=${encodeURIComponent(item.name)}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "data-ocid": `home.featured_order_button.${i + 1}`,
                          className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary/15 border border-primary/25 py-2.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-white",
                          children: "📲 Order on WhatsApp"
                        }
                      )
                    ] })
                  ]
                },
                item.name
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/menu",
              "data-ocid": "home.view_full_menu_button",
              className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-3 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-white",
              children: [
                "View Full Menu ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.why_section",
        className: "py-20 px-4",
        style: {
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,123,0,0.08) 0%, transparent 70%), oklch(0.10 0 0)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-12",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold mb-3", children: [
                "Why ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Choose Us?" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: reasons.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              "data-ocid": `home.reason_card.${i + 1}`,
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "glass rounded-2xl p-6 text-center glass-hover",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "h-6 w-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-white text-base mb-2", children: r.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 text-sm leading-relaxed", children: r.desc })
              ]
            },
            r.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.reviews_section",
        className: "py-20 px-4",
        style: { background: "oklch(0.13 0.005 0)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-center mb-12",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold mb-3", children: [
                "What Our",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Customers Say" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              "data-ocid": `home.review_card.${i + 1}`,
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "glass rounded-2xl p-5 glass-hover",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: Array.from({ length: r.stars }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: "h-4 w-4 fill-primary text-primary"
                  },
                  `star-${r.name}-${j}`
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-sm leading-relaxed mb-4", children: [
                  '"',
                  r.text,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-semibold text-sm", children: [
                  "— ",
                  r.name
                ] })
              ]
            },
            r.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "home.cta_section",
        className: "py-16 px-4 relative overflow-hidden",
        style: { background: "oklch(0.66 0.187 50.2)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute inset-0 opacity-20",
              style: {
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.2) 0%, transparent 50%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.97 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              className: "relative container mx-auto max-w-2xl text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-extrabold text-white mb-4", children: "Hungry? We're Open Till 11 PM 🌙" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 mb-8 text-base", children: "WhatsApp us your order and we'll have it ready before you arrive." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: WA_ORDER,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "home.cta_order_button",
                    className: "inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-elevated transition-smooth hover:scale-105",
                    children: "📲 Order on WhatsApp"
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  Home as default
};
