"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: { icon: 24, text: "text-sm" },
  md: { icon: 32, text: "text-lg" },
  lg: { icon: 48, text: "text-2xl" },
  xl: { icon: 64, text: "text-3xl" },
};

export function Logo({ size = "md", animated = false, showText = true, className }: LogoProps) {
  const { icon, text } = sizes[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <DNAIcon size={icon} animated={animated} />
      {showText && (
        <span className={cn("font-headline font-bold text-cream", text)}>
          VoiceDNA
        </span>
      )}
    </div>
  );
}

interface DNAIconProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function DNAIcon({ size = 32, animated = false, className }: DNAIconProps) {
  const iconVariants = {
    static: {},
    animate: {
      rotateY: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
  };

  return (
    <motion.div
      className={cn("relative", className)}
      style={{ width: size, height: size, perspective: 200 }}
      variants={iconVariants}
      animate={animated ? "animate" : "static"}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#fda4af" />
          </linearGradient>
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="#292524"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
        />

        {/* DNA Double Helix - Left strand */}
        <motion.path
          d="M14 8 C14 12, 26 14, 26 18 C26 22, 14 24, 14 28 C14 32, 26 30, 26 32"
          stroke="#fb7185"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#logoGlow)"
          initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* DNA Double Helix - Right strand */}
        <motion.path
          d="M26 8 C26 12, 14 14, 14 18 C14 22, 26 24, 26 28 C26 32, 14 30, 14 32"
          stroke="#fda4af"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#logoGlow)"
          initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Connecting bars */}
        <motion.g
          initial={animated ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <line x1="15" y1="11" x2="25" y2="11" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="18" x2="23" y2="18" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="15" y1="25" x2="25" y2="25" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="29" x2="23" y2="29" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Accent nodes */}
        <motion.g
          initial={animated ? { scale: 0 } : { scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <circle cx="14" cy="8" r="2" fill="#fb7185" />
          <circle cx="26" cy="8" r="2" fill="#fda4af" />
          <circle cx="14" cy="32" r="2" fill="#fb7185" />
          <circle cx="26" cy="32" r="2" fill="#fda4af" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
