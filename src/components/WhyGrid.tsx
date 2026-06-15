import { WHY } from "../data/site";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function WhyGrid() {
  return (
    <section className="py-24">
      <div className="container-site">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Why RME</span>
          <h2 className="mt-3.5 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Precise where it counts.
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.07}>
              <div className="group h-full rounded-xl2 border border-hair bg-panel/50 p-7 transition-all hover:-translate-y-1 hover:border-hair2 hover:bg-panel2/60">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-signal/25 bg-signal-glow text-signal">
                  <Icon name={c.icon} size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
