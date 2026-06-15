import { motion } from "framer-motion";
import GraphField from "./GraphField";
import Terminal from "./Terminal";
import Icon from "./Icon";

const HERO_CODE = `$ rme query "how does authentication and session handling work"

Results for 'how does authentication and session handling work':

  backend/app/db/session.py:1-27          [file]      session.py
  sdks/ez_ragify/_exceptions.py:26-27     [class]     AuthenticationError
  backend/app/core/rag/retrieval.py:356   [function]  query_project (god node)
  backend/app/db/session.py:25-27         [function]  get_db

$ # 561 tokens vs ~44,000 for grep-and-read -> 78.7x less`;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-10 md:pt-24">
      {/* graph centerpiece, bleeding behind the headline on the right */}
      <div className="pointer-events-none absolute right-[-12%] top-[-6%] hidden h-[680px] w-[680px] opacity-[0.9] lg:block">
        <GraphField className="h-full w-full" />
      </div>
      {/* single restrained accent wash */}
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-signal-glow blur-[120px]" />

      <div className="container-site relative">
        <motion.a
          href="#benchmark"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="chip mb-8 hover:border-signal/50 hover:text-chalk"
        >
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-signal shadow-[0_0_8px_rgba(47,133,90,0.6)]" />
          Up to 33× fewer tokens per question
          <Icon name="arrow" size={13} className="text-signal" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-tightest sm:text-6xl md:text-7xl"
        >
          Your codebase, as a
          <br />
          graph your agent
          <br />
          <span className="text-signal-grad">can actually query.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-ash"
        >
          RME, the Repository Memory Engine, turns your repo into a precise
          SQLite knowledge graph. Agents answer in{" "}
          <span className="text-chalk">file:line pointers</span>, not file dumps,
          so every question costs a fraction of the context. Deterministic,
          local, free to build.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-wrap gap-3.5"
        >
          <a href="#install" className="btn-signal px-6 py-3.5 text-base">
            Get started
            <Icon name="arrow" size={17} />
          </a>
          <a href="#how" className="btn-ghost px-6 py-3.5 text-base">
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-14 max-w-3xl"
        >
          <Terminal code={HERO_CODE} />
        </motion.div>
      </div>
    </section>
  );
}
