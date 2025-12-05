"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/variants";

const personas = [
  {
    title: "Creators",
    hook: "You've built an audience. They know your voice.",
    description: "Now you need to scale content without losing what makes you YOU.",
    benefits: [
      "Generate first drafts that sound right",
      "Maintain consistency across platforms",
      "Train AI to be your writing partner, not replacement",
    ],
    quote:
      "I went from editing every AI output for 30 minutes to publishing in 5.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    title: "Consultants",
    hook: "Your expertise is premium. Your voice should be too.",
    description: "Generic AI makes you sound like every other consultant.",
    benefits: [
      "Sound like the expert you are, not a template",
      "Create proposals and content that match your brand",
      "Scale thought leadership without diluting quality",
    ],
    quote: "Clients hire me for how I think. Now my content reflects that.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Agencies",
    hook: "You need to capture client voices accurately.",
    description: "Every client sounds different. Your AI shouldn't flatten that.",
    benefits: [
      "Extract and document client voice systematically",
      "Create reusable prompts for each client",
      "Maintain brand consistency across team members",
    ],
    quote: "We voice-typed every client in our portfolio. Game changer.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
];

interface PersonaCardProps {
  persona: (typeof personas)[0];
  index: number;
}

function PersonaCard({ persona, index }: PersonaCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full h-[400px] cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-stone-card border border-stone-border rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-coral mb-6">{persona.icon}</div>
          <h3 className="font-headline text-2xl font-bold text-cream mb-3">
            {persona.title}
          </h3>
          <p className="text-lg text-peach">{persona.hook}</p>
          <p className="text-sm text-stone-text mt-4">Hover to learn more</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-stone-card border border-coral/30 rounded-2xl p-8 flex flex-col backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="font-headline text-xl font-bold text-cream mb-2">
            {persona.title}
          </h3>
          <p className="text-stone-text mb-4">{persona.description}</p>

          <p className="text-coral font-semibold mb-2">VoiceDNA lets you:</p>
          <ul className="space-y-2 flex-1">
            {persona.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-cream">
                <span className="text-success mt-0.5">✓</span>
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-4 pt-4 border-t border-stone-border text-stone-text italic text-sm">
            "{persona.quote}"
          </blockquote>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Personas() {
  return (
    <section id="personas" className="py-24 md:py-32 bg-stone-card">
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
            Built For People Who Refuse to Sound Generic
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <PersonaCard key={persona.title} persona={persona} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
