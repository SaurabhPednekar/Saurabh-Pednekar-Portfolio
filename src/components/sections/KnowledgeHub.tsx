"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { articles } from "@/lib/data";

export function KnowledgeHub() {
  return (
    <Section id="knowledge">
      <SectionHeading
        eyebrow="Knowledge Hub"
        title="Writing on master data"
        description="Notes and patterns from the field — platform trade-offs, governance, and architecture."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-14 grid gap-5 sm:grid-cols-2"
      >
        {articles.map((a) => (
          <motion.div
            key={a.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <GlassCard className="group flex h-full cursor-pointer flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-electric/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-400 ring-1 ring-electric/20">
                  <FileText size={12} /> {a.category}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink transition-colors group-hover:text-white">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{a.excerpt}</p>
              <span className="mt-4 font-mono text-xs text-ink-faint">{a.readTime}</span>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
