import { j as jsxRuntimeExports, M as MapPin, P as Phone, C as Clock, a as MessageCircle } from "./index-JAF6-6qf.js";
import { m as motion } from "./proxy-bYZ_owAr.js";
const WA_URL = "https://wa.me/919958658589?text=Hi%2C%20I%20want%20to%20place%20an%20order!";
const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 11:00 PM" },
  { day: "Saturday", time: "10:00 AM – 11:00 PM" },
  { day: "Sunday", time: "10:00 AM – 11:00 PM" }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-screen pt-20 pb-16 text-white",
      style: { background: "oklch(0.10 0 0)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "text-center py-12",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl font-extrabold mb-3", children: [
                "Find ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-orange", children: "Us" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 max-w-sm mx-auto text-sm", children: "Walk in, call us, or order on WhatsApp — we're always ready." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              "data-ocid": "contact.info_card",
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.15 },
              className: "glass rounded-2xl p-7 space-y-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-white mb-5", children: "Two Good Mini Café" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mb-0.5 uppercase tracking-wider", children: "Address" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-sm font-medium", children: [
                          "Block E, Khazoori Khas,",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          "Delhi – 110090"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mb-0.5 uppercase tracking-wider", children: "Phone" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "tel:+919958658589",
                            "data-ocid": "contact.phone_link",
                            className: "text-white text-sm font-medium hover:text-primary transition-smooth",
                            children: "+91 99586 58589"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mb-2 uppercase tracking-wider", children: "Hours" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex justify-between gap-4 text-sm",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: h.day }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium", children: h.time })
                            ]
                          },
                          h.day
                        )) })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: WA_URL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "contact.whatsapp_button",
                    className: "flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-bold text-white transition-smooth hover:scale-105 hover:brightness-110 shadow-elevated",
                    style: { background: "#25d366" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 fill-white" }),
                      "Chat on WhatsApp"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              "data-ocid": "contact.map_card",
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 },
              className: "glass rounded-2xl overflow-hidden min-h-[360px]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  title: "Two Good Mini Café Location",
                  src: "https://maps.google.com/maps?q=Block+E+Khazoori+Khas+Delhi+110090&output=embed&z=16",
                  className: "w-full h-full min-h-[360px] border-0 grayscale opacity-80",
                  loading: "lazy",
                  allowFullScreen: true
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4",
            children: [
              {
                emoji: "🚶",
                title: "Walk In Welcome",
                desc: "Just around the corner — spot us at Block E, Khazoori Khas."
              },
              {
                emoji: "📲",
                title: "WhatsApp Order",
                desc: "Send us your order on WhatsApp and we'll confirm instantly."
              },
              {
                emoji: "⚡",
                title: "Quick Turnaround",
                desc: "Most orders ready in 10–15 minutes. No long waits."
              }
            ].map((tip, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `contact.tip_card.${i + 1}`,
                className: "glass rounded-2xl p-5 glass-hover",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-3", children: tip.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-white text-sm mb-1.5", children: tip.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs leading-relaxed", children: tip.desc })
                ]
              },
              tip.title
            ))
          }
        )
      ] })
    }
  );
}
export {
  Contact as default
};
