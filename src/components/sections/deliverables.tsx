"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/variants";

const deliverables = [
  {
    number: 1,
    title: "Master Voice Persona Document",
    bullets: [
      "Voice DNA metrics & scores",
      "Core identity markers",
      "Signature phrases & patterns",
      "Anti-patterns to avoid",
    ],
    preview: "MVP Template",
  },
  {
    number: 2,
    title: "Channel Voice Profiles",
    bullets: [
      "Threads that hit on X",
      "Carousels that convert on Instagram",
      "Videos that hook on YouTube",
      "Emails they actually read",
    ],
    preview: "Channel Cards",
  },
  {
    number: 3,
    title: "AI Prompts",
    bullets: [
      "Ready for ChatGPT, Claude & more",
      "Master voice + channel-specific prompts",
      "Copy → Paste → Generate",
      "Sound like yourself instantly",
    ],
    preview: "Prompt Snippet",
  },
  {
    number: 4,
    title: "Validation Checklist",
    bullets: [
      "Quick-check criteria (2 min)",
      "Deep-check criteria (full audit)",
      "Score any content against your voice",
      "Never publish off-brand again",
    ],
    preview: "Checklist Preview",
  },
];

const bonus = {
  title: "Prompting Persona",
  subtitle: "How you talk to AI.",
  bullets: [
    "Your prompting patterns analyzed",
    "Iteration style & correction language",
    "What you say when it's right vs wrong",
    "A guide for AI on how to work with YOU",
  ],
  note: "Available as add-on with any package.",
};

export function Deliverables() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Card positions for the helix connections (percentage from top)
  const cardPositions = [12, 30, 48, 66, 88];

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
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* DNA Helix SVG - Left side */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 lg:w-40">
            <svg
              viewBox="0 0 120 600"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="helixGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fb7185" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
                  <stop offset="100%" stopColor="#fda4af" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Left strand of the half-helix */}
              <motion.path
                d={`
                  M 30 0
                  C 30 30, 70 50, 70 75
                  C 70 100, 30 120, 30 150
                  C 30 180, 70 200, 70 225
                  C 70 250, 30 270, 30 300
                  C 30 330, 70 350, 70 375
                  C 70 400, 30 420, 30 450
                  C 30 480, 70 500, 70 525
                  C 70 550, 30 570, 30 600
                `}
                fill="none"
                stroke="url(#helixGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#glowFilter)"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* Right strand (partial - fades out) */}
              <motion.path
                d={`
                  M 70 0
                  C 70 30, 30 50, 30 75
                  C 30 100, 70 120, 70 150
                  C 70 180, 30 200, 30 225
                  C 30 250, 70 270, 70 300
                  C 70 330, 30 350, 30 375
                  C 30 400, 70 420, 70 450
                  C 70 480, 30 500, 30 525
                  C 30 550, 70 570, 70 600
                `}
                fill="none"
                stroke="#fda4af"
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              />

              {/* Connection strands that extend to cards */}
              {cardPositions.map((pos, i) => {
                const y = (pos / 100) * 600;
                // Calculate x position on the helix at this y
                const helixX = 30 + Math.sin((y / 600) * Math.PI * 4) * 20 + 20;

                return (
                  <motion.g key={i}>
                    {/* Connection line extending right */}
                    <motion.path
                      d={`M ${helixX} ${y} Q ${helixX + 30} ${y}, 120 ${y}`}
                      fill="none"
                      stroke={i === 4 ? "#fda4af" : "#fb7185"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                    />

                    {/* Node on the helix */}
                    <motion.circle
                      cx={helixX}
                      cy={y}
                      r="8"
                      fill={i === 4 ? "#fda4af" : "#fb7185"}
                      filter="url(#glowFilter)"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
                    />

                    {/* Inner glow of node */}
                    <motion.circle
                      cx={helixX}
                      cy={y}
                      r="4"
                      fill="#fef3c7"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 200 }}
                    />
                  </motion.g>
                );
              })}

              {/* Additional decorative nodes along the helix */}
              {[25, 45, 55, 75, 95].map((pos, i) => {
                const y = (pos / 100) * 600;
                const helixX = 30 + Math.sin((y / 600) * Math.PI * 4) * 20 + 20;
                return (
                  <motion.circle
                    key={`deco-${i}`}
                    cx={70 - (helixX - 30)}
                    cy={y}
                    r="4"
                    fill="#44403c"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Cards - vertical stack */}
          <div className="md:ml-36 lg:ml-44 space-y-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true, margin: "-150px" }}
              >
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
                    <ul className="space-y-1.5">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-stone-text">
                          <span className="text-coral mt-1.5 text-xs">●</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Bonus card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true, margin: "-150px" }}
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

                  <ul className="space-y-1.5 mt-4">
                    {bonus.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-text">
                        <span className="text-peach mt-1.5 text-xs">●</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

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
