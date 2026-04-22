import { Link } from "@tanstack/react-router";
import { Clock, ExternalLink, Instagram, MapPin, Phone } from "lucide-react";

const WA_URL =
  "https://wa.me/919958658589?text=Hi%2C%20I%20want%20to%20place%20an%20order!";
const hostname = encodeURIComponent(
  typeof window !== "undefined" ? window.location.hostname : "twogoodcafe",
);

export function Footer() {
  return (
    <footer className="bg-[oklch(0.10_0_0)] border-t border-white/8 text-white/70">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Two Good <span className="text-gradient-orange">Mini Café</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Bold flavours, honest prices — your everyday street café in the
              heart of Delhi.
            </p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-1.5 text-sm hover:text-primary transition-smooth"
            >
              <Instagram className="h-4 w-4" />
              Follow us
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Full Menu", to: "/menu" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-primary transition-smooth"
                    data-ocid={`footer.${l.label.toLowerCase().replace(/ /g, "_")}_link`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Find Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Block E, Khazoori Khas, Delhi 110090</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="tel:+919958658589"
                  className="hover:text-primary transition-smooth"
                >
                  +91 99586 58589
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>10 AM – 11 PM, All Days</span>
              </li>
            </ul>
          </div>

          {/* Order */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Order Now
            </h4>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp_order_button"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow-orange transition-smooth hover:brightness-110 hover:scale-105"
            >
              <span>📲</span> WhatsApp Order
            </a>
            <p className="mt-3 text-xs text-white/40">
              Fastest way to order — we reply in minutes!
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>
            © {new Date().getFullYear()} Two Good Mini Café. All rights
            reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-smooth flex items-center gap-1"
          >
            Built with love using caffeine.ai{" "}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
