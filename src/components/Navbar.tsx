"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Database } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems, profile } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "my-3 rounded-2xl glass-strong py-3" : "py-5"
        }`}
      >
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2.5 focus-visible:outline-none"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric-gradient text-base-900">
            <Database size={18} strokeWidth={2.4} />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink">
            {profile.name}
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="relative rounded-full px-4 py-2 text-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline-none"
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-electric/30"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={`relative ${active === item.id ? "text-ink" : ""}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <a
          href={profile.resumeHref}
          download
          className="hidden rounded-full bg-electric-gradient px-5 py-2.5 text-sm font-semibold text-base-900 shadow-glow transition-shadow hover:shadow-glow-cyan lg:inline-flex"
        >
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-ink lg:hidden focus-visible:outline-none"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass-strong p-2 lg:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                  active === item.id
                    ? "bg-white/[0.07] text-ink"
                    : "text-ink-muted hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.resumeHref}
              download
              className="mt-1 block rounded-xl bg-electric-gradient px-4 py-3 text-center text-sm font-semibold text-base-900"
            >
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
