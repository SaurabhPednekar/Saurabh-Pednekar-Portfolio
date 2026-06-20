"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillCategories } from "@/lib/data";

function avg(levels: number[]) {
  return Math.round(levels.reduce((a, b) => a + b, 0) / levels.length);
}

function RadarChart({ activeIndex }: { activeIndex: number | null }) {
  const size = 320;
  const center = size / 2;
  const maxR = 120;
  const padX = 34;
  const data = skillCategories.map((c) => ({
    label: c.title,
    value: avg(c.skills.map((s) => s.level)),
  }));
  const n = data.length;

  const point = (i: number, ratio: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return {
      x: center + Math.cos(angle) * maxR * ratio,
      y: center + Math.sin(angle) * maxR * ratio,
    };
  };

  const polygon = data
    .map((d, i) => {
      const p = point(i, d.value / 100);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`${-padX} 0 ${size + padX * 2} ${size}`} className="h-full w-full" aria-hidden="true">      {/* Rings */}
      {[0.25, 0.5, 0.75, 1].map((r) => (
        <polygon
          key={r}
          points={data
            .map((_, i) => {
              const p = point(i, r);
              return `${p.x},${p.y}`;
            })
            .join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
        />
      ))}
      {/* Axes */}
      {data.map((_, i) => {
        const p = point(i, 1);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
        );
      })}
      {/* Data polygon */}
      <motion.polygon
        points={polygon}
        fill="rgba(46,139,255,0.18)"
        stroke="#2BD4FF"
        strokeWidth={2}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: `${center}px ${center}px` }}
      />
      {/* Vertices */}
      {data.map((d, i) => {
        const p = point(i, d.value / 100);
        const lp = point(i, 1.16);
        const isActive = activeIndex === i;
        return (
          <g key={d.label}>
            <circle cx={p.x} cy={p.y} r={isActive ? 6 : 4} fill={isActive ? "#9BE3FF" : "#2BD4FF"} />
            <text
              x={lp.x}
              y={lp.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={10}
              fontFamily="var(--font-mono), monospace"
              fill={isActive ? "#CFEcFF" : "#94A1BC"}
            >
              {d.label.split(" ")[0]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function Skills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills across the MDM stack"
        description="From platform configuration to integration and architecture — a working depth built on real production systems."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
        {/* Skill cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <GlassCard
                key={cat.id}
                className="p-6"
                onMouseEnter={() => setActive(ci)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-cyan-400 ring-1 ring-electric/20">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm text-ink">{s.name}</span>
                        <span className="font-mono text-xs text-ink-faint">{s.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          className="h-full rounded-full bg-electric-gradient"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Radar */}
        <GlassCard hover={false} className="flex flex-col items-center justify-center p-6">
          <p className="eyebrow mb-2">Proficiency Radar</p>
          <div className="aspect-square w-full max-w-[340px]">
            <RadarChart activeIndex={active} />
          </div>
          <p className="mt-2 text-center text-xs text-ink-muted">
            Hover a skill group to highlight its axis.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}
