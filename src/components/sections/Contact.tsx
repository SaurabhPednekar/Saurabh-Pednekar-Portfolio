"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Download, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 text-center sm:p-14">
          {/* ambient glow */}
          <span className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl" />

          <span className="eyebrow">Let&apos;s build a single source of truth</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Have an MDM challenge worth solving?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            I am open to roles and collaborations in enterprise master data management. The fastest
            way to reach me is LinkedIn or email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href={`mailto:${profile.email}`} variant="primary" ariaLabel="Email Saurabh">
              <Mail size={16} /> Email Me
            </MagneticButton>
            <MagneticButton href={profile.linkedin} external variant="ghost" ariaLabel="LinkedIn profile">
              <Linkedin size={16} /> LinkedIn
            </MagneticButton>
            <MagneticButton href={profile.resumeHref} download variant="ghost" ariaLabel="Download resume">
              <Download size={16} /> Resume
            </MagneticButton>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-ink-faint"
          >
            <MapPin size={14} /> {profile.location}
          </motion.div>
        </div>
      </Reveal>
    </Section>
  );
}
