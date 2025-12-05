"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: { iconSize: 28, text: "text-sm", gap: "gap-2" },
  md: { iconSize: 36, text: "text-lg", gap: "gap-2" },
  lg: { iconSize: 48, text: "text-2xl", gap: "gap-3" },
  xl: { iconSize: 64, text: "text-3xl", gap: "gap-3" },
};

export function Logo({ size = "md", animated = false, showText = true, className }: LogoProps) {
  const { iconSize, text, gap } = sizes[size];

  return (
    <motion.div
      className={cn("flex items-center", gap, className)}
      initial={animated ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={animated ? { scale: 0, rotate: -180 } : { scale: 1, rotate: 0 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Image
          src="/logo.svg"
          alt="VoiceDNA Logo"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
      </motion.div>
      {showText && (
        <motion.span
          className={cn("font-headline font-bold", text)}
          initial={animated ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-cream">Voice</span>
          <span className="text-coral">DNA</span>
        </motion.span>
      )}
    </motion.div>
  );
}

// Export the logo icon component for use in other places
interface DNAIconProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function DNAIcon({ size = 32, animated = false, className }: DNAIconProps) {
  return (
    <motion.div
      className={className}
      initial={animated ? { scale: 0 } : { scale: 1 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Image
        src="/logo.svg"
        alt="VoiceDNA"
        width={size}
        height={size}
        className="object-contain"
      />
    </motion.div>
  );
}

// Keep the DNAHelixLogo export for backwards compatibility
export function DNAHelixLogo({
  width = 160,
  height = 40,
  animated = false,
  showText = true,
  className
}: {
  width?: number;
  height?: number;
  animated?: boolean;
  showText?: boolean;
  className?: string;
}) {
  // Calculate icon size based on height
  const iconSize = height * 0.9;

  return (
    <motion.div
      className={cn("flex items-center gap-2", className)}
      style={{ width, height }}
      initial={animated ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={animated ? { scale: 0, rotate: -180 } : { scale: 1, rotate: 0 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Image
          src="/logo.svg"
          alt="VoiceDNA Logo"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
      </motion.div>
      {showText && (
        <motion.span
          className="font-headline font-bold text-lg"
          initial={animated ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-cream">Voice</span>
          <span className="text-coral">DNA</span>
        </motion.span>
      )}
    </motion.div>
  );
}
