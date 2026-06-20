"use client";

import { motion } from "framer-motion";
import { AlertCircle, Search, Wrench, BarChart3 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { caseStudies } from "@/lib/data";

const steps = [
  { key: "problem", label: "Problem", icon: AlertCircle },
  { key: "analysis", label: "Analysis", icon: Search },
  { key: "solution", label: "Solution", icon: Wrench },
  { key: "businessImpact", label: "Business Impact", icon: BarChart3 },
] as const;

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <SectionHeading
        eyebrow="Case Studies"
        title="Root cause to business impact"
        description="Two production defects, traced from symptom to fix — the kind of work that keeps enterprise data trustworthy."
      />

      <div className="mt-14 space-y-8">
        {caseStudies.map((cs, idx) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false} className="overflow-hidden p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-ink">{cs.title}</h3>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  {cs.domain}
                </span>
              </div>

              {/* metrics */}
              <div className="mt-5 flex flex-wrap gap-4">
                {cs.metric.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-electric/[0.07] px-4 py-3 ring-1 ring-electric/15"
                  >
                    <div className="font-display text-2xl font-bold accent-gradient">{m.value}</div>
                    <div className="text-xs text-ink-muted">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* storytelling flow */}
              <div className="mt-7 grid gap-4 md:grid-cols-4">
                {steps.map((step, si) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.key}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + si * 0.1 }}
                      className="relative rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/[0.06]"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric/10 text-cyan-400">
                          <Icon size={14} />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                          {String(si + 1).padStart(2, "0")} · {step.label}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-ink-muted">{cs[step.key]}</p>
                    </motion.div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
