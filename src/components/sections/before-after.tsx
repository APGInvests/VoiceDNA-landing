"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/variants";

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 md:py-32 bg-charcoal">
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
            The Difference Is Obvious
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Without VoiceDNA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-500/5 rounded-2xl" />
            <div className="relative p-8 border border-red-500/20 rounded-2xl h-full">
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

              <h3 className="font-headline text-xl font-bold text-cream mb-4">
                Generic AI Output
              </h3>

              <blockquote className="bg-charcoal p-4 rounded-lg border border-stone-border italic text-stone-text mb-6">
                "In today's fast-paced digital landscape, it's essential to
                leverage innovative solutions that drive meaningful engagement
                with your target audience. By implementing strategic
                methodologies, you can potentially optimize your content
                creation workflow and achieve synergistic outcomes."
              </blockquote>

              <div>
                <p className="text-red-400 font-semibold mb-3">The symptoms:</p>
                <ul className="space-y-2 text-stone-text">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">×</span> Corporate buzzwords
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">×</span> Hedging language
                    ("potentially," "can")
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">×</span> Passive voice
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">×</span> Could be anyone
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">×</span> Needs heavy editing
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* With VoiceDNA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-success/5 rounded-2xl" />
            <div className="relative p-8 border border-success/20 rounded-2xl h-full">
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

              <h3 className="font-headline text-xl font-bold text-cream mb-4">
                Your Actual Voice
              </h3>

              <blockquote className="bg-charcoal p-4 rounded-lg border border-coral/30 text-cream mb-6">
                "Look, here's what actually works: Stop optimizing. Start
                shipping. Most people spend 3 hours editing AI output. You know
                what I spend? Five minutes. Not because I'm lazy. Because I gave
                the AI my actual voice patterns. Now it sounds like me from the
                first draft."
              </blockquote>

              <div>
                <p className="text-success font-semibold mb-3">The difference:</p>
                <ul className="space-y-2 text-cream">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> Your signature
                    phrases
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> Your sentence rhythm
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> Your directness
                    level
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> Unmistakably you
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> Ready to publish
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-stone-text">
            <span className="text-cream font-semibold">Same AI. Same topic.</span>{" "}
            Completely different voice.
          </p>
          <p className="text-coral font-headline text-2xl font-bold mt-4">
            The only variable? Voice DNA.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
