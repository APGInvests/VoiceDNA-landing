"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Process } from "@/components/sections/process";
import { Deliverables } from "@/components/sections/deliverables";
import { MetricsPreview } from "@/components/sections/metrics-preview";
import { BeforeAfter } from "@/components/sections/before-after";
import { Pricing } from "@/components/sections/pricing";
import { Personas } from "@/components/sections/personas";
import { FinalCTA } from "@/components/sections/final-cta";
import { LoadingScreen } from "@/components/ui/loading-screen";

export default function Home() {
  // Disable browser scroll restoration and scroll to top on page load
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-charcoal">
        <Header />
        <Hero />
        <Solution />
        <Problem />
        <MetricsPreview />
        <Process />
        <Deliverables />
        <BeforeAfter />
        <Pricing />
        <Personas />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
