"use client";

import { Database, Linkedin, Mail } from "lucide-react";
import { profile, navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 hairline" />
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_auto] md:items-start">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric-gradient text-base-900">
                <Database size={18} strokeWidth={2.4} />
              </span>
              <span className="font-display text-base font-semibold text-ink">{profile.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Helping enterprises establish a single source of truth through scalable Master Data
              Management solutions.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm text-ink-muted transition-colors hover:text-cyan-400"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink-muted transition-colors hover:text-cyan-400"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink-muted transition-colors hover:text-cyan-400"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/[0.05] pt-6 text-xs text-ink-faint sm:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span className="font-mono">Built with Next.js · TypeScript · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
