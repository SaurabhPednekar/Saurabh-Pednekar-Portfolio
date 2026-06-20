"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Database } from "lucide-react";
import { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCapabilities, profile } from "@/lib/data";

const FLIP_MS = 5000;

function FlippingCapabilities() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % aboutCapabilities.length);
    }, FLIP_MS);
    return () => clearInterval(id);
  }, []);

  const cap = aboutCapabilities[index];
  const Icon = cap.icon;

  const variants = reduce
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { rotateY: 90, opacity: 0 },
        animate: { rotateY: 0, opacity: 1 },
        exit: { rotateY: -90, opacity: 0 },
      };

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      <div className="relative min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={cap.title}
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            className="glass-strong rounded-2xl border border-electric/25 p-8 shadow-glow"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-cyan-400 ring-1 ring-electric/30">
              <Icon size={26} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">{cap.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{cap.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* progress indicator */}
      <div className="mt-5 flex items-center gap-2">
        {aboutCapabilities.map((c, i) => (
          <button
            key={c.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${c.title}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-electric" : "w-1.5 bg-white/15 hover:bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="relative mb-7 w-max">
            <Image
              src="/images/saurabh-2.jpg"
              alt={profile.name}
              width={180}
              height={216}
              className="h-[216px] w-[180px] rounded-2xl object-cover ring-1 ring-electric/25"
            />
            <span className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-xl glass text-cyan-400 ring-1 ring-electric/30">
              <Database size={18} />
            </span>
          </div>
          <SectionHeading
            align="left"
            eyebrow="About"
            title="Architecting a single source of truth"
            description={`I am an MDM developer based in ${profile.location} with 4+ years building enterprise master data solutions. My work spans STIBO STEP, Informatica MDM, and Reltio — from data modeling and business rules to governance workflows and downstream integration.`}
          />
        </div>

        <FlippingCapabilities />
      </div>
    </Section>
  );
}
