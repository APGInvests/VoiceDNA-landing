"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/variants";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call - replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, just log and show success
    console.log("Email submitted:", email);
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="cta" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background DNA pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="dna-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#fb7185" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dna-pattern)" />
        </svg>
      </div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-coral/10 via-transparent to-transparent" />

      <Container size="md" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-headline text-4xl md:text-6xl font-bold text-cream"
          >
            Ready to Quantify Your Voice?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-stone-text mt-6 max-w-xl mx-auto"
          >
            Stop sounding like AI. Start sounding like you.
          </motion.p>

          {/* Email capture form */}
          <motion.div variants={fadeInUp} className="mt-10 max-w-md mx-auto">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-success/10 border border-success/30 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-success"
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
                <h3 className="font-headline text-xl font-bold text-cream">
                  You're on the list!
                </h3>
                <p className="text-stone-text mt-2">
                  We'll be in touch soon with your sample voice profile.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-stone-card border border-stone-border rounded-lg text-cream placeholder:text-stone-text focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Get Sample Profile"
                    )}
                  </Button>
                </div>
                <p className="text-sm text-stone-text">
                  Get a real example of what you'll receive.
                </p>
              </form>
            )}
          </motion.div>

          {/* Urgency + Trust */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 pt-10 border-t border-stone-border"
          >
            <p className="text-coral font-semibold mb-6">
              First 10 clients receive 20% off any package.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-text">
              <div className="flex items-center gap-2">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Secure payment via Stripe</span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Delivered within 7 business days</span>
              </div>
              <div className="flex items-center gap-2">
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
                <span>100% satisfaction guaranteed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
