"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { useCounter } from "@/hooks/use-counter";
import { fadeInUp, staggerContainer } from "@/lib/variants";

const metrics = [
  {
    label: "Sentence Length",
    value: 11.2,
    unit: "words avg",
    range: "3-28 words",
    level: "Punchy",
    progress: 66,
    decimals: 1,
  },
  {
    label: "You-to-I Ratio",
    value: 2.8,
    unit: "",
    range: null,
    level: "Audience-focused",
    progress: 78,
    decimals: 1,
  },
  {
    label: "Questions/1K Words",
    value: 12.3,
    unit: "",
    range: null,
    level: "High engagement",
    progress: 82,
    decimals: 1,
  },
  {
    label: "Contraction Rate",
    value: 84,
    unit: "%",
    range: null,
    level: "Conversational",
    progress: 84,
    decimals: 0,
  },
  {
    label: "Reading Level",
    value: 7,
    unit: "Grade",
    range: null,
    level: "Accessible",
    progress: 50,
    decimals: 0,
  },
  {
    label: "Fragment Usage",
    value: 18,
    unit: "%",
    range: null,
    level: "Intentional punch",
    progress: 45,
    decimals: 0,
  },
];

const summaryStats = [
  { label: "Metrics Per Channel", value: 40, unit: "+" },
  { label: "Channels Analyzed", value: 6 },
  { label: "Total Data Points", value: 200, unit: "+" },
];

interface MetricCardProps {
  metric: (typeof metrics)[0];
  index: number;
  inView: boolean;
}

function MetricCard({ metric, index, inView }: MetricCardProps) {
  const count = useCounter(metric.value, inView, {
    duration: 2000,
    delay: index * 100,
    decimals: metric.decimals,
  });

  const progressCount = useCounter(metric.progress, inView, {
    duration: 2000,
    delay: index * 100 + 500,
    decimals: 0,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-stone-text text-sm font-mono">
              {metric.label}
            </span>
            <span className="text-coral text-xs font-mono">{metric.level}</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-headline text-3xl font-bold text-cream">
              {count}
            </span>
            <span className="text-stone-text text-sm">{metric.unit}</span>
          </div>

          {metric.range && (
            <p className="text-stone-text text-xs">Range: {metric.range}</p>
          )}

          {/* Progress bar */}
          <div className="h-2 bg-stone-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${progressCount}%` } : { width: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
              className="h-full bg-gradient-to-r from-coral to-peach rounded-full"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function MetricsPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section id="metrics" className="py-24 md:py-32 bg-stone-card">
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
            See the Data Behind the Voice
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-stone-text mt-4 max-w-2xl mx-auto"
          >
            This is what makes you sound like YOU.
          </motion.p>
        </motion.div>

        <div ref={containerRef}>
          {/* Metrics dashboard */}
          <Card variant="elevated" className="p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-coral animate-pulse" />
              <span className="font-mono text-sm text-stone-text uppercase tracking-wider">
                Voice DNA Analysis
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <MetricCard
                  key={metric.label}
                  metric={metric}
                  index={index}
                  inView={isInView}
                />
              ))}
            </div>

            {/* Summary stats */}
            <div className="mt-8 pt-6 border-t border-stone-border">
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {summaryStats.map((stat, index) => {
                  const count = useCounter(stat.value, isInView, {
                    duration: 2000,
                    delay: 1500 + index * 200,
                    decimals: 0,
                  });

                  return (
                    <div key={stat.label} className="text-center">
                      <span className="font-headline text-2xl font-bold text-coral">
                        {count}
                        {stat.unit || ""}
                      </span>
                      <p className="text-stone-text text-sm mt-1">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2 }}
            className="text-center text-stone-text"
          >
            Not a personality quiz. Not a vibe check.{" "}
            <span className="text-cream font-semibold">
              Actual measurements from your actual content.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.2 }}
            className="text-center text-coral font-headline text-xl font-bold mt-4"
          >
            This is Voice DNA.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
