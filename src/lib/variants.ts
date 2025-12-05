import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const glowPulse: Variants = {
  rest: { boxShadow: "0 0 0 rgba(251, 113, 133, 0)" },
  hover: {
    boxShadow: "0 0 30px rgba(251, 113, 133, 0.5)",
    transition: { duration: 0.3 },
  },
};

export const nodeActivate: Variants = {
  inactive: {
    scale: 0.8,
    opacity: 0.3,
    backgroundColor: "#44403c",
  },
  active: {
    scale: 1,
    opacity: 1,
    backgroundColor: "#fb7185",
    boxShadow: "0 0 20px rgba(251, 113, 133, 0.5)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
