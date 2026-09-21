import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/landing/catalog";
import { Craft } from "@/components/landing/craft";
import { Faq } from "@/components/landing/faq";
import { Featured } from "@/components/landing/featured";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Origins } from "@/components/landing/origins";
import { Pantry } from "@/components/landing/pantry";
import { TrustBar } from "@/components/landing/trust-bar";
import { WhatsappFab } from "@/components/landing/whatsapp-fab";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Origins />
        <Featured />
        <Catalog />
        <Craft />
        <Pantry />
        <Faq />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
