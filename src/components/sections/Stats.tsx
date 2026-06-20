"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/motion";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section id="stats" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
      <Reveal className="mb-10 text-center">
        <span className="eyebrow">Experience Snapshot</span>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-6"
      >
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
              }}
            >
              <GlassCard className="flex h-full flex-col items-start gap-3 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-cyan-400 ring-1 ring-electric/20">
                  <Icon size={18} />
                </span>
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="text-xs leading-snug text-ink-muted">{s.label}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
