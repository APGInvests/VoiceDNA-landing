"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/variants";

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const rightOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section
      id="problem"
      ref={containerRef}
      className="py-24 md:py-32 bg-stone-card overflow-hidden"
    >
      <Container size="xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-headline text-4xl md:text-5xl font-bold text-cream"
          >
            AI Writes Like AI.{" "}
            <span className="text-coral">Not Like You.</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - The Problem */}
          <motion.div style={{ opacity: leftOpacity }} className="relative">
            <div className="absolute inset-0 bg-red-500/5 rounded-2xl" />
            <div className="relative p-8 border border-red-500/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <span className="text-red-400 font-mono text-sm uppercase tracking-wider">
                  Without VoiceDNA
                </span>
              </div>

              <div className="space-y-4 text-stone-text">
                <p>You've tried the prompts.</p>
                <p>The templates.</p>
                <p>The custom instructions.</p>
                <p className="text-cream font-semibold pt-4">
                  It still sounds... off.
                </p>
                <p>Generic. Corporate.</p>
                <p>Like a thousand other people using the same tools.</p>
              </div>

              <div className="mt-8 p-4 bg-charcoal rounded-lg border border-stone-border">
                <p className="text-red-400 font-semibold mb-2">The problem:</p>
                <p className="text-stone-text">
                  AI doesn't know that you start sentences with "Look," or that
                  you ask 12 questions per thousand words, or that you never use
                  the word "leverage."
                </p>
              </div>

              <div className="mt-6 p-4 bg-charcoal rounded-lg border border-coral/30">
                <p className="text-coral font-semibold text-center">Until now.</p>
              </div>
            </div>
          </motion.div>

          {/* Right - The Solution */}
          <motion.div style={{ opacity: rightOpacity }} className="relative">
            <div className="absolute inset-0 bg-success/5 rounded-2xl" />
            <div className="relative p-8 border border-success/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-success font-mono text-sm uppercase tracking-wider">
                  With VoiceDNA
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-cream font-semibold text-lg">
                  The problem isn't AI.
                </p>
                <p className="text-cream font-semibold text-lg">
                  The problem is AI doesn't know YOUR voice.
                </p>
                <p className="text-stone-text pt-4">
                  We extract the patterns that make you YOU:
                </p>
                <ul className="space-y-2 text-cream">
                  <li className="flex items-center gap-2">
                    <span className="text-coral">→</span> Your sentence rhythms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-coral">→</span> Your signature phrases
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-coral">→</span> Your question patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-coral">→</span> What you never say
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-charcoal rounded-lg border border-success/30">
                <p className="text-success font-semibold text-center">
                  Never publish off-brand content again.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
