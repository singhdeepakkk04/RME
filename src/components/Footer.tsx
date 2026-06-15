import { FOOTER_COLS, REPO_URL } from "../data/site";
import { LogoMark, Wordmark } from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-hair bg-panel2/60 py-16">
      <div className="container-site">
        <div className="grid gap-12 pb-12 lg:grid-cols-[1.3fr_3fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 text-chalk">
              <LogoMark size={26} />
              <Wordmark />
            </a>
            <p className="mt-4 max-w-xs text-sm text-ash">
              Repository Memory Engine: a queryable knowledge graph for AI coding
              agents. Local, deterministic, free to build.
            </p>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-5 px-4 py-2 text-sm"
            >
              View on GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-3.5 text-[11px] uppercase tracking-[0.12em] text-faint">
                  {col.title}
                </h4>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    {...(l.href === REPO_URL
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block py-1 font-mono text-[13px] text-ash transition-colors hover:text-signal"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hair pt-6 text-sm text-faint">
          <span>
            © {new Date().getFullYear()} RME. Built for agents that respect your
            context window.
          </span>
          <span className="font-mono">Made with tree-sitter and SQLite</span>
        </div>
      </div>
    </footer>
  );
}
