"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  ...rest
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -6, boxShadow: "0 0 0 1px rgba(46,139,255,0.3), 0 0 48px -10px rgba(46,139,255,0.5)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={`glass rounded-2xl shadow-card ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
