"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DNAHelix } from "@/components/dna/dna-helix";
import { fadeInUp, staggerContainer } from "@/lib/variants";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-stone-card" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fb7185 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-tight"
            >
              Your Voice.{" "}
              <span className="text-coral">Quantified.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-xl sm:text-2xl text-stone-text max-w-xl mx-auto lg:mx-0"
            >
              Extract your unique voice DNA across every channel you use. Get AI
              prompts that actually sound like you.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-cream/70"
            >
              Not templates. Not guesswork.{" "}
              <span className="text-coral font-semibold">
                Your actual patterns, measured across 27 metrics.
              </span>
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
              >
                Get Your Voice DNA
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("process")}
              >
                See How It Works
              </Button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-sm text-stone-text italic"
            >
              Trusted by creators, consultants, and agencies who refuse to sound
              like everyone else.
            </motion.p>
          </motion.div>

          {/* DNA Helix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <DNAHelix className="w-full h-full" />

            {/* Glow effect behind helix */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-coral rounded-full" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-stone-text rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-coral rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
