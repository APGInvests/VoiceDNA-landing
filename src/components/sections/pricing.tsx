"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/variants";

const tiers = [
  {
    name: "Foundation",
    price: 500,
    description: "Perfect for creators focused on one primary platform.",
    features: [
      "Master Voice Persona (MVP)",
      "1 Channel Voice Profile",
      "1 AI Prompt",
      "Validation Checklist",
    ],
    bestFor: "Solopreneurs, new creators, single-platform focus",
    popular: false,
  },
  {
    name: "Multi-Channel",
    price: 1200,
    description: "For creators active across multiple platforms.",
    features: [
      "Master Voice Persona (MVP)",
      "3 Channel Voice Profiles",
      "3 AI Prompts",
      "Validation Checklist",
      "Cross-Channel Consistency Guide",
    ],
    bestFor: "Active creators, consultants, multi-platform brands",
    popular: true,
  },
  {
    name: "Complete System",
    price: 2500,
    description: "Full voice extraction for serious brands.",
    features: [
      "Master Voice Persona (MVP)",
      "ALL Channel Voice Profiles",
      "ALL AI Prompts",
      "Validation Checklist",
      "Cross-Channel Consistency Guide",
      "Quarterly Refresh Session",
    ],
    bestFor: "Agencies, established brands, teams",
    popular: false,
  },
];

const addOn = {
  name: "Prompting Persona",
  price: 300,
  description:
    "Discover how YOU talk to AI and get a prompt for AI on how to work with you specifically.",
};

interface PricingCardProps {
  tier: (typeof tiers)[0];
  index: number;
}

function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`relative ${tier.popular ? "mt-6 md:mt-0" : ""}`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <Badge variant="coral">Most Popular</Badge>
        </div>
      )}

      <Card
        variant={tier.popular ? "glow" : "default"}
        className={`h-full flex flex-col ${tier.popular ? "md:scale-105" : ""} border-coral/30 md:border-stone-border ${tier.popular ? "border-coral md:border-coral" : ""}`}
      >
        <div className="flex-1">
          <h3 className="font-headline text-2xl font-bold text-cream">
            {tier.name}
          </h3>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-headline font-bold text-coral">
              ${tier.price.toLocaleString()}
            </span>
          </div>

          <p className="text-stone-text mt-4">{tier.description}</p>

          <ul className="mt-6 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
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
                <span className="text-cream">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-stone-text">
            <span className="font-semibold text-cream">Best for:</span>{" "}
            {tier.bestFor}
          </p>
        </div>

        <Button
          variant={tier.popular ? "primary" : "secondary"}
          className="w-full mt-8"
          onClick={() => {
            sessionStorage.setItem("selectedTier", tier.name);
            document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get Started
        </Button>
      </Card>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-charcoal">
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
            Investment
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-stone-text mt-4"
          >
            Choose your level of voice extraction.
          </motion.p>
        </motion.div>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        {/* Add-on */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <Card variant="elevated" className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-coral font-mono text-sm">+ ADD-ON</span>
                </div>
                <h4 className="font-headline text-xl font-bold text-cream mt-1">
                  {addOn.name}
                </h4>
                <p className="text-stone-text text-sm mt-1 max-w-md">
                  {addOn.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-headline font-bold text-coral">
                  ${addOn.price}
                </span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    // Add-on only - don't set tier, just scroll to email capture
                    document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Add to Any Tier
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* No subscription messaging */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-stone-text italic flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          One-time investment. No monthly fees. Yours forever.
        </motion.p>
      </Container>
    </section>
  );
}
