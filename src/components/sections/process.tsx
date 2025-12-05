"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/variants";

const steps = [
  {
    number: 1,
    title: "Collect",
    subtitle: "We Gather Your Content",
    description:
      "You share your existing content across channels: tweets and threads, newsletter archives, YouTube transcripts, blog posts, LinkedIn content.",
    detail: "Minimum 10,000 words per channel for accurate extraction.",
    note: "No interviews. No questionnaires. Just the content you've already created.",
  },
  {
    number: 2,
    title: "Analyze",
    subtitle: "We Extract Your Voice DNA",
    description:
      "Our system analyzes your content across 40+ metrics per channel including sentence length, pronoun ratios, question frequency, contraction rate, and signature phrases.",
    detail: "This isn't vibes. This is data.",
    note: null,
  },
  {
    number: 3,
    title: "Generate",
    subtitle: "We Build Your Voice Profiles",
    description:
      "From the analysis, we create your Master Voice Persona (MVP), Channel Voices for each platform, and a Validation Checklist.",
    detail: "Platform-specific profiles that adapt your MVP to each channel's constraints and culture.",
    note: null,
  },
  {
    number: 4,
    title: "Deploy",
    subtitle: "You Sound Like You, Everywhere",
    description:
      "You receive ready-to-use AI prompts for every channel. Copy. Paste. Generate. Sound like yourself instantly.",
    detail: "No more 'make it sound more like me.' No more endless editing.",
    note: "Your voice. On demand.",
  },
];

interface ProcessNodeProps {
  step: (typeof steps)[0];
  index: number;
  isInView: boolean;
}

function ProcessNode({ step, index, isInView }: ProcessNodeProps) {
  const delay = index * 0.2;

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { delay, duration: 0.5 },
        },
      }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline line and node */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: 1,
                  opacity: 1,
                  boxShadow: "0 0 20px rgba(251, 113, 133, 0.5)",
                }
              : { scale: 0.5, opacity: 0 }
          }
          transition={{ delay: delay + 0.1, duration: 0.4 }}
          className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-coral flex items-center justify-center text-charcoal font-headline font-bold text-lg md:text-xl"
        >
          {step.number}
        </motion.div>

        {/* Connecting line */}
        {index < steps.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
            className="w-0.5 h-full min-h-[120px] bg-gradient-to-b from-coral to-stone-border origin-top"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          <span className="text-coral font-mono text-sm uppercase tracking-wider">
            Step {step.number}
          </span>
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-cream mt-1">
            {step.title}
          </h3>
          <p className="text-lg text-peach mt-1">{step.subtitle}</p>

          <p className="text-stone-text mt-4 max-w-lg">{step.description}</p>

          {step.detail && (
            <p className="text-cream font-semibold mt-3">{step.detail}</p>
          )}

          {step.note && (
            <p className="text-stone-text italic mt-2">{step.note}</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="process" className="py-24 md:py-32 bg-charcoal">
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
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-stone-text mt-4 max-w-2xl mx-auto"
          >
            From scattered content to unified voice in four steps.
          </motion.p>
        </motion.div>

        <div ref={containerRef} className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessNode
              key={step.number}
              step={step}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
