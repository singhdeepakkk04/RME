import Reveal from "./Reveal";
import Terminal from "./Terminal";

const SETUP_CODE = `$ pip install rme-graph
$ rme init && rme index
  Structural AST extraction... 703 nodes, 12 edge types
  Communities: 123 - god nodes: query_project, _request

$ rme install --platform all
  [ok] CLAUDE.md + AGENTS.md instruction block
  [ok] .mcp.json - rme server registered
  [ok] PostToolUse hook - graph auto-refreshes on edit`;

export default function Integrate() {
  return (
    <section id="integrations" className="dotgrid border-y border-hair py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Drop-in</span>
          <h2 className="mt-3.5 font-display text-3xl font-bold tracking-tight md:text-4xl">
            One command wires it into your agent.
          </h2>
          <p className="mt-4 max-w-md text-ash">
            <code className="font-mono text-sm text-signal">rme install</code>{" "}
            writes the instruction block your agent reads, registers the MCP
            server, and installs the auto-refresh hook. It teaches the full
            workflow (search, impact, tests, edit, update), not just search.
          </p>
          <a href="#install" className="btn-signal mt-7 px-5 py-3">
            Install guide
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <Terminal title="setup" code={SETUP_CODE} />
        </Reveal>
      </div>
    </section>
  );
}
