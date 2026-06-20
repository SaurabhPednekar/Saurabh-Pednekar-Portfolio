"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  external,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-electric-gradient text-base-900 shadow-glow hover:shadow-glow-cyan font-semibold"
      : "glass text-ink hover:text-white border border-glass-border hover:border-electric/50";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-flex"
    >
      <span className={`${base} ${styles} ${className}`}>{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-flex focus-visible:outline-none"
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="focus-visible:outline-none">
      {inner}
    </button>
  );
}
