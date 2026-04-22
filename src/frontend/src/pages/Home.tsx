import { Link } from "@tanstack/react-router";
import { ChevronRight, Leaf, Smile, Star, Zap } from "lucide-react";
import { motion } from "motion/react";

const WA_ORDER =
  "https://wa.me/919958658589?text=Hi%2C%20I%20want%20to%20place%20an%20order!";

const featuredItems = [
  {
    name: "Margherita Pizza",
    price: "₹120",
    emoji: "🍕",
    img: "/assets/generated/pizza-margherita.dim_600x400.jpg",
    tag: "Fan Favourite",
  },
  {
    name: "Cheese Burst Burger",
    price: "₹100",
    emoji: "🍔",
    img: "/assets/generated/cheese-burst-burger.dim_600x400.jpg",
    tag: "Bestseller",
  },
  {
    name: "Masala Dosa",
    price: "₹90",
    emoji: "🫓",
    img: "/assets/generated/masala-dosa.dim_600x400.jpg",
    tag: "South Indian",
  },
  {
    name: "Veg Momos (8 pcs)",
    price: "₹70",
    emoji: "🥟",
    img: "/assets/generated/veg-momos.dim_600x400.jpg",
    tag: "Street Hit",
  },
  {
    name: "Paneer Wrap",
    price: "₹100",
    emoji: "🌯",
    img: "/assets/generated/paneer-wrap.dim_600x400.jpg",
    tag: "Loaded",
  },
  {
    name: "Mango Shake",
    price: "₹80",
    emoji: "🥤",
    img: "/assets/generated/mango-shake.dim_600x400.jpg",
    tag: "Refreshing",
  },
];

const reasons = [
  {
    icon: Leaf,
    title: "Fresh Every Day",
    desc: "We prep fresh — no frozen shortcuts, just real ingredients daily.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Order on WhatsApp and get your food ready in minutes. No waiting.",
  },
  {
    icon: Smile,
    title: "Honest Prices",
    desc: "Premium taste without burning a hole in your pocket. Always.",
  },
];

const reviews = [
  {
    name: "Arjun S.",
    stars: 5,
    text: "Best momos in Khazoori Khas! Spicy and fresh every single time.",
  },
  {
    name: "Priya M.",
    stars: 5,
    text: "Ordered dosa and it was crispy perfection. Will order again tonight!",
  },
  {
    name: "Rahul K.",
    stars: 5,
    text: "Their cheese burst burger hits different — loaded and delicious.",
  },
];

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero */}
      <section
        data-ocid="home.hero_section"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,123,0,0.18) 0%, transparent 70%), oklch(0.10 0 0)",
        }}
      >
        {/* Decorative blob */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#ff7b00" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-10"
          style={{ background: "#ff7b00" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            📍 Block E, Khazoori Khas, Delhi
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-6">
            Take The Bite
            <br />
            of <span className="text-gradient-orange">Anytime</span>{" "}
            <span role="img" aria-label="yummy">
              😋
            </span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Slick, bold street café vibes — ultra-fresh pizzas, burgers, momos,
            south Indian & more. Real flavour, always.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.hero_order_button"
              className="rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow-orange transition-smooth hover:scale-105 hover:brightness-110"
            >
              📲 Order on WhatsApp
            </a>
            <Link
              to="/menu"
              data-ocid="home.hero_menu_button"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-smooth hover:bg-white/10 hover:border-white/30 flex items-center gap-2 justify-center"
            >
              Browse Menu <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative z-10 mt-16 flex gap-8 sm:gap-14"
        >
          {[
            { val: "200+", label: "Daily Orders" },
            { val: "4.9★", label: "Customer Rating" },
            { val: "10AM", label: "Opens Daily" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-extrabold text-primary">
                {s.val}
              </div>
              <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured items */}
      <section
        data-ocid="home.featured_section"
        className="py-20 px-4"
        style={{ background: "oklch(0.13 0.005 0)" }}
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Featured <span className="text-gradient-orange">Menu Items</span>
            </h2>
            <p className="text-white/50 max-w-sm mx-auto text-sm">
              Crowd favourites — try these first if you're new here.
            </p>
          </motion.div>

          <div
            data-ocid="home.featured_list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {featuredItems.map((item, i) => (
              <motion.div
                key={item.name}
                data-ocid={`home.featured_item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group rounded-2xl overflow-hidden glass glass-hover shadow-elevated"
              >
                <div className="relative h-44 bg-[oklch(0.16_0_0)] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/assets/images/placeholder.svg";
                    }}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-bold text-white">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-white text-base">
                      {item.name}
                    </h3>
                    <span className="font-bold text-primary text-sm">
                      {item.price}
                    </span>
                  </div>
                  <a
                    href={`${WA_ORDER}&item=${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`home.featured_order_button.${i + 1}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary/15 border border-primary/25 py-2.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-white"
                  >
                    📲 Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              data-ocid="home.view_full_menu_button"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-3 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-white"
            >
              View Full Menu <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section
        data-ocid="home.why_section"
        className="py-20 px-4"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,123,0,0.08) 0%, transparent 70%), oklch(0.10 0 0)",
        }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Why <span className="text-gradient-orange">Choose Us?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                data-ocid={`home.reason_card.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center glass-hover"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 mb-4">
                  <r.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {r.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        data-ocid="home.reviews_section"
        className="py-20 px-4"
        style={{ background: "oklch(0.13 0.005 0)" }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              What Our{" "}
              <span className="text-gradient-orange">Customers Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                data-ocid={`home.review_card.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 glass-hover"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star
                      key={`star-${r.name}-${j}`}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  "{r.text}"
                </p>
                <p className="text-white font-semibold text-sm">— {r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        data-ocid="home.cta_section"
        className="py-16 px-4 relative overflow-hidden"
        style={{ background: "oklch(0.66 0.187 50.2)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.2) 0%, transparent 50%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative container mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Hungry? We're Open Till 11 PM 🌙
          </h2>
          <p className="text-white/80 mb-8 text-base">
            WhatsApp us your order and we'll have it ready before you arrive.
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="home.cta_order_button"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-elevated transition-smooth hover:scale-105"
          >
            📲 Order on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}
