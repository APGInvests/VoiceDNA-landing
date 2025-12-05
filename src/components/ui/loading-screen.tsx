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
          <div className="relative w-32 h-64 mb-8">
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
  // Generate helix data for main section
  const nodeCount = 12;
  const mainNodes = Array.from({ length: nodeCount }, (_, i) => {
    const t = i / (nodeCount - 1);
    const y = 60 + t * 180; // Offset to leave room for top extension
    const angle = t * Math.PI * 2;
    return {
      left: { x: 50 + Math.sin(angle) * 30, y },
      right: { x: 50 + Math.sin(angle + Math.PI) * 30, y },
      angle,
    };
  });

  // Generate top extension (fading out upward)
  const topExtension = Array.from({ length: 6 }, (_, i) => {
    const t = i / 5;
    const y = 60 - (1 - t) * 80; // Goes from -20 to 60
    const angle = -((1 - t) * Math.PI); // Continue the spiral upward
    return {
      left: { x: 50 + Math.sin(angle) * 30, y },
      right: { x: 50 + Math.sin(angle + Math.PI) * 30, y },
      opacity: t * 0.6, // Fades in toward main section
    };
  });

  // Generate bottom extension (fading out downward)
  const bottomExtension = Array.from({ length: 6 }, (_, i) => {
    const t = i / 5;
    const y = 240 + t * 80; // Goes from 240 to 320
    const angle = Math.PI * 2 + t * Math.PI; // Continue the spiral downward
    return {
      left: { x: 50 + Math.sin(angle) * 30, y },
      right: { x: 50 + Math.sin(angle + Math.PI) * 30, y },
      opacity: (1 - t) * 0.6, // Fades out away from main section
    };
  });

  return (
    <svg viewBox="0 0 100 300" className="w-full h-full" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" stopOpacity="0.2" />
          <stop offset="20%" stopColor="#fb7185" />
          <stop offset="80%" stopColor="#fda4af" />
          <stop offset="100%" stopColor="#fda4af" stopOpacity="0.2" />
        </linearGradient>
        <filter id="loadingGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Top extension - faded strands */}
      <path
        d={`M ${topExtension.map((n) => `${n.left.x},${n.left.y}`).join(" L ")}`}
        fill="none"
        stroke="#fb7185"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d={`M ${topExtension.map((n) => `${n.right.x},${n.right.y}`).join(" L ")}`}
        fill="none"
        stroke="#fda4af"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Top extension nodes */}
      {topExtension.map((node, i) => (
        <g key={`top-${i}`}>
          <circle cx={node.left.x} cy={node.left.y} r="3" fill="#fb7185" opacity={node.opacity} />
          <circle cx={node.right.x} cy={node.right.y} r="3" fill="#fda4af" opacity={node.opacity} />
        </g>
      ))}

      {/* Main animated section - Left strand */}
      <motion.path
        d={`M ${mainNodes.map((n) => `${n.left.x},${n.left.y}`).join(" L ")}`}
        fill="none"
        stroke="#fb7185"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#loadingGlow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Main animated section - Right strand */}
      <motion.path
        d={`M ${mainNodes.map((n) => `${n.right.x},${n.right.y}`).join(" L ")}`}
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
      {mainNodes
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

      {/* Main nodes with staggered pulse */}
      {mainNodes.map((node, i) => (
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

      {/* Bottom extension - faded strands */}
      <path
        d={`M ${bottomExtension.map((n) => `${n.left.x},${n.left.y}`).join(" L ")}`}
        fill="none"
        stroke="#fb7185"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d={`M ${bottomExtension.map((n) => `${n.right.x},${n.right.y}`).join(" L ")}`}
        fill="none"
        stroke="#fda4af"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Bottom extension nodes */}
      {bottomExtension.map((node, i) => (
        <g key={`bottom-${i}`}>
          <circle cx={node.left.x} cy={node.left.y} r="3" fill="#fb7185" opacity={node.opacity} />
          <circle cx={node.right.x} cy={node.right.y} r="3" fill="#fda4af" opacity={node.opacity} />
        </g>
      ))}

      {/* Traveling pulse effect */}
      <motion.circle
        r="6"
        fill="#fb7185"
        filter="url(#loadingGlow)"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          cx: mainNodes.map((n) => n.left.x),
          cy: mainNodes.map((n) => n.left.y),
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
