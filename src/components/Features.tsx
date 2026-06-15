import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FEATURES } from "../data/site";
import Reveal from "./Reveal";
import Terminal from "./Terminal";

export default function Features() {
  const [active, setActive] = useState(FEATURES[0].id);
  const feature = FEATURES.find((f) => f.id === active)!;

  return (
    <section id="features" className="py-24">
      <div className="container-site">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-3.5 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Everything an agent needs before it reads or edits code.
          </h2>
        </Reveal>

        <Reveal>
          <div className="mb-7 flex flex-wrap justify-center gap-2">
            {FEATURES.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === f.id
                    ? "bg-signal text-white"
                    : "border border-hair bg-white text-ash hover:border-hair2 hover:text-chalk"
                }`}
              >
                {f.tab}
              </button>
            ))}
          </div>

          <div className="rounded-xl2 border border-hair bg-panel/50 p-6 md:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="grid items-center gap-8 md:grid-cols-2"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-ash">{feature.body}</p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {feature.ticks.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-sm text-ash">
                        <span className="mt-0.5 font-bold text-signal">✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Terminal title="rme" code={feature.code} />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
