"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Database, Workflow, ShieldCheck, Network, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { playgroundDomains } from "@/lib/data";

const panels = [
  { key: "dataModel", label: "Data Model", icon: Database },
  { key: "workflow", label: "Workflow Design", icon: Workflow },
  { key: "validationRules", label: "Validation Rules", icon: ShieldCheck },
  { key: "integration", label: "Integration", icon: Network },
] as const;

export function Playground() {
  const [activeId, setActiveId] = useState(playgroundDomains[0].id);
  const domain = playgroundDomains.find((d) => d.id === activeId)!;

  return (
    <Section id="playground">
      <SectionHeading
        eyebrow="Interactive · Special Feature"
        title="MDM Solution Playground"
        description="Pick a domain to see how its data model, stewardship workflow, validation rules, and integration architecture come together."
      />

      {/* Domain selector cards */}
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {playgroundDomains.map((d) => {
          const Icon = d.icon;
          const isActive = d.id === activeId;
          return (
            <motion.button
              key={d.id}
              onClick={() => setActiveId(d.id)}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-2xl border p-6 text-left transition-colors focus-visible:outline-none ${
                isActive
                  ? "border-electric/50 bg-electric/10 shadow-glow"
                  : "glass border-glass-border hover:border-electric/30"
              }`}
              aria-pressed={isActive}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                  isActive ? "bg-electric-gradient text-base-900" : "bg-electric/10 text-cyan-400"
                }`}
              >
                <Icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{d.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{d.blurb}</p>
            </motion.button>
          );
        })}
      </div>

      {/* Animated detail panels */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {panels.map((panel) => {
          const Icon = panel.icon;
          const items = domain[panel.key];
          const isFlow = panel.key === "workflow";
          return (
            <div key={panel.key} className="glass-strong rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                <Icon size={14} /> {panel.label}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={domain.id + panel.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {isFlow ? (
                    <div className="flex flex-wrap items-center gap-2">
                      {items.map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center gap-2"
                        >
                          <span className="rounded-lg bg-electric/10 px-3 py-2 text-xs text-ink ring-1 ring-electric/20">
                            {step}
                          </span>
                          {i < items.length - 1 && (
                            <ArrowRight size={14} className="text-ink-faint" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2.5">
                      {items.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="flex items-start gap-3 text-sm text-ink-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-gradient" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
