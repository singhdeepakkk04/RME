import { useEffect, useRef, useState } from "react";
import { STATS } from "../data/site";

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
      else setVal(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return val;
}

function Stat({ target, suffix, label, run }: { target: number; suffix: string; label: string; run: boolean }) {
  const v = useCountUp(target, run);
  const decimals = (String(target).split(".")[1] || "").length;
  return (
    <div className="rounded-xl2 border border-hair bg-panel/60 p-7 text-center">
      <div className="font-display text-4xl font-bold tracking-tight text-signal md:text-5xl">
        {v.toFixed(decimals)}
        <span className="text-3xl">{suffix}</span>
      </div>
      <div className="mt-2.5 text-sm text-ash">{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-16">
      <div ref={ref} className="container-site grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  );
}
