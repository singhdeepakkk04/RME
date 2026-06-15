import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * The brand centerpiece: an animated knowledge graph. Deterministic layout so
 * it always composes well. God nodes glow in the signal accent; edges draw in
 * on mount; nodes breathe. Purely decorative (aria-hidden).
 */

type Node = { id: number; x: number; y: number; r: number; god?: boolean };

const NODES: Node[] = [
  { id: 0, x: 50, y: 46, r: 7, god: true }, // central god node
  { id: 1, x: 24, y: 26, r: 4 },
  { id: 2, x: 78, y: 22, r: 5, god: true },
  { id: 3, x: 86, y: 56, r: 4 },
  { id: 4, x: 68, y: 78, r: 4 },
  { id: 5, x: 34, y: 74, r: 5, god: true },
  { id: 6, x: 14, y: 56, r: 4 },
  { id: 7, x: 50, y: 14, r: 3.5 },
  { id: 8, x: 92, y: 38, r: 3 },
  { id: 9, x: 60, y: 36, r: 3.5 },
  { id: 10, x: 40, y: 36, r: 3 },
  { id: 11, x: 26, y: 90, r: 3 },
  { id: 12, x: 74, y: 92, r: 3 },
  { id: 13, x: 8, y: 78, r: 3 },
];

const EDGES: [number, number][] = [
  [0, 9], [0, 10], [0, 5], [0, 3], [0, 4], [9, 2], [9, 8], [10, 1],
  [1, 7], [2, 7], [2, 8], [3, 8], [5, 6], [5, 11], [6, 13], [4, 12],
  [5, 13], [10, 6], [9, 3], [0, 2], [0, 1],
];

export default function GraphField({ className }: { className?: string }) {
  // Stable per-node animation offsets.
  const offsets = useMemo(
    () => NODES.map((n) => ({ dur: 4 + (n.id % 5) * 0.7, delay: (n.id % 7) * 0.3 })),
    []
  );

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="godGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2f855a" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#2f855a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* edges */}
      <g stroke="rgba(255,255,255,0.14)" strokeWidth="0.3">
        {EDGES.map(([a, b], i) => {
          const na = NODES[a];
          const nb = NODES[b];
          const touchesGod = na.god || nb.god;
          return (
            <motion.line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={touchesGod ? "rgba(47,133,90,0.42)" : "rgba(28,27,24,0.14)"}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2 + i * 0.04, ease: "easeOut" }}
            />
          );
        })}
      </g>

      {/* nodes */}
      <g>
        {NODES.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: "backOut" }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            {n.god && <circle cx={n.x} cy={n.y} r={n.r * 2.6} fill="url(#godGlow)" />}
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.god ? "#2f855a" : "#ffffff"}
              stroke={n.god ? "#5fb98c" : "rgba(28,27,24,0.28)"}
              strokeWidth="0.4"
              animate={{ r: [n.r, n.r * 0.9, n.r] }}
              transition={{
                duration: offsets[i].dur,
                delay: offsets[i].delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        ))}
      </g>
    </svg>
  );
}
