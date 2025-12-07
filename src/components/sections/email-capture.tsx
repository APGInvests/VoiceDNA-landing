"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/variants";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  // Check for tier selection from pricing buttons
  useEffect(() => {
    const checkTier = () => {
      const tier = sessionStorage.getItem("selectedTier");
      if (tier && tier !== selectedTier) {
        setSelectedTier(tier);
      }
    };

    // Check immediately
    checkTier();

    // Check on scroll (handles when user scrolls up from pricing)
    const handleScroll = () => checkTier();
    window.addEventListener("scroll", handleScroll);

    // Also check periodically for first 3 seconds (catches edge cases)
    const interval = setInterval(checkTier, 200);
    const timeout = setTimeout(() => clearInterval(interval), 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [selectedTier]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Check sessionStorage directly at submit time (most reliable)
    const currentTier = sessionStorage.getItem("selectedTier") || selectedTier;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          tier: currentTier || "Free Guide",
          leadType: currentTier ? "hot" : "warm",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      // Clear the tier from storage after submission
      sessionStorage.removeItem("selectedTier");
      setIsSuccess(true);
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="email-capture" className="py-20 md:py-32 bg-gradient-to-b from-charcoal to-stone-card">
      <Container size="md">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {selectedTier ? (
            <>
              <motion.div variants={fadeInUp}>
                <Badge variant="coral" className="mb-4">
                  {selectedTier} Selected
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-cream"
              >
                Great choice! Let&apos;s get started.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-lg md:text-xl text-stone-text max-w-2xl mx-auto"
              >
                Enter your email and we&apos;ll reach out to begin your {selectedTier} voice analysis.
              </motion.p>
            </>
          ) : (
            <>
              <motion.h2
                variants={fadeInUp}
                className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-cream"
              >
                Not ready for the full analysis?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-lg md:text-xl text-stone-text max-w-2xl mx-auto"
              >
                Start with our free Voice DNA Guide. Includes a 10-question
                self-assessment to discover your content voice.
              </motion.p>
            </>
          )}

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-success/10 border border-success/30 rounded-xl inline-flex items-center gap-3"
            >
              <svg
                className="w-6 h-6 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-cream font-medium">
                Check your inbox! Your guide is on its way.
              </span>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-charcoal border border-stone-border rounded-lg text-cream placeholder:text-stone-text focus:outline-none focus:border-coral transition-colors"
              />
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : selectedTier ? "Start My Analysis" : "Get the Free Guide"}
              </Button>
            </motion.form>
          )}

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm text-stone-text"
          >
            No spam. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
