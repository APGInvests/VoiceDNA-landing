"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time for the animation to play
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center"
        >
          {/* Animated DNA Helix */}
          <div className="relative w-32 h-48 mb-8">
            <DNALoadingAnimation />
          </div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="font-headline text-3xl font-bold text-cream">
              Voice<span className="text-coral">DNA</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-stone-text mt-2 text-sm"
            >
              Your voice. Quantified.
            </motion.p>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex gap-1 mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-coral rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DNALoadingAnimation() {
  // Generate helix data
  const nodeCount = 12;
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const t = i / (nodeCount - 1);
    const y = t * 180;
    const angle = t * Math.PI * 2;
    return {
      left: { x: 50 + Math.sin(angle) * 30, y },
      right: { x: 50 + Math.sin(angle + Math.PI) * 30, y },
      angle,
    };
  });

  return (
    <svg viewBox="0 0 100 180" className="w-full h-full">
      <defs>
        <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="50%" stopColor="#fda4af" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
        <filter id="loadingGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left strand */}
      <motion.path
        d={`M ${nodes.map((n) => `${n.left.x},${n.left.y}`).join(" L ")}`}
        fill="none"
        stroke="#fb7185"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#loadingGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Right strand */}
      <motion.path
        d={`M ${nodes.map((n) => `${n.right.x},${n.right.y}`).join(" L ")}`}
        fill="none"
        stroke="#fda4af"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#loadingGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
      />

      {/* Connecting bars */}
      {nodes
        .filter((_, i) => i % 2 === 0)
        .map((node, i) => (
          <motion.line
            key={i}
            x1={node.left.x}
            y1={node.left.y}
            x2={node.right.x}
            y2={node.right.y}
            stroke="#44403c"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.6, pathLength: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
          />
        ))}

      {/* Nodes with staggered pulse */}
      {nodes.map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.left.x}
            cy={node.left.y}
            r="4"
            fill="#fb7185"
            filter="url(#loadingGlow)"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 1, 0.8],
            }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
              times: [0, 0.6, 1],
            }}
          />
          <motion.circle
            cx={node.right.x}
            cy={node.right.y}
            r="4"
            fill="#fda4af"
            filter="url(#loadingGlow)"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 1, 0.8],
            }}
            transition={{
              delay: i * 0.08 + 0.04,
              duration: 0.4,
              times: [0, 0.6, 1],
            }}
          />
        </motion.g>
      ))}

      {/* Traveling pulse effect */}
      <motion.circle
        r="6"
        fill="#fb7185"
        filter="url(#loadingGlow)"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          cx: nodes.map((n) => n.left.x),
          cy: nodes.map((n) => n.left.y),
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1.5,
          ease: "linear",
        }}
      />
    </svg>
  );
}
