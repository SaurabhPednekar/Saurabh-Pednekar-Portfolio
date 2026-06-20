"use client";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { archNodes } from "@/lib/data";

const STEP_MS = 2600;
const CORNER = 16; // matches rounded-2xl

/** Static connector line between stages. */
function FlowConnector({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={
        vertical
          ? "relative mx-auto my-1 h-8 w-px lg:hidden"
          : "relative mx-1 hidden h-px flex-1 self-center lg:block"
      }
    >
      <span
        className={
          vertical
            ? "absolute inset-0 bg-gradient-to-b from-electric/30 to-cyan-500/30"
            : "absolute inset-0 bg-gradient-to-r from-electric/30 to-cyan-500/30"
        }
      />
    </div>
  );
}

export function ArchitectureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNode = archNodes[activeIndex];
  const reduce = useReducedMotion();

  // Geometry: exact top-half rounded-rect path + per-card offset fractions.
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pathD, setPathD] = useState("");
  const offStartRef = useRef<number[]>([]);

  const progress = useMotionValue(0);
  const offsetDistance = useTransform(progress, (p) => `${(p * 100).toFixed(3)}%`);

  useLayoutEffect(() => {
    const measure = () => {
      const c = containerRef.current;
      if (!c) return;
      const cRect = c.getBoundingClientRect();
      const cards = btnRefs.current
        .filter((el): el is HTMLButtonElement => !!el)
        .map((el) => {
          const r = el.getBoundingClientRect();
          const L = r.left - cRect.left;
          const R = r.right - cRect.left;
          const T = r.top - cRect.top;
          const h = r.height;
          const M = T + h / 2;
          const rr = Math.min(CORNER, h / 2, (R - L) / 2);
          return { L, R, T, M, h, rr };
        });

      if (cards.length < 2) {
        setPathD("");
        return;
      }

      // Build path: up left edge -> top-left corner -> top -> top-right corner
      // -> down right edge -> straight line along the middle to the next card.
      let d = `M ${cards[0].L.toFixed(1)} ${cards[0].M.toFixed(1)}`;
      cards.forEach((p, i) => {
        d += ` L ${p.L.toFixed(1)} ${(p.T + p.rr).toFixed(1)}`;
        d += ` A ${p.rr} ${p.rr} 0 0 1 ${(p.L + p.rr).toFixed(1)} ${p.T.toFixed(1)}`;
        d += ` L ${(p.R - p.rr).toFixed(1)} ${p.T.toFixed(1)}`;
        d += ` A ${p.rr} ${p.rr} 0 0 1 ${p.R.toFixed(1)} ${(p.T + p.rr).toFixed(1)}`;
        d += ` L ${p.R.toFixed(1)} ${p.M.toFixed(1)}`;
        const next = cards[i + 1];
        if (next) d += ` L ${next.L.toFixed(1)} ${next.M.toFixed(1)}`;
      });
      setPathD(d);

      // Cumulative offsets at the start of each card's arc (for sync).
      const arcLen = (p: (typeof cards)[number]) =>
        p.h + (p.R - p.L) - 4 * p.rr + Math.PI * p.rr;
      const offs: number[] = [];
      let cum = 0;
      cards.forEach((p, i) => {
        offs[i] = cum;
        cum += arcLen(p);
        const next = cards[i + 1];
        if (next) cum += Math.hypot(next.L - p.R, next.M - p.M);
      });
      const total = cum || 1;
      const normalized = offs.map((o) => o / total);
      normalized.push(1); // end of path
      offStartRef.current = normalized;
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    btnRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", measure);
    const raf = requestAnimationFrame(measure);
    const settle = setTimeout(measure, 300);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
      clearTimeout(settle);
    };
  }, []);

  // Move the dot across exactly one segment per step, and flip to the next
  // stage when it arrives — so motion and highlight stay locked together.
  useEffect(() => {
    const advance = () => setActiveIndex((p) => (p + 1) % archNodes.length);
    const offs = offStartRef.current;

    if (reduce || offs.length < archNodes.length + 1) {
      const timer = setTimeout(advance, STEP_MS);
      return () => clearTimeout(timer);
    }

    const from = offs[activeIndex];
    const to = offs[activeIndex + 1];
    progress.set(from);
    const controls = animate(progress, to, { duration: STEP_MS / 1000, ease: "linear" });
    const timer = setTimeout(advance, STEP_MS);
    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, [activeIndex, reduce, progress]);

  return (
    <Section id="architecture">
      <SectionHeading
        eyebrow="Centerpiece"
        title="Enterprise data architecture, end to end"
        description="A reference flow of how master data moves from source systems through STIBO STEP to governed downstream consumers. Select any stage to explore it."
      />

      <div className="mt-14">
        {/* Flow */}
        <div
          ref={containerRef}
          className="relative flex flex-col items-stretch gap-0 lg:flex-row lg:items-stretch"
        >
          {archNodes.map((node, i) => {
            const Icon = node.icon;
            const isActive = i === activeIndex;
            return (
              <div key={node.id} className="flex flex-col lg:flex-1 lg:flex-row">
                <motion.button
                  ref={(el) => {
                    btnRefs.current[i] = el;
                  }}
                  onClick={() => setActiveIndex(i)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex w-full flex-col items-center gap-2 rounded-2xl border border-glass-border glass p-5 text-center focus-visible:outline-none lg:flex-1"
                  aria-pressed={isActive}
                >
                  {/* Slow-fading highlight overlay */}
                  <motion.span
                    aria-hidden
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-0 rounded-2xl border border-electric/50 bg-electric/10 shadow-glow"
                  />

                  {/* Content */}
                  <span className="relative z-10 flex flex-col items-center gap-2">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10">
                      <motion.span
                        aria-hidden
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-xl bg-electric-gradient"
                      />
                      <Icon
                        size={22}
                        className={`relative transition-colors duration-500 ${
                          isActive ? "text-base-900" : "text-cyan-400"
                        }`}
                      />
                    </span>
                    <span className="font-display text-sm font-semibold text-ink">{node.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                      {node.sublabel}
                    </span>
                  </span>
                </motion.button>

                {/* connectors (static lines); last card gets a spacer to keep equal width */}
                {i < archNodes.length - 1 ? (
                  <>
                    <FlowConnector vertical />
                    <FlowConnector />
                  </>
                ) : (
                  <div aria-hidden className="hidden flex-1 lg:block" />
                )}
              </div>
            );
          })}

          {/* Single dot: top-half rounded-rect trace + middle line, synced (desktop). */}
          {pathD && !reduce && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 hidden lg:block"
              style={{
                offsetPath: `path("${pathD}")`,
                offsetDistance,
                offsetRotate: "0deg",
              }}
            >
              {/* Adjust -translate-y-[6px] to move the dot up/down along the path. */}
              <span
                className="block h-2.5 w-2.5 -translate-y-[25px] rounded-full bg-cyan-300"
                style={{ filter: "drop-shadow(0 0 8px rgba(43,212,255,0.95))" }}
              />
            </motion.span>
          )}
        </div>

        {/* Expandable detail panel */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-electric-gradient text-base-900">
                  <activeNode.icon size={26} />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-ink">{activeNode.label}</h3>
                    <span className="rounded-full bg-electric/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan-400 ring-1 ring-electric/20">
                      {activeNode.sublabel}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">
                    {activeNode.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 font-mono text-xs text-ink-faint">
                    Stage {activeIndex + 1} of {archNodes.length}
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
