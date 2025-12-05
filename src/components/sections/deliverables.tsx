"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/variants";

const deliverables = [
  {
    number: 1,
    title: "Master Voice Persona Document",
    description:
      "Your complete voice profile in one document. Voice DNA metrics, core identity, signature elements, anti-patterns. The source of truth for your brand voice.",
    preview: "MVP Template",
  },
  {
    number: 2,
    title: "Channel Voice Profiles",
    description:
      "Platform-specific voice guides. How your voice adapts for Twitter's brevity, newsletter's depth, YouTube's energy. Each with specific patterns and examples.",
    preview: "Twitter Voice Card",
  },
  {
    number: 3,
    title: "AI Prompts",
    description:
      "Ready-to-use prompts for ChatGPT, Claude, and other AI tools. One for your master voice, one for each channel. Copy, paste, generate content that sounds like you.",
    preview: "Prompt Snippet",
  },
  {
    number: 4,
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

function DNAStrand({ progress }: { progress: number }) {
  // Generate helix points for SVG path
  const generateHelixPath = (side: "left" | "right") => {
    const points: string[] = [];
    const amplitude = 40;
    const frequency = 0.015;
    const height = 1200;
    const offset = side === "right" ? Math.PI : 0;

    for (let y = 0; y <= height; y += 5) {
      const x = Math.sin(y * frequency + offset) * amplitude + 50;
      if (y === 0) {
        points.push(`M ${x} ${y}`);
      } else {
        points.push(`L ${x} ${y}`);
      }
    }
    return points.join(" ");
  };

  // Generate connector lines between strands
  const generateConnectors = () => {
    const connectors = [];
    const amplitude = 40;
    const frequency = 0.015;

    for (let y = 60; y <= 1100; y += 120) {
      const x1 = Math.sin(y * frequency) * amplitude + 50;
      const x2 = Math.sin(y * frequency + Math.PI) * amplitude + 50;
      connectors.push({ y, x1, x2 });
    }
    return connectors;
  };

  const connectors = generateConnectors();

  return (
    <svg
      viewBox="0 0 100 1200"
      className="absolute left-0 top-0 h-full w-24 md:w-32"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="strandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
          <stop offset="100%" stopColor="#fda4af" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left strand */}
      <motion.path
        d={generateHelixPath("left")}
        fill="none"
        stroke="url(#strandGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.5 }}
      />

      {/* Right strand */}
      <motion.path
        d={generateHelixPath("right")}
        fill="none"
        stroke="url(#strandGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.5 }}
      />

      {/* Connectors */}
      {connectors.map((conn, i) => (
        <motion.line
          key={i}
          x1={conn.x1}
          y1={conn.y}
          x2={conn.x2}
          y2={conn.y}
          stroke="#44403c"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > (i / connectors.length) ? 0.5 : 0 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}

      {/* Nodes at intersections */}
      {connectors.map((conn, i) => (
        <motion.g key={`nodes-${i}`}>
          <motion.circle
            cx={conn.x1}
            cy={conn.y}
            r="5"
            fill="#fb7185"
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: progress > (i / connectors.length) ? 1 : 0 }}
            transition={{ delay: i * 0.1, type: "spring" }}
          />
          <motion.circle
            cx={conn.x2}
            cy={conn.y}
            r="5"
            fill="#fda4af"
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: progress > (i / connectors.length) ? 1 : 0 }}
            transition={{ delay: i * 0.1 + 0.05, type: "spring" }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

export function Deliverables() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const strandProgress = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

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

        {/* DNA strand + cards layout */}
        <div ref={containerRef} className="relative">
          {/* DNA Strand - left side */}
          <motion.div
            className="hidden md:block"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]) }}
          >
            <DNAStrand progress={strandProgress.get()} />
          </motion.div>

          {/* Cards - vertical stack */}
          <div className="md:ml-32 lg:ml-40 space-y-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Connection line to DNA strand (visible on md+) */}
                <div className="hidden md:block absolute left-0 top-1/2 -translate-x-full w-8 lg:w-12">
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-coral/50 to-coral"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>

                <Card className="relative overflow-hidden">
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-coral/10 border border-coral/30 flex items-center justify-center">
                    <span className="font-headline font-bold text-coral">
                      {item.number}
                    </span>
                  </div>

                  <div className="pr-16">
                    <span className="text-xs text-stone-text font-mono uppercase tracking-wider">
                      {item.preview}
                    </span>
                    <h3 className="font-headline text-xl font-bold text-cream mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-stone-text">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Bonus card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative mt-8"
            >
              {/* Connection line */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-x-full w-8 lg:w-12">
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-peach/50 to-peach"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "right" }}
                />
              </div>

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
        </div>
      </Container>
    </section>
  );
}
