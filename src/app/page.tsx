"use client";

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
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-charcoal">
        <Header />
        <Hero />
        <Solution />
        <Problem />
        <Process />
        <Deliverables />
        <MetricsPreview />
        <Pricing />
        <BeforeAfter />
        <Personas />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
