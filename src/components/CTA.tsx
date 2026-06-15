import { useState } from "react";
import { REPO_URL } from "../data/site";
import Reveal from "./Reveal";

const INSTALL = "pip install rme-graph && rme init && rme index";

export default function CTA() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = INSTALL;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* no-op */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="install" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-glow blur-[130px]" />
      <div className="container-site relative text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tightest md:text-6xl">
            Give your agent a memory.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ash">
            Local, deterministic, and free to build. Install in under a minute.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-9 flex max-w-xl items-center gap-3 rounded-xl border border-hair2 bg-panel2 py-2 pl-5 pr-2">
            <code className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left font-mono text-sm text-chalk">
              {INSTALL}
            </code>
            <button
              onClick={copy}
              className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                copied
                  ? "bg-signal text-white"
                  : "border border-hair2 bg-white text-chalk hover:bg-signal hover:text-white hover:border-transparent"
              }`}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-signal px-6 py-3.5 text-base"
            >
              Star on GitHub
            </a>
            <a href="#top" className="btn-ghost px-6 py-3.5 text-base">
              Read the docs
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
