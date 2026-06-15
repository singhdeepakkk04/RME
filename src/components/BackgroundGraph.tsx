import { motion } from "framer-motion";

/**
 * A very faint, full-page knowledge graph with dots that continuously traverse
 * it. Sits fixed behind all content (light theme, so lines are barely-there
 * dark/green). Purely decorative and aria-hidden; respects reduced-motion via
 * the global CSS rule that neutralizes animations.
 */

type P = { x: number; y: number };

// Spread across a 1440x900 field; `slice` scaling covers any viewport.
const NODES: P[] = [
  { x: 120, y: 140 }, // 0
  { x: 340, y: 80 }, // 1
  { x: 520, y: 220 }, // 2
  { x: 260, y: 320 }, // 3
  { x: 90, y: 440 }, // 4
  { x: 430, y: 460 }, // 5
  { x: 650, y: 360 }, // 6
  { x: 760, y: 150 }, // 7
  { x: 980, y: 90 }, // 8
  { x: 1180, y: 180 }, // 9
  { x: 1330, y: 360 }, // 10
  { x: 1080, y: 330 }, // 11
  { x: 880, y: 300 }, // 12
  { x: 1210, y: 520 }, // 13
  { x: 980, y: 560 }, // 14
  { x: 700, y: 600 }, // 15
  { x: 430, y: 680 }, // 16
  { x: 180, y: 640 }, // 17
  { x: 1330, y: 700 }, // 18
  { x: 760, y: 800 }, // 19
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [3, 4], [3, 5], [2, 5], [2, 6], [1, 7],
  [7, 8], [8, 9], [9, 10], [8, 12], [7, 12], [12, 11], [11, 9], [11, 13],
  [10, 13], [6, 12], [6, 15], [5, 15], [5, 16], [4, 17], [16, 17], [15, 14],
  [14, 13], [13, 18], [14, 19], [15, 19], [16, 19], [9, 11], [6, 5],
];

// Routes a traversal dot walks (closed back to start so the loop is seamless).
const PATHS: number[][] = [
  [0, 1, 7, 12, 11, 13, 18],
  [4, 3, 5, 6, 15, 14, 13],
  [8, 9, 11, 12, 6, 15, 19],
  [2, 5, 16, 17, 4],
];

function Traverser({ path, dur, delay }: { path: number[]; dur: number; delay: number }) {
  // Close the loop: return to the first node so the repeat has no jump.
  const seq = [...path, path[0]];
  const xs = seq.map((i) => NODES[i].x);
  const ys = seq.map((i) => NODES[i].y);
  const times = seq.map((_, i) => i / (seq.length - 1));
  // Fade in/out at the very ends to mask the wrap point.
  const opacity = seq.map((_, i) => (i === 0 || i === seq.length - 1 ? 0 : 0.9));

  return (
    <>
      <motion.circle
        r={5.5}
        fill="rgba(47,133,90,0.10)"
        initial={{ cx: xs[0], cy: ys[0], opacity: 0 }}
        animate={{ cx: xs, cy: ys, opacity }}
        transition={{ duration: dur, times, delay, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        r={2.6}
        fill="rgba(47,133,90,0.55)"
        initial={{ cx: xs[0], cy: ys[0], opacity: 0 }}
        animate={{ cx: xs, cy: ys, opacity }}
        transition={{ duration: dur, times, delay, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}

export default function BackgroundGraph() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* static, barely-there edges */}
        <g stroke="rgba(28,27,24,0.05)" strokeWidth="1">
          {EDGES.map(([a, b], i) => (
            <line key={i} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y} />
          ))}
        </g>
        {/* faint nodes */}
        <g fill="rgba(28,27,24,0.06)">
          {NODES.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={2.5} />
          ))}
        </g>
        {/* traversing dots */}
        <Traverser path={PATHS[0]} dur={16} delay={0} />
        <Traverser path={PATHS[1]} dur={18} delay={2.5} />
        <Traverser path={PATHS[2]} dur={20} delay={5} />
        <Traverser path={PATHS[3]} dur={14} delay={1.2} />
      </svg>
    </div>
  );
}
