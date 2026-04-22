import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { WhatsAppFloat } from "./WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.10_0_0)] text-foreground">
      <Navbar />
      <main className="flex-1 page-enter">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
