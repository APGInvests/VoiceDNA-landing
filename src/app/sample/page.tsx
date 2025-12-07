"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DNAHelix } from "@/components/dna/dna-helix";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { EmailCapture } from "@/components/sections/email-capture";

// Sample data - punchy, attention-grabbing metrics
const voiceMetrics = {
  hookStrength: { value: 78, unit: "%", level: "Strong openers", progress: 78, revealed: true },
  signaturePhrases: { value: 14, unit: "detected", level: "Highly recognizable", progress: 70, revealed: true },
  voiceConsistency: { value: 91, unit: "%", level: "On-brand", progress: 91, revealed: true },
  persuasionScore: { value: 73, unit: "%", level: "Naturally compelling", progress: 73, revealed: true },
  authenticityIndex: { value: 89, unit: "%", level: "Genuinely you", progress: 89, revealed: false },
  emotionalRange: { value: 6.8, unit: "/10", level: "Balanced intensity", progress: 68, revealed: false },
};

const signaturePhrases = [
  { phrase: "Look, here's the thing...", frequency: "8.2/10K", context: "Opening hooks", revealed: true },
  { phrase: "Not because X. Because Y.", frequency: "5.1/10K", context: "Contrast pattern", revealed: true },
  { phrase: "This isn't [generic]. This is [specific].", frequency: "4.7/10K", context: "Differentiation", revealed: true },
  { phrase: "[Locked phrase #4]", frequency: "4.2/10K", context: "Transitions", revealed: false },
  { phrase: "[Locked phrase #5]", frequency: "3.8/10K", context: "Closers", revealed: false },
  { phrase: "[Locked phrase #6]", frequency: "3.5/10K", context: "Emphasis", revealed: false },
];

const antiPatterns = [
  { pattern: "Corporate buzzwords", example: '"leverage," "synergy," "optimize"', revealed: true },
  { pattern: "Hedge language", example: '"potentially," "might," "could possibly"', revealed: true },
  { pattern: "[Locked anti-pattern #3]", example: "[Hidden]", revealed: false },
  { pattern: "[Locked anti-pattern #4]", example: "[Hidden]", revealed: false },
];

const channelAdaptation = {
  twitter: {
    sentenceLength: "8.4 words",
    energy: "High",
    formality: "3/10",
    uniquePatterns: ["Thread openers with hooks", "Single-line punches", "No hashtag overload"],
  },
};

const channelComparison = [
  { metric: "Sentence Length", master: "11.2", twitter: "8.4", newsletter: "14.1" },
  { metric: "Formality", master: "5/10", twitter: "3/10", newsletter: "6/10" },
  { metric: "Energy", master: "Medium", twitter: "High", newsletter: "Calm" },
  { metric: "Questions/1K", master: "12.3", twitter: "18.7", newsletter: "8.2" },
];

function MetricRow({ label, metric, index }: { label: string; metric: typeof voiceMetrics.hookStrength; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`flex items-center justify-between p-4 rounded-lg ${metric.revealed ? "bg-stone-card" : "bg-stone-card/50"}`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-cream font-medium">{label}</span>
          {!metric.revealed && (
            <Badge variant="outline" className="text-xs">
              <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-4V8a3 3 0 00-6 0v4a3 3 0 006 0z" />
              </svg>
              Locked
            </Badge>
          )}
        </div>
        <span className="text-stone-text text-sm">{metric.level}</span>
      </div>
      <div className="text-right">
        {metric.revealed ? (
          <span className="font-headline text-2xl font-bold text-coral">
            {metric.value}
            <span className="text-sm text-stone-text ml-1">{metric.unit}</span>
          </span>
        ) : (
          <span className="font-headline text-2xl font-bold text-stone-text/30">••••</span>
        )}
      </div>
    </motion.div>
  );
}

function ProgressBar({ progress, revealed }: { progress: number; revealed: boolean }) {
  return (
    <div className="h-1.5 bg-stone-border rounded-full overflow-hidden mt-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: revealed ? `${progress}%` : "30%" }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`h-full rounded-full ${revealed ? "bg-gradient-to-r from-coral to-peach" : "bg-stone-text/20"}`}
      />
    </div>
  );
}

export default function SamplePage() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "pricing") {
      window.location.href = "/#pricing";
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-charcoal pt-24 relative">
        {/* Background DNA Helix - subtle, scrolls with page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="sticky top-0 h-screen w-full opacity-[0.08]">
            <DNAHelix className="w-full h-full" />
          </div>
        </div>
        {/* Hero */}
        <section className="py-16 md:py-24">
          <Container size="lg">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center mb-12"
            >
              <motion.div variants={fadeInUp}>
                <Badge variant="coral" className="mb-4">Sample Report</Badge>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="font-headline text-4xl md:text-5xl font-bold text-cream"
              >
                See What You Get
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-stone-text mt-4 max-w-2xl mx-auto"
              >
                A preview of an actual VoiceDNA report. Some sections are locked to protect our methodology.
              </motion.p>
            </motion.div>

            {/* Report Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="elevated" className="p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-coral animate-pulse" />
                      <span className="font-mono text-sm text-stone-text uppercase tracking-wider">
                        Master Voice Persona
                      </span>
                    </div>
                    <h2 className="font-headline text-2xl font-bold text-cream">
                      [Redacted] — Real Client
                    </h2>
                    <p className="text-stone-text mt-1">
                      47,832 words analyzed using proprietary 40-metric framework
                    </p>
                    <p className="text-stone-text/70 text-sm mt-1 italic">
                      Anonymized from an actual VoiceDNA report with permission
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Twitter/X</Badge>
                    <Badge variant="outline">Newsletter</Badge>
                    <Badge variant="outline">YouTube</Badge>
                    <Badge variant="outline">Blog</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* What This Unlocks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 mb-8 border-coral/20 bg-coral/5">
                <h3 className="font-headline text-lg font-bold text-cream mb-4">
                  What This Report Unlocks
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-text text-sm">AI outputs that pass the &quot;did I write this?&quot; test</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-text text-sm">Ghostwriters who nail your voice on draft 1</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-text text-sm">Content at scale without voice drift</span>
                  </div>
                </div>
                <div className="border-t border-stone-border pt-4">
                  <p className="text-cream italic text-sm">
                    &quot;I gave this to my VA. For the first time, the drafts actually sounded like me.&quot;
                  </p>
                  <p className="text-stone-text/70 text-xs mt-1">— Agency client, anonymized</p>
                </div>
              </Card>
            </motion.div>
          </Container>
        </section>

        {/* Voice DNA Metrics */}
        <section className="py-16 bg-stone-card/30">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="font-headline text-3xl font-bold text-cream mb-2">
                Voice DNA Metrics
              </h2>
              <p className="text-stone-text">
                Quantified patterns extracted from content analysis.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(voiceMetrics).map(([key, metric], index) => (
                <div key={key}>
                  <MetricRow
                    label={key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                    metric={metric}
                    index={index}
                  />
                  <ProgressBar progress={metric.progress} revealed={metric.revealed} />
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-4 rounded-lg border border-coral/30 bg-coral/5"
            >
              <div className="flex items-center gap-2 text-coral">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Full report includes 40+ metrics</span>
              </div>
              <p className="text-stone-text text-sm mt-1">
                Vocabulary complexity, reading level, emotional tone, persuasion patterns, and more.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Signature Phrases */}
        <section className="py-16">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="font-headline text-3xl font-bold text-cream mb-2">
                Signature Phrases
              </h2>
              <p className="text-stone-text">
                Recurring patterns that make this voice recognizable.
              </p>
            </motion.div>

            <div className="space-y-4">
              {signaturePhrases.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`${!item.revealed ? "opacity-60" : ""}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-3">
                        {item.revealed ? (
                          <span className="text-coral font-mono text-lg">&quot;</span>
                        ) : (
                          <svg className="w-4 h-4 text-stone-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-4V8a3 3 0 00-6 0v4a3 3 0 006 0z" />
                          </svg>
                        )}
                        <span className={`font-medium ${item.revealed ? "text-cream" : "text-stone-text/50"}`}>
                          {item.phrase}
                        </span>
                        {item.revealed && <span className="text-coral font-mono text-lg">&quot;</span>}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-stone-text">{item.context}</span>
                        <Badge variant={item.revealed ? "default" : "outline"}>
                          {item.revealed ? item.frequency : "Locked"}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-stone-text mt-8"
            >
              Full report includes <span className="text-coral font-semibold">14 signature phrases</span> with usage context and frequency data.
            </motion.p>
          </Container>
        </section>

        {/* Anti-Patterns */}
        <section className="py-16 bg-stone-card/30">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="font-headline text-3xl font-bold text-cream mb-2">
                Anti-Patterns
              </h2>
              <p className="text-stone-text">
                What this voice NEVER does. Critical for AI prompt accuracy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {antiPatterns.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full ${!item.revealed ? "opacity-60" : ""}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.revealed ? "bg-red-500/20" : "bg-stone-border"}`}>
                        {item.revealed ? (
                          <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-stone-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-4V8a3 3 0 00-6 0v4a3 3 0 006 0z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className={`font-semibold ${item.revealed ? "text-cream" : "text-stone-text/50"}`}>
                          {item.pattern}
                        </h4>
                        <p className={`text-sm mt-1 ${item.revealed ? "text-stone-text" : "text-stone-text/30"}`}>
                          {item.example}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Channel Voice Preview */}
        <section className="py-16">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <h2 className="font-headline text-3xl font-bold text-cream">
                  Channel Adaptation
                </h2>
                <Badge variant="coral">Multi-Channel</Badge>
              </div>
              <p className="text-stone-text">
                Same voice, different expression. See how the master voice adapts.
              </p>
            </motion.div>

            {/* Channel Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card variant="elevated" className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-stone-border">
                        <th className="text-left p-4 text-stone-text font-medium">Metric</th>
                        <th className="text-center p-4 text-cream font-semibold">Master</th>
                        <th className="text-center p-4 text-coral font-semibold">Twitter/X</th>
                        <th className="text-center p-4 text-peach font-semibold">Newsletter</th>
                      </tr>
                    </thead>
                    <tbody>
                      {channelComparison.map((row, index) => (
                        <tr key={index} className="border-b border-stone-border/50 last:border-0">
                          <td className="p-4 text-stone-text">{row.metric}</td>
                          <td className="p-4 text-center text-cream">{row.master}</td>
                          <td className="p-4 text-center text-coral font-medium">{row.twitter}</td>
                          <td className="p-4 text-center text-peach font-medium">{row.newsletter}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-charcoal/50 border-t border-stone-border">
                  <p className="text-stone-text/70 text-sm text-center">
                    Same person. Different platforms. Voice DNA captures the adaptation.
                  </p>
                </div>
              </Card>
            </motion.div>

            <h3 className="font-headline text-xl font-bold text-cream mb-4">Twitter/X Deep Dive</h3>
            <Card variant="glow" className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <span className="text-stone-text text-sm">Sentence Length</span>
                  <p className="font-headline text-2xl font-bold text-coral mt-1">
                    {channelAdaptation.twitter.sentenceLength}
                  </p>
                  <p className="text-stone-text text-xs mt-1">vs 11.2 master</p>
                </div>
                <div>
                  <span className="text-stone-text text-sm">Energy Level</span>
                  <p className="font-headline text-2xl font-bold text-coral mt-1">
                    {channelAdaptation.twitter.energy}
                  </p>
                  <p className="text-stone-text text-xs mt-1">Platform-adapted</p>
                </div>
                <div>
                  <span className="text-stone-text text-sm">Formality</span>
                  <p className="font-headline text-2xl font-bold text-coral mt-1">
                    {channelAdaptation.twitter.formality}
                  </p>
                  <p className="text-stone-text text-xs mt-1">Casual</p>
                </div>
              </div>

              <div className="border-t border-stone-border pt-6">
                <h4 className="font-semibold text-cream mb-4">Channel-Specific Patterns</h4>
                <ul className="space-y-2">
                  {channelAdaptation.twitter.uniquePatterns.map((pattern, index) => (
                    <li key={index} className="flex items-center gap-2 text-stone-text">
                      <svg className="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pattern}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-charcoal/50 border border-stone-border">
                <div className="flex items-center gap-2 text-stone-text mb-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-4V8a3 3 0 00-6 0v4a3 3 0 006 0z" />
                  </svg>
                  <span className="text-sm font-medium">Full Channel Voice Includes</span>
                </div>
                <p className="text-stone-text/70 text-sm">
                  Thread structures, hook patterns, engagement triggers, optimal posting times, hashtag strategy, and ready-to-use AI prompt.
                </p>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <p className="text-stone-text">
                Full report includes channel voices for <span className="text-coral font-semibold">all 6 platforms</span>
              </p>
            </motion.div>
          </Container>
        </section>

        {/* AI Prompt Preview */}
        <section className="py-16 bg-stone-card/30">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="font-headline text-3xl font-bold text-cream mb-2">
                AI Prompt Preview
              </h2>
              <p className="text-stone-text">
                Ready-to-use prompts built from your actual voice data.
              </p>
            </motion.div>

            <Card variant="elevated" className="p-0 overflow-hidden">
              <div className="bg-charcoal p-4 border-b border-stone-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-stone-text text-sm font-mono">master-voice-prompt.txt</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-coral mb-4"># Master Voice Prompt</p>
                <p className="text-cream mb-2">You are writing as [Creator Name]. Match their voice exactly.</p>
                <p className="text-stone-text mb-4">---</p>

                <p className="text-coral mb-2">VOICE DNA:</p>
                <p className="text-cream">- Sentences: 11.2 words average (range 3-28)</p>
                <p className="text-cream">- Use &quot;you&quot; heavily (34/1000 words)</p>
                <p className="text-cream">- Questions: 12.3 per 1000 words</p>
                <p className="text-stone-text/40">- [4 more metrics locked...]</p>
                <p className="text-stone-text mb-4">---</p>

                <p className="text-coral mb-2">SIGNATURE ELEMENTS:</p>
                <p className="text-cream">&quot;Look, here&apos;s the thing...&quot;</p>
                <p className="text-cream">&quot;Not because X. Because Y.&quot;</p>
                <p className="text-stone-text/40">- [11 more phrases locked...]</p>
                <p className="text-stone-text mb-4">---</p>

                <p className="text-coral mb-2">NEVER SOUND LIKE:</p>
                <p className="text-cream">- Corporate buzzwords</p>
                <p className="text-cream">- Hedge language</p>
                <p className="text-stone-text/40">- [5 more anti-patterns locked...]</p>
                <p className="text-stone-text mb-4">---</p>

                <p className="text-stone-text/40 italic">Write in this voice. Be authentic to these patterns.</p>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-stone-text mb-2">
                Full package includes prompts for <span className="text-coral font-semibold">master voice + all channels</span>
              </p>
              <p className="text-stone-text/70 text-sm">
                Copy, paste, generate. Sound like yourself instantly.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-headline text-3xl font-bold text-cream mb-2">
                What&apos;s in the Full Report
              </h2>
              <p className="text-stone-text">
                Everything you need to maintain consistent voice at scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Master Voice Persona", desc: "40+ metrics, signature phrases, anti-patterns", tier: "All tiers" },
                { title: "Channel Voice Profiles", desc: "Platform-specific adaptations", tier: "1-3 or ALL" },
                { title: "Ready-to-Use AI Prompts", desc: "Master + channel-specific", tier: "1-3 or ALL" },
                { title: "Validation Checklist", desc: "Quick + deep check criteria", tier: "All tiers" },
                { title: "Cross-Channel Consistency Guide", desc: "Keep your voice aligned across platforms", tier: "Multi-Channel+" },
                { title: "Data Sources Documentation", desc: "What was analyzed and how", tier: "All tiers" },
                { title: "Quarterly Refresh Session", desc: "Update your voice as you evolve", tier: "Complete only" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-coral/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cream">{item.title}</h4>
                        <p className="text-stone-text text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Email Capture */}
        <EmailCapture />

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-stone-card to-charcoal">
          <Container size="md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-cream mb-4">
                Ready to Quantify Your Voice?
              </h2>
              <p className="text-xl text-stone-text mb-8">
                Stop sounding like AI. Start sounding like you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" })}>
                  Get Your Voice DNA
                </Button>
                <Button variant="secondary" size="lg" onClick={() => window.location.href = "/#pricing"}>
                  See Pricing
                </Button>
              </div>

              <p className="text-stone-text text-sm mt-8 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-4V8a3 3 0 00-6 0v4a3 3 0 006 0z" />
                </svg>
                One-time investment. No monthly fees. Yours forever.
              </p>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
