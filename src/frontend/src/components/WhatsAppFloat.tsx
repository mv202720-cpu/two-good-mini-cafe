import { MessageCircle } from "lucide-react";

const WA_NUMBER = "919958658589";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20to%20place%20an%20order%20from%20Two%20Good%20Mini%20Caf%C3%A9!`;

export function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.float_button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white transition-smooth hover:scale-105 hover:shadow-glow-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whatsapp-pulse relative"
      style={{ background: "#25d366" }}
    >
      <MessageCircle className="h-5 w-5 fill-white" />
      <span className="hidden sm:inline">Order Now</span>
    </a>
  );
}
