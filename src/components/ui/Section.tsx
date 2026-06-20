import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-4 py-4 sm:px-6 md:py-8 ${className}`}>
      {children}
    </section>
  );
}
