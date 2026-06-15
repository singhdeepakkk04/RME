import { useEffect, useRef, useState } from "react";
import { BENCHMARK } from "../data/site";
import Reveal from "./Reveal";

export default function Benchmark() {
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
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="benchmark" className="py-24">
      <div className="container-site">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Measured, honestly</span>
          <h2 className="mt-3.5 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Real numbers on a real full-stack repo.
          </h2>
          <p className="mt-4 text-ash">
            Baseline = grep output plus the full source of every matching file.
            RME = the pointer list plus the few node bodies the agent actually
            reads. No cherry-picking, natural-language questions included.
          </p>
        </Reveal>

        <Reveal>
          <div ref={ref} className="mx-auto max-w-3xl rounded-xl2 border border-hair bg-panel/60 p-6 md:p-8">
            <div className="grid grid-cols-[1.4fr_2fr_0.6fr] items-center gap-4 border-b border-hair pb-3 text-[11px] uppercase tracking-[0.1em] text-faint">
              <span>Question</span>
              <span>Token reduction</span>
              <span className="text-right">Saved</span>
            </div>

            {BENCHMARK.map((b, i) => (
              <div
                key={b.q}
                className="grid grid-cols-[1.4fr_2fr_0.6fr] items-center gap-4 border-b border-hair py-3.5 text-sm last:border-0"
              >
                <span className="text-ash">“{b.q}”</span>
                <span className="h-2.5 overflow-hidden rounded-full bg-black/[0.06]">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-signal-dim to-signal transition-[width] duration-[1100ms] ease-out"
                    style={{ width: run ? `${b.w}%` : "0%", transitionDelay: `${i * 90}ms` }}
                  />
                </span>
                <span className="text-right font-mono font-bold text-signal">{b.val}</span>
              </div>
            ))}

            <p className="mt-5 text-center text-sm text-ash">
              Overall <strong className="text-chalk">33.2× fewer tokens</strong>:
              8,984 vs 298,454 across the suite. Average ~48,000 tokens saved per
              question.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
