"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications & qualifications"
        description="Vendor-recognized expertise across the leading master data management platforms."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {certifications.map((c) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 text-center transition-shadow hover:shadow-glow"
            >
              {/* glow sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-cyan-400 ring-1 ring-electric/25 transition-colors group-hover:bg-electric-gradient group-hover:text-base-900">
                <Icon size={24} />
              </span>
              <h3 className="relative mt-4 font-display text-base font-semibold text-ink">{c.title}</h3>
              <p className="relative mt-1 text-sm text-ink-muted">{c.issuer}</p>
              <p className="relative mt-2 font-mono text-xs text-ink-faint">Issued · {c.date}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
