import type { LucideIcon } from "lucide-react";

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export interface ArchNode {
  id: string;
  label: string;
  sublabel: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  technologies: string[];
  challenge: string;
  solution: string;
  impact: string[];
  icon: LucideIcon;
}

export interface CaseStudy {
  id: string;
  title: string;
  domain: string;
  problem: string;
  analysis: string;
  solution: string;
  businessImpact: string;
  metric: { value: string; label: string }[];
}

export interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  duration: string;
  logo: string;
  summary: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
}

export interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export interface PlaygroundDomain {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  dataModel: string[];
  workflow: string[];
  validationRules: string[];
  integration: string[];
}

export interface NavItem {
  id: string;
  label: string;
}
