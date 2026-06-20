"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-20 w-20 items-center justify-center"
            >
              <span className="absolute inset-0 rounded-2xl bg-electric-gradient opacity-30 blur-xl" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass-strong font-display text-2xl font-bold accent-gradient">
                SP
              </span>
            </motion.div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">
              Initializing data layer
            </p>

            <div className="mt-4 h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-electric-gradient"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
