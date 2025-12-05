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
  sm: { width: 100, height: 28, text: "text-sm" },
  md: { width: 140, height: 36, text: "text-lg" },
  lg: { width: 180, height: 48, text: "text-2xl" },
  xl: { width: 240, height: 64, text: "text-3xl" },
};

export function Logo({ size = "md", animated = false, showText = true, className }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <div className={cn("flex items-center", className)}>
      <DNAHelixLogo width={width} height={height} animated={animated} showText={showText} />
    </div>
  );
}

interface DNAHelixLogoProps {
  width?: number;
  height?: number;
  animated?: boolean;
  showText?: boolean;
  className?: string;
}

export function DNAHelixLogo({
  width = 140,
  height = 36,
  animated = false,
  showText = true,
  className
}: DNAHelixLogoProps) {
  return (
    <motion.svg
      viewBox="0 0 160 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      style={{ width, height }}
      initial={animated ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <defs>
        <linearGradient id="helixLogoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#fda4af" />
        </linearGradient>
      </defs>

      {/* DNA Helix - Left strand */}
      <motion.path
        d="M8 4
           C8 8, 24 10, 24 14
           C24 18, 8 20, 8 22
           C8 26, 24 28, 24 30
           C24 34, 8 36, 8 40"
        stroke="#fb7185"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* DNA Helix - Right strand */}
      <motion.path
        d="M24 4
           C24 8, 8 10, 8 14
           C8 18, 24 20, 24 22
           C24 26, 8 28, 8 30
           C8 34, 24 36, 24 40"
        stroke="#fda4af"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
      />

      {/* Horizontal connector bars */}
      <motion.g
        initial={animated ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <line x1="10" y1="7" x2="22" y2="7" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="14" x2="20" y2="14" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="22" x2="22" y2="22" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="30" x2="20" y2="30" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="37" x2="22" y2="37" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>

      {/* Soundwave icon in the center of helix */}
      <motion.g
        initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        {/* Sound wave bars */}
        <rect x="13" y="19" width="1.5" height="6" rx="0.75" fill="#fb7185" />
        <rect x="15.5" y="17" width="1.5" height="10" rx="0.75" fill="#fda4af" />
        <rect x="18" y="19" width="1.5" height="6" rx="0.75" fill="#fb7185" />
      </motion.g>

      {/* End nodes */}
      <motion.g
        initial={animated ? { scale: 0 } : { scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <circle cx="8" cy="4" r="2" fill="#fb7185" />
        <circle cx="24" cy="4" r="2" fill="#fda4af" />
        <circle cx="8" cy="40" r="2" fill="#fb7185" />
        <circle cx="24" cy="40" r="2" fill="#fda4af" />
      </motion.g>

      {/* Text: VoiceDNA */}
      {showText && (
        <motion.g
          initial={animated ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <text
            x="36"
            y="28"
            fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
            fontWeight="700"
            fontSize="18"
            fill="#fef3c7"
          >
            Voice
          </text>
          <text
            x="86"
            y="28"
            fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
            fontWeight="700"
            fontSize="18"
            fill="#fb7185"
          >
            DNA
          </text>
        </motion.g>
      )}
    </motion.svg>
  );
}

// Keep the old icon for backwards compatibility if needed elsewhere
interface DNAIconProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function DNAIcon({ size = 32, animated = false, className }: DNAIconProps) {
  return (
    <DNAHelixLogo
      width={size * 1.2}
      height={size}
      animated={animated}
      showText={false}
      className={className}
    />
  );
}
