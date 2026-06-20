"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Linkedin, Mail, ArrowDown } from "lucide-react";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Animated data network */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(80%_70%_at_60%_45%,black,transparent)]"
      >
        <NetworkBackground />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl lg:flex-1">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="font-mono uppercase tracking-[0.18em] text-ink-muted">
              {profile.location} · Open to opportunities
            </span>
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-lg font-medium text-gradient sm:text-2xl"
          >
            {profile.title}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-1.5 font-mono text-sm font-medium tracking-wide text-white sm:text-base"
          >
            {profile.subtitle}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href={profile.resumeHref} download variant="primary" ariaLabel="Download resume">
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton href={profile.linkedin} external variant="ghost" ariaLabel="LinkedIn profile">
              <Linkedin size={16} /> LinkedIn
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost" ariaLabel="Contact me">
              <Mail size={16} /> Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden h-72 w-72 shrink-0 lg:block xl:h-80 xl:w-80"
        >
          <div className="absolute inset-0 rounded-full ring-1 ring-electric/40" />
          <div className="absolute inset-3 overflow-hidden rounded-full bg-base-800 ring-1 ring-electric/25">
            <Image
              src="/images/saurabh-1.jpg"
              alt={profile.name}
              fill
              sizes="(min-width: 1280px) 320px, 288px"
              className="object-cover"
              priority
            />
          </div>
          <span className="absolute right-6 top-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(43,212,255,0.6)]" />
          <span className="absolute -left-1 bottom-12 h-2 w-2 rounded-full bg-electric" />
          <span className="absolute bottom-20 right-0 h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint focus-visible:outline-none"
        aria-label="Scroll to content"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
