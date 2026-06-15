import { useEffect, useState } from "react";
import { NAV_LINKS, REPO_URL } from "../data/site";
import Icon from "./Icon";
import { LogoMark, Wordmark } from "./Logo";

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5 text-chalk">
      <LogoMark size={28} />
      <Wordmark />
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hair bg-ink-950/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center gap-8 px-6 py-3.5">
        <Brand />

        <nav className="ml-2 hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ash transition-colors hover:text-chalk"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 md:flex">
          <a href="#install" className="btn-ghost px-4 py-2 text-sm">
            Docs
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-signal px-4 py-2 text-sm"
          >
            <Icon name="github" size={16} />
            GitHub
          </a>
        </div>

        <button
          className="ml-auto flex flex-col gap-1.5 p-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-5 bg-chalk transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 bg-chalk transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 bg-chalk transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-b border-hair bg-ink-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ash hover:text-chalk"
              >
                {l.label}
              </a>
            ))}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-signal mt-1 px-4 py-2 text-sm"
            >
              <Icon name="github" size={16} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
