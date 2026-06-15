import { PIPELINE } from "../data/site";
import Reveal from "./Reveal";

export default function Pipeline() {
  return (
    <section id="how" className="dotgrid border-y border-hair py-24">
      <div className="container-site">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Pipeline</span>
          <h2 className="mt-3.5 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Three stages. Two are free and instant.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {PIPELINE.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08}>
              <div className="group h-full rounded-xl2 border border-hair bg-panel/70 p-8 transition-all hover:-translate-y-1 hover:border-hair2">
                <span className="inline-block rounded-lg border border-signal/25 bg-signal-glow px-2.5 py-1 font-mono text-sm font-semibold text-signal">
                  {step.num}
                </span>
                <h3 className="mt-5 flex items-center gap-2.5 font-display text-xl font-semibold">
                  {step.title}
                  {step.optional && (
                    <span className="rounded-md bg-black/[0.05] px-2 py-0.5 text-[11px] font-medium text-faint">
                      optional
                    </span>
                  )}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ash">{step.body}</p>
                <div className="mt-5 font-mono text-xs text-faint">{step.tag}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
