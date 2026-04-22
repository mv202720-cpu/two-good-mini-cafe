import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const WA_URL =
  "https://wa.me/919958658589?text=Hi%2C%20I%20want%20to%20place%20an%20order!";

const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 11:00 PM" },
  { day: "Saturday", time: "10:00 AM – 11:00 PM" },
  { day: "Sunday", time: "10:00 AM – 11:00 PM" },
];

export default function Contact() {
  return (
    <div
      className="min-h-screen pt-20 pb-16 text-white"
      style={{ background: "oklch(0.10 0 0)" }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-3">
            Find <span className="text-gradient-orange">Us</span>
          </h1>
          <p className="text-white/50 max-w-sm mx-auto text-sm">
            Walk in, call us, or order on WhatsApp — we're always ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info card */}
          <motion.div
            data-ocid="contact.info_card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="glass rounded-2xl p-7 space-y-6"
          >
            <div>
              <h2 className="font-display font-bold text-xl text-white mb-5">
                Two Good Mini Café
              </h2>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3 items-start">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5 uppercase tracking-wider">
                      Address
                    </p>
                    <p className="text-white text-sm font-medium">
                      Block E, Khazoori Khas,
                      <br />
                      Delhi – 110090
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-start">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Phone className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5 uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href="tel:+919958658589"
                      data-ocid="contact.phone_link"
                      className="text-white text-sm font-medium hover:text-primary transition-smooth"
                    >
                      +91 99586 58589
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3 items-start">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Clock className="h-5 w-5 text-primary" />
                  </span>
                  <div className="flex-1">
                    <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">
                      Hours
                    </p>
                    <div className="space-y-1.5">
                      {hours.map((h) => (
                        <div
                          key={h.day}
                          className="flex justify-between gap-4 text-sm"
                        >
                          <span className="text-white/60">{h.day}</span>
                          <span className="text-white font-medium">
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_button"
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-bold text-white transition-smooth hover:scale-105 hover:brightness-110 shadow-elevated"
              style={{ background: "#25d366" }}
            >
              <MessageCircle className="h-5 w-5 fill-white" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            data-ocid="contact.map_card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl overflow-hidden min-h-[360px]"
          >
            <iframe
              title="Two Good Mini Café Location"
              src="https://maps.google.com/maps?q=Block+E+Khazoori+Khas+Delhi+110090&output=embed&z=16"
              className="w-full h-full min-h-[360px] border-0 grayscale opacity-80"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </div>

        {/* Extra info strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              emoji: "🚶",
              title: "Walk In Welcome",
              desc: "Just around the corner — spot us at Block E, Khazoori Khas.",
            },
            {
              emoji: "📲",
              title: "WhatsApp Order",
              desc: "Send us your order on WhatsApp and we'll confirm instantly.",
            },
            {
              emoji: "⚡",
              title: "Quick Turnaround",
              desc: "Most orders ready in 10–15 minutes. No long waits.",
            },
          ].map((tip, i) => (
            <div
              key={tip.title}
              data-ocid={`contact.tip_card.${i + 1}`}
              className="glass rounded-2xl p-5 glass-hover"
            >
              <div className="text-2xl mb-3">{tip.emoji}</div>
              <h3 className="font-display font-bold text-white text-sm mb-1.5">
                {tip.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
