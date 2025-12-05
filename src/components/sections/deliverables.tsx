"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/variants";

const deliverables = [
  {
    title: "Master Voice Persona Document",
    description:
      "Your complete voice profile in one document. Voice DNA metrics, core identity, signature elements, anti-patterns. The source of truth for your brand voice.",
    preview: "MVP Template",
  },
  {
    title: "Channel Voice Profiles",
    description:
      "Platform-specific voice guides. How your voice adapts for Twitter's brevity, newsletter's depth, YouTube's energy. Each with specific patterns and examples.",
    preview: "Twitter Voice Card",
  },
  {
    title: "AI Prompts",
    description:
      "Ready-to-use prompts for ChatGPT, Claude, and other AI tools. One for your master voice, one for each channel. Copy, paste, generate content that sounds like you.",
    preview: "Prompt Snippet",
  },
  {
    title: "Validation Checklist",
    description:
      "Quick-check and deep-check criteria to verify any content matches your voice. Never publish off-brand content again.",
    preview: "Checklist Preview",
  },
];

const bonus = {
  title: "Prompting Persona",
  subtitle: "How you talk to AI.",
  description:
    "This is the meta-layer no one else offers. We analyze how YOU communicate with AI tools: your prompting patterns, iteration style, correction language, what you say when it's right vs wrong. The result: A guide for AI on how to work with YOU specifically.",
  note: "Available as add-on with any package.",
};

export function Deliverables() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  return (
    <section id="deliverables" className="py-24 md:py-32 bg-stone-card">
      <Container size="lg">
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
            Your Complete Voice System
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-stone-text mt-4 max-w-2xl mx-auto"
          >
            Everything you need to maintain consistent voice at scale.
          </motion.p>
        </motion.div>

        {/* Deliverable cards with fan effect */}
        <div ref={containerRef} className="relative">
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => {
              const rotate = useTransform(
                scrollYProgress,
                [0, 1],
                [(index - 1.5) * 3, 0]
              );
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [index * 20, 0]
              );

              return (
                <motion.div
                  key={item.title}
                  style={{ rotate, y }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-coral/10 border border-coral/20 flex items-center justify-center text-coral font-headline font-bold">
                        {index + 1}
                      </div>
                      <span className="text-xs text-stone-text font-mono">
                        {item.preview}
                      </span>
                    </div>
                    <h3 className="font-headline text-xl font-bold text-cream mb-3">
                      {item.title}
                    </h3>
                    <p className="text-stone-text">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Bonus card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card variant="glow" className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral/10 rounded-full blur-3xl" />

              <div className="relative">
                <Badge variant="coral" className="mb-4">
                  BONUS
                </Badge>

                <h3 className="font-headline text-2xl font-bold text-cream">
                  {bonus.title}
                </h3>
                <p className="text-coral font-semibold mt-1">{bonus.subtitle}</p>

                <p className="text-stone-text mt-4 max-w-2xl">
                  {bonus.description}
                </p>

                <p className="text-stone-text italic mt-4">{bonus.note}</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
