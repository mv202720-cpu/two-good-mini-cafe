import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingCart, UtensilsCrossed, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCartCount } from "../context/CartContext";

const WA_HREF =
  "https://wa.me/919958658589?text=Hi%2C%20I%20want%20to%20order!";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const prevPathRef = useRef(pathname);
  const cartCount = useCartCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setMobileOpen(false);
    }
  });

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-smooth ${
        scrolled || mobileOpen ? "glass-dark shadow-elevated" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          data-ocid="navbar.logo_link"
          className="flex items-center gap-2 transition-smooth hover:opacity-80"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow-orange">
            <UtensilsCrossed className="h-4 w-4" />
          </span>
          <span className="font-display font-bold text-white leading-tight text-[15px] sm:text-base">
            Two Good <span className="text-gradient-orange">Mini Café</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-smooth ${
                  active
                    ? "text-primary"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}

          {/* Cart icon */}
          <Link
            to="/cart"
            data-ocid="navbar.cart_link"
            aria-label={`Cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
            className={`relative ml-1 p-2 rounded-lg transition-smooth ${
              pathname === "/cart"
                ? "text-primary"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span
                data-ocid="navbar.cart_badge"
                className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-glow-orange animate-fade-in"
              >
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="navbar.order_button"
            className="ml-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-glow-orange transition-smooth hover:scale-105 hover:brightness-110"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile right controls */}
        <div className="md:hidden flex items-center gap-1">
          {/* Mobile cart icon */}
          <Link
            to="/cart"
            data-ocid="navbar.mobile_cart_link"
            aria-label={`Cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
            className={`relative p-2 rounded-lg transition-smooth ${
              pathname === "/cart"
                ? "text-primary"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span
                data-ocid="navbar.mobile_cart_badge"
                className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-glow-orange animate-fade-in"
              >
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="navbar.hamburger_button"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav
          data-ocid="navbar.mobile_menu"
          className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-1 animate-fade-in"
          aria-label="Mobile navigation"
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-smooth ${
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="navbar.mobile_order_button"
            className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground shadow-glow-orange transition-smooth"
          >
            Order on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
