"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Target, Lightbulb, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const Icon = project.icon;

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-base-900/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl glass-strong p-6 sm:rounded-3xl sm:p-8"
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/[0.06] p-2 text-ink-muted transition-colors hover:text-ink focus-visible:outline-none"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-gradient text-base-900">
          <Icon size={22} />
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-1 text-sm text-cyan-400">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-ink-muted">{project.overview}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/[0.05] px-3 py-1 font-mono text-xs text-ink-muted ring-1 ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-5">
          <Detail icon={Target} label="Challenge" text={project.challenge} />
          <Detail icon={Lightbulb} label="Solution" text={project.solution} />
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
              <TrendingUp size={14} /> Impact
            </div>
            <ul className="space-y-2">
              {project.impact.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-gradient" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Detail({
  icon: Icon,
  label,
  text,
}: {
  icon: typeof Target;
  label: string;
  text: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
        <Icon size={14} /> {label}
      </div>
      <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that scaled with the business"
        description="Representative engagements across product, supplier, and stewardship domains. Open any card for the full breakdown."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
            >
              <GlassCard
                className="flex h-full cursor-pointer flex-col p-6"
                onClick={() => setOpen(p)}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-cyan-400 ring-1 ring-electric/20">
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight size={18} className="text-ink-faint transition-colors group-hover:text-cyan-400" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-cyan-400">{p.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{p.overview}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/[0.05] px-2.5 py-0.5 font-mono text-[10px] text-ink-muted ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 3 && (
                    <span className="px-1 py-0.5 font-mono text-[10px] text-ink-faint">
                      +{p.technologies.length - 3}
                    </span>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </Section>
  );
}
