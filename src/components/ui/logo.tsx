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
  sm: { width: 120, height: 32, text: "text-sm" },
  md: { width: 160, height: 40, text: "text-lg" },
  lg: { width: 200, height: 52, text: "text-2xl" },
  xl: { width: 260, height: 68, text: "text-3xl" },
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
  width = 160,
  height = 40,
  animated = false,
  showText = true,
  className
}: DNAHelixLogoProps) {
  return (
    <motion.svg
      viewBox="0 0 180 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      style={{ width, height }}
      initial={animated ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* DNA Helix - Left strand (simple, 2 curves) */}
      <motion.path
        d="M6 4
           C6 12, 30 12, 30 24
           C30 36, 6 36, 6 44"
        stroke="#fb7185"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* DNA Helix - Right strand (simple, 2 curves) */}
      <motion.path
        d="M30 4
           C30 12, 6 12, 6 24
           C6 36, 30 36, 30 44"
        stroke="#fda4af"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
      />

      {/* Horizontal connector bars - just 3, spaced out */}
      <motion.g
        initial={animated ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <line x1="9" y1="8" x2="27" y2="8" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="40" x2="27" y2="40" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" />
      </motion.g>

      {/* Soundwave icon in the center - larger, more visible */}
      <motion.g
        initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <rect x="12" y="20" width="2" height="8" rx="1" fill="#fb7185" />
        <rect x="16" y="16" width="2" height="16" rx="1" fill="#fef3c7" />
        <rect x="20" y="18" width="2" height="12" rx="1" fill="#fda4af" />
        <rect x="24" y="20" width="2" height="8" rx="1" fill="#fb7185" />
      </motion.g>

      {/* Text: VoiceDNA */}
      {showText && (
        <motion.g
          initial={animated ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <text
            x="44"
            y="30"
            fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
            fontWeight="700"
            fontSize="20"
            fill="#fef3c7"
          >
            Voice
          </text>
          <text
            x="100"
            y="30"
            fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
            fontWeight="700"
            fontSize="20"
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
