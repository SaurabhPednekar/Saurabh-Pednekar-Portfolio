"use client";

import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/lib/data";
import type { TimelineEntry } from "@/lib/types";

function JourneyCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-[320px] [perspective:1200px]"
    >
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        aria-label={`${entry.company} — show details`}
        className="relative h-full w-full text-left focus-visible:outline-none"
      >
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Front: logo + duration */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-2xl border border-glass-border glass p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.logo}
              alt={`${entry.company} logo`}
              className="h-16 w-auto max-w-[220px] object-contain opacity-90 brightness-0 invert"
            />
            <div className="text-center">
              <p className="font-display text-base font-semibold text-ink">{entry.company}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-cyan-400">
                {entry.duration}
              </p>
            </div>
            <span className="absolute bottom-3 right-3 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              <RotateCw size={11} /> Flip
            </span>
          </div>

          {/* Back: full details */}
          <div
            className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl border border-electric/30 glass-strong p-5"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="font-display text-base font-semibold text-ink">{entry.company}</p>
            <p className="mt-0.5 text-sm text-cyan-400">{entry.role}</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              {entry.duration}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-ink-muted">{entry.summary}</p>
            <ul className="mt-3 space-y-1.5">
              {entry.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <Section id="timeline">
      <SectionHeading
        eyebrow="Career Journey"
        title="A path through enterprise consulting"
        description="Building MDM depth across global delivery organizations and industry domains. Hover or tap a card to see the details."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {timeline.map((entry, i) => (
          <JourneyCard key={entry.company} entry={entry} index={i} />
        ))}
      </div>
    </Section>
  );
}