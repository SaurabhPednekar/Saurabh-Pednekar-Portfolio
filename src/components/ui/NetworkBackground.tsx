"use client";

import { useReducedMotion } from "framer-motion";

/** Fixed layout so it is deterministic + SSR-safe. viewBox 1000 x 600. */
const NODES: Record<string, { x: number; y: number; r: number; hub?: boolean }> = {
  STIBO: { x: 500, y: 300, r: 30, hub: true },
  SAP: { x: 150, y: 140, r: 20 },
  CRM: { x: 392, y: 92, r: 18 },
  ERP: { x: 150, y: 372, r: 18 },
  "Data Lake": { x: 232, y: 512, r: 20 },
  Kafka: { x: 560, y: 540, r: 18 },
  Informatica: { x: 842, y: 470, r: 20 },
  Reltio: { x: 862, y: 176, r: 20 },
};

const EDGES: [string, string][] = [
  ["SAP", "STIBO"],
  ["CRM", "STIBO"],
  ["ERP", "STIBO"],
  ["Data Lake", "STIBO"],
  ["Kafka", "STIBO"],
  ["Informatica", "STIBO"],
  ["Reltio", "STIBO"],
  ["SAP", "CRM"],
  ["ERP", "Data Lake"],
  ["Reltio", "Informatica"],
  ["Kafka", "Data Lake"],
];

// Edges that carry a visible travelling data packet
const PACKET_EDGES = [0, 1, 3, 5, 6, 10];

export function NetworkBackground() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1000 600"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2BD4FF" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#2E8BFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2E8BFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6BB0FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2E8BFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E8BFF" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#2BD4FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2E8BFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Edges */}
      {EDGES.map(([a, b], i) => {
        const from = NODES[a];
        const to = NODES[b];
        const d = `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
        return (
          <g key={`edge-${i}`}>
            <path d={d} stroke="url(#edgeGrad)" strokeWidth={1.4} fill="none" />
            {!reduce && (
              <path
                d={d}
                stroke="#2BD4FF"
                strokeWidth={1.6}
                fill="none"
                strokeDasharray="6 220"
                className="animate-dash-flow"
                style={{ animationDelay: `${(i % 6) * -1.8}s`, opacity: 0.7 }}
              />
            )}
            {!reduce && PACKET_EDGES.includes(i) && (
              <circle r={3.2} fill="#9BE3FF">
                <animateMotion
                  dur={`${5 + (i % 4)}s`}
                  repeatCount="indefinite"
                  path={d}
                  begin={`${(i % 5) * 0.7}s`}
                />
              </circle>
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {Object.entries(NODES).map(([label, n]) => (
        <g key={label}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r * 2.6}
            fill={n.hub ? "url(#hubGlow)" : "url(#nodeGlow)"}
            className={reduce ? "" : "animate-pulse-node"}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#080B14"
            stroke={n.hub ? "#2BD4FF" : "#3D9BFF"}
            strokeWidth={n.hub ? 2 : 1.4}
          />
          <circle cx={n.x} cy={n.y} r={n.r * 0.35} fill={n.hub ? "#2BD4FF" : "#6BB0FF"} />
          <text
            x={n.x}
            y={n.y + n.r + 18}
            textAnchor="middle"
            fontSize={n.hub ? 15 : 12}
            fontFamily="var(--font-mono), monospace"
            letterSpacing="0.08em"
            fill={n.hub ? "#CFEcFF" : "#94A1BC"}
            style={{ textTransform: "uppercase" }}
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
