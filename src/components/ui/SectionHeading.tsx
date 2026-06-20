"use client";

import { Reveal } from "./motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignClass} max-w-3xl`}>
      <span className="eyebrow mb-3 flex items-center gap-2">
        <span className="inline-block h-px w-6 bg-cyan-400/60" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
