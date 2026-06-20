"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/motion";
import { aboutCapabilities, profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About"
            title="Architecting a single source of truth"
            description={`I am an MDM developer based in ${profile.location} with almost 5 years building enterprise master data solutions. My work spans STIBO STEP, Informatica MDM, and Reltio — from data modeling and business rules to governance workflows and downstream integration.`}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="relative"
        >
          {/* Timeline rail */}
          <span className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-electric/60 via-electric/20 to-transparent sm:left-[23px]" />
          <div className="space-y-4">
            {aboutCapabilities.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="relative pl-12 sm:pl-14"
                >
                  <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl glass text-cyan-400 ring-1 ring-electric/30 sm:h-12 sm:w-12">
                    <Icon size={18} />
                  </span>
                  <GlassCard hover={false} className="p-4">
                    <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{c.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
