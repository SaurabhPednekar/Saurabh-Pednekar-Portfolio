import {
  Boxes,
  Users,
  Truck,
  Database,
  Network,
  Code2,
  Layers,
  Workflow,
  ShieldCheck,
  GitBranch,
  Gauge,
  Briefcase,
  Award,
  CalendarCheck,
  Building2,
  Server,
  Cpu,
  Cloud,
  ArrowRightLeft,
} from "lucide-react";
import type {
  Stat,
  SkillCategory,
  ArchNode,
  Project,
  CaseStudy,
  TimelineEntry,
  Certification,
  Article,
  PlaygroundDomain,
  NavItem,
} from "./types";

export const profile = {
  name: "Saurabh Pednekar",
  title: "Master Data Management Developer",
  subtitle: "STIBO STEP · Informatica MDM · Reltio",
  tagline:
    "Building scalable enterprise data solutions using STIBO STEP, Informatica MDM, and Reltio.",
  location: "Mumbai, India",
  email: "saurabhmpednekar500@gmail.com",
  linkedin: "https://www.linkedin.com/in/saurabh-pednekar-921a231a2",
  resumeHref: "/Saurabh Pednekar Resume.pdf",
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "architecture", label: "Architecture" },
  { id: "projects", label: "Projects" },
  { id: "playground", label: "Playground" },
  { id: "timeline", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const stats: Stat[] = [
  { label: "Years of Experience", value: 5, suffix: "", icon: CalendarCheck },
  { label: "MDM Platforms", value: 3, icon: Database },
  { label: "Business Rules Developed", value: 100, suffix: "+", icon: Code2 },
  { label: "Workflows Built", value: 25, suffix: "+", icon: Workflow },
  { label: "Enterprise Programs", value: 8, suffix: "+", icon: Building2 },
  { label: "Industry Domains", value: 5, suffix: "+", icon: Layers },
];

export const aboutCapabilities = [
  {
    title: "Enterprise Data Management",
    icon: Database,
    text: "Designing master data foundations that scale across business units.",
  },
  {
    title: "Product MDM",
    icon: Boxes,
    text: "Centralizing product and material data with rich modeling and syndication.",
  },
  {
    title: "Customer MDM",
    icon: Users,
    text: "Building trusted golden customer records with matching and survivorship.",
  },
  {
    title: "Data Governance",
    icon: ShieldCheck,
    text: "Stewardship workflows, ownership, and policy enforcement at scale.",
  },
  {
    title: "Data Quality",
    icon: Gauge,
    text: "Validation, cleansing, and continuous quality monitoring frameworks.",
  },
  {
    title: "System Integration",
    icon: ArrowRightLeft,
    text: "Connecting SAP, CRM, and downstream systems via APIs and event streams.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "platforms",
    title: "MDM Platforms",
    icon: Database,
    skills: [
      { name: "STIBO STEP", level: 95 },
      { name: "Informatica MDM", level: 75 },
      { name: "Reltio", level: 50 },
    ],
  },
  {
    id: "integration",
    title: "Integration",
    icon: Network,
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "Kafka", level: 75 },
      { name: "SOAP", level: 80 },
      { name: "Azure", level: 60 },
    ],
  },
  {
    id: "development",
    title: "Development",
    icon: Code2,
    skills: [
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "XML", level: 95 },
      { name: "XSLT", level: 75 },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: Layers,
    skills: [
      { name: "Data Modeling", level: 92 },
      { name: "Data Governance", level: 85 },
      { name: "Data Quality", level: 88 },
      { name: "Master Data Strategy", level: 82 },
    ],
  },
];

export const archNodes: ArchNode[] = [
  {
    id: "sap",
    label: "SAP",
    sublabel: "Source of record",
    description:
      "Vendor, customer, and material data originates in SAP and is published as the authoritative transactional source.",
    icon: Server,
  },
  {
    id: "step",
    label: "STIBO STEP",
    sublabel: "MDM hub",
    description:
      "STEP ingests inbound data, models it against the enterprise schema, and orchestrates governance across domains.",
    icon: Database,
  },
  {
    id: "rules",
    label: "Business Rules",
    sublabel: "Validation & enrichment",
    description:
      "JavaScript and configuration-driven rules validate completeness, enforce standards, and enrich records on the fly.",
    icon: Code2,
  },
  {
    id: "workflow",
    label: "Workflow Engine",
    sublabel: "Stewardship",
    description:
      "Multi-step workflows route records to data stewards for review, approval, and exception handling.",
    icon: Workflow,
  },
  {
    id: "api",
    label: "API Layer",
    sublabel: "Syndication",
    description:
      "REST and event-based endpoints (OIEP / Kafka) syndicate governed golden records to consumers.",
    icon: Cpu,
  },
  {
    id: "downstream",
    label: "Downstream Systems",
    sublabel: "Consumers",
    description:
      "CRM, e-commerce, analytics, and ERP systems consume a single, trusted source of truth.",
    icon: Cloud,
  },
];

export const projects: Project[] = [
  {
    id: "scaling",
    title: "Enterprise MDM Platform Scaling",
    tagline: "Re-architecting a STEP environment for multi-domain growth",
    overview:
      "Scaled a STIBO STEP platform from a single product domain to a multi-domain hub serving product, vendor, and customer master data across regions.",
    technologies: ["STIBO STEP", "JavaScript", "XML", "REST APIs", "SQL"],
    challenge:
      "Growing data volumes and new domains were straining workflow throughput, and inconsistent rule logic caused validation gaps between regions.",
    solution:
      "Refactored shared business-rule libraries, introduced reusable validation functions, and tuned workflow partitioning to balance steward load across teams.",
    impact: [
      "Reduced rule duplication across 200+ functions",
      "Cut validation defects escaping to downstream systems",
      "Enabled onboarding of new domains without re-platforming",
    ],
    icon: Layers,
  },
  {
    id: "centralization",
    title: "Product Data Centralization",
    tagline: "A single source of truth for product information",
    overview:
      "Consolidated fragmented product information from multiple source systems into a governed STEP product hub with syndication to e-commerce and ERP.",
    technologies: ["STIBO STEP", "OIEP", "Solace JMS", "XSLT", "Data Modeling"],
    challenge:
      "Disparate product attributes lived in spreadsheets and siloed systems, leading to inconsistent listings and slow time-to-market.",
    solution:
      "Designed the product data model, built inbound mappings, and created an outbound integration endpoint distributing governed data over a JMS bus.",
    impact: [
      "Established one governed product catalog",
      "Automated syndication to downstream consumers",
      "Improved attribute completeness and consistency",
    ],
    icon: Boxes,
  },
  {
    id: "automation",
    title: "Workflow Automation Framework",
    tagline: "Configurable stewardship at enterprise scale",
    overview:
      "Built a reusable workflow framework that standardized review, approval, and exception handling across data domains.",
    technologies: ["STIBO STEP", "JavaScript", "Workflow Config", "Web UI"],
    challenge:
      "Each domain reinvented its own stewardship process, making maintenance costly and onboarding slow.",
    solution:
      "Created parameterized workflow templates, standardized state transitions, and surfaced exceptions through tailored Web UI screens for stewards.",
    impact: [
      "Standardized stewardship across 25+ workflows",
      "Reduced configuration effort for new processes",
      "Improved steward visibility into exceptions",
    ],
    icon: Workflow,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "tax-mapping",
    title: "Vendor Withholding Tax Mapping Defect",
    domain: "Supplier MDM · Finance Integration",
    problem:
      "Vendor records mapped to Romania were failing tax validation, blocking onboarding and creating finance escalations.",
    analysis:
      "Tracing the mapping logic revealed a missing company-code entry — the 86C0 to Romania relationship was absent from the configured lookup, so otherwise valid records failed.",
    solution:
      "Added the missing mapping entry, validated against impacted records, and added a regression check so the gap could not silently reappear.",
    businessImpact:
      "Unblocked vendor onboarding for the affected region and removed a recurring source of finance escalations.",
    metric: [
      { value: "100%", label: "Affected records cleared" },
      { value: "0", label: "Recurring escalations after fix" },
    ],
  },
  {
    id: "validation-gap",
    title: "Closing a Sales-Area Validation Gap",
    domain: "Customer MDM · Data Quality",
    problem:
      "A specific exemption path was bypassing same-sales-area validation, allowing inconsistent records to pass review.",
    analysis:
      "Inspecting the 18,000+ line validation library isolated where the exemption short-circuited the same-sales-area check, letting edge-case records through.",
    solution:
      "Tightened the rule so the exemption no longer skipped the integrity check, then catalogued the function library to prevent future blind spots.",
    businessImpact:
      "Restored validation integrity for the affected flow and produced reusable documentation of ~200 validation functions.",
    metric: [
      { value: "200+", label: "Functions documented" },
      { value: "18k+", label: "Lines analyzed" },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    company: "EPAM Systems",
    role: "MDM Developer",
    period: "Current",
    duration: "August 2025 – Present",
    logo: "/logos/EPAM.svg",
    summary:
      "Deploy support and development for an enterprise STIBO STEP environment across product and supplier domains.",
    highlights: [
      "Diagnosed and resolved complex validation and tax-mapping defects",
      "Catalogued a large JavaScript validation library for maintainability",
      "Built integration endpoints for governed data syndication",
    ],
  },
  {
    company: "PwC",
    role: "MDM Consultant",
    period: "Recent",
    duration: "June 2024 – August 2025",
    logo: "/logos/PwC.svg",
    summary:
      "Delivered master data solutions across publishing and beverage industry clients.",
    highlights: [
      "Modeled master data domains for enterprise clients",
      "Implemented data quality and governance workflows",
      "Partnered with stakeholders on data strategy",
    ],
  },
  {
    company: "Cognizant",
    role: "MDM Developer",
    period: "Early start",
    duration: "August 2021 – June 2024",
    logo: "/logos/Cognizant.svg",
    summary:
      "Built foundational MDM expertise across healthcare and retail engagements.",
    highlights: [
      "Configured workflows and business rules",
      "Supported data integration across source systems",
      "Developed core data modeling skills",
    ],
  },
];

export const certifications: Certification[] = [
  { title: "STIBO STEP Certified", issuer: "Stibo Systems", date: "—", icon: Database },
  { title: "Informatica MDM Certified", issuer: "Informatica", date: "—", icon: GitBranch },
  { title: "Reltio Certified", issuer: "Reltio", date: "—", icon: Network },
  { title: "IELTS — 8.0", issuer: "British Council / IDP", date: "—", icon: Award },
];

export const articles: Article[] = [
  {
    title: "STIBO Workflow Best Practices",
    excerpt:
      "Patterns for designing maintainable, reusable stewardship workflows that scale across domains.",
    category: "STIBO STEP",
    readTime: "6 min read",
  },
  {
    title: "Informatica vs Reltio",
    excerpt:
      "A practical comparison of two leading MDM platforms — architecture, modeling, and operational trade-offs.",
    category: "Platforms",
    readTime: "8 min read",
  },
  {
    title: "MDM Architecture Patterns",
    excerpt:
      "Registry, consolidation, coexistence, and centralized styles — and when each one earns its place.",
    category: "Architecture",
    readTime: "7 min read",
  },
  {
    title: "Enterprise Data Governance",
    excerpt:
      "Turning governance from a policy document into enforceable workflows and measurable quality.",
    category: "Governance",
    readTime: "5 min read",
  },
];

export const playgroundDomains: PlaygroundDomain[] = [
  {
    id: "product",
    title: "Product MDM",
    blurb: "Centralized product and material master data with rich syndication.",
    icon: Boxes,
    dataModel: [
      "Product → Variant → SKU hierarchy",
      "Classification & attribute groups",
      "Localized descriptions & assets",
      "Reference data for units & categories",
    ],
    workflow: [
      "Capture inbound product data",
      "Enrich attributes & assets",
      "Steward review & approval",
      "Publish to commerce & ERP",
    ],
    validationRules: [
      "Mandatory attribute completeness",
      "Classification consistency checks",
      "Unit-of-measure validation",
      "Duplicate detection on identifiers",
    ],
    integration: [
      "SAP material master inbound",
      "OIEP outbound over JMS",
      "REST syndication to commerce",
      "Asset/DAM linkage",
    ],
  },
  {
    id: "customer",
    title: "Customer MDM",
    blurb: "Trusted golden customer records with matching and survivorship.",
    icon: Users,
    dataModel: [
      "Party → Account → Contact model",
      "Address & communication entities",
      "Hierarchies & relationships",
      "Consent & privacy attributes",
    ],
    workflow: [
      "Ingest from CRM & sources",
      "Match & merge candidates",
      "Survivorship & golden record",
      "Distribute to consumers",
    ],
    validationRules: [
      "Same-sales-area integrity checks",
      "Address standardization",
      "Match-key completeness",
      "Mandatory contact fields",
    ],
    integration: [
      "CRM bidirectional sync",
      "Event publishing via Kafka",
      "Address verification service",
      "Analytics & reporting feed",
    ],
  },
  {
    id: "supplier",
    title: "Supplier MDM",
    blurb: "Governed vendor data with finance and compliance alignment.",
    icon: Truck,
    dataModel: [
      "Vendor → Company-code → Bank",
      "Tax & withholding attributes",
      "Purchasing org assignments",
      "Compliance & risk attributes",
    ],
    workflow: [
      "Vendor request intake",
      "Finance & tax validation",
      "Compliance approval",
      "Activation & syndication",
    ],
    validationRules: [
      "Company-code to country mapping",
      "Withholding-tax consistency",
      "Bank detail validation",
      "Duplicate vendor prevention",
    ],
    integration: [
      "SAP vendor master sync",
      "Tax mapping reference data",
      "Procurement system feed",
      "Compliance screening service",
    ],
  },
];

export const heroNetworkNodes = [
  "SAP",
  "ERP",
  "CRM",
  "STIBO",
  "Reltio",
  "Informatica",
  "Kafka",
  "Data Lake",
];

export { Briefcase };
