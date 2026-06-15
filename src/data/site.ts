/** Single source of truth for site content. Edit copy here. */

export const REPO_URL = "https://github.com/singhdeepakkk04/RME_Graph";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Benchmarks", href: "#benchmark" },
  { label: "Integrations", href: "#integrations" },
];

export const PROOF = [
  "Claude Code",
  "Cursor",
  "Windsurf",
  "Gemini CLI",
  "Codex",
  "MCP",
  "Neo4j",
  "Obsidian",
];

export const STATS = [
  { target: 33.2, suffix: "×", label: "fewer tokens per question vs grep-and-read" },
  { target: 12, suffix: "", label: "semantic edge types, incl. DB read/write flow" },
  { target: 0, suffix: " tok", label: "to build the structural graph (tree-sitter, no API)" },
  { target: 1.8, suffix: "%", label: "isolated nodes, so the graph stays tight and coherent" },
];

export interface Feature {
  id: string;
  tab: string;
  title: string;
  body: string;
  ticks: string[];
  code: string;
}

export const FEATURES: Feature[] = [
  {
    id: "query",
    tab: "Query",
    title: "Natural-language search that returns pointers",
    body: "Stopword-aware, identifier-split, BM25-ranked and boosted by architectural centrality. Multi-word questions work, and the answer is a ranked list of file:line with one-line purposes, so the agent reads only what matters.",
    ticks: [
      "camelCase / snake_case fragments are searchable",
      "--expand shows the 1-hop wiring of top hits",
      "god nodes surface above incidental mentions",
    ],
    code: `$ rme query "jwt validation" --expand

  core/security.py:34-71   [fn] verify_token (crit: high)
      Validates a JWT and loads the user
  api/deps.py:18-42        [fn] get_current_user

  verify_token wiring:
    --[CALLS]--> decode_jwt
    --[db_read]--> users
    <--[CALLS]-- 6 endpoints`,
  },
  {
    id: "impact",
    tab: "Impact",
    title: "Blast radius before you touch a line",
    body: "BFS traversal plus historical git co-change scoring tells the agent every node a change ripples into, ranked and scored by confidence. No more 'I didn't know that was connected.'",
    ticks: [
      "structural + historical signal combined",
      "scores and confidence per impacted node",
      "exposed over CLI and MCP",
    ],
    code: `$ rme impact core/security.py

  score  conf       file (symbol)
  -----  --------   ------------------
  0.92   EXTRACTED  api/deps.py (get_current_user)
  0.81   EXTRACTED  api/auth.py (login)
  0.64   INFERRED   middleware.py (auth_guard)`,
  },
  {
    id: "tests",
    tab: "Tests & co-change",
    title: "Know what to run, and what moves together",
    body: "Map each source file to the tests that cover it, and surface the files that historically change alongside it, so an edit comes with its checklist.",
    ticks: [
      "precise test detection (no contest.py traps)",
      "git-mined co-change coupling, 0 to 1 scored",
      "unique to RME",
    ],
    code: `$ rme tests core/security.py
  tests/test_security.py
  tests/integration/test_auth.py

$ rme cochange core/security.py
  0.73  api/deps.py
  0.61  api/auth.py`,
  },
  {
    id: "pack",
    tab: "Context pack",
    title: "One-shot context, on a token budget you set",
    body: "Hand pack a question and a budget; it returns the most relevant source, ranked by relevance and centrality, concatenated up to the limit. One call instead of query-then-five-reads.",
    ticks: [
      "budget-capped so it never floods context",
      "god nodes get the budget first",
      "available as the pack_context MCP tool",
    ],
    code: `$ rme pack "how is the JWT validated" --budget 3000

Context pack (~2,480 tokens, 4 snippets):

=== core/security.py:34-71 [fn] verify_token ===
def verify_token(token: str) -> User:
    ...`,
  },
  {
    id: "god",
    tab: "God nodes",
    title: "The load-bearing code, ranked correctly",
    body: "God nodes by betweenness centrality: the symbols whose change has the widest blast radius. It finds the real orchestrators, not whatever utility happens to be called the most.",
    ticks: [
      "true centrality, not raw edge count",
      "Louvain / Leiden / Infomap community detection",
      "surprising cross-community seams flagged",
    ],
    code: `$ rme god-nodes

  betweenness  deg  node
  -----------  ---  --------------
  0.0003       24   query_project   [fn]
  0.0002       19   _request        [fn]
  0.0002       11   query_rag       [fn]`,
  },
];

export const PIPELINE = [
  {
    num: "01",
    title: "Extract",
    optional: false,
    body: "Tree-sitter parses every file into nodes and 12 edge types: calls, imports, inheritance, decorators, and DB read/write flow. Zero tokens, deterministic, identical every run.",
    tag: "tree-sitter · SQLite · free",
  },
  {
    num: "02",
    title: "Enrich",
    optional: true,
    body: "Point an LLM at the architectural core (god nodes first) for one-line purposes and domains. Batched, centrality-ranked, cached by content hash. Any backend, or your Claude Code plan via claude-cli.",
    tag: "Groq · Claude · Gemini · Ollama · OpenAI",
  },
  {
    num: "03",
    title: "Query",
    optional: false,
    body: "Your agent asks over MCP or CLI and gets pointers, impact, tests, and budgeted context. A PostToolUse hook re-indexes after every edit, so the graph never goes stale mid-session.",
    tag: "MCP · CLI · auto-refresh",
  },
];

export const BENCHMARK = [
  { q: "what is the main entry point", w: 100, val: "33.2×" },
  { q: "how does authentication … work", w: 96, val: "78.7×" },
  { q: "database connection and queries", w: 62, val: "30.1×" },
  { q: "where are errors handled", w: 55, val: "34.9×" },
  { q: "configuration and settings", w: 48, val: "27.6×" },
];

export const WHY = [
  {
    icon: "bolt",
    title: "SQLite, not a JSON blob",
    body: "Indexed lookups and real incremental updates. Query cost doesn't grow with graph size.",
  },
  {
    icon: "target",
    title: "Collision-free identity",
    body: "lang:path:kind:name node IDs, so no duplicate utils nodes and no mis-wired edges.",
  },
  {
    icon: "db",
    title: "Data-flow edges",
    body: "Knows which functions read and write which tables, for blast-radius on schema changes.",
  },
  {
    icon: "shield",
    title: "Trust boundary by design",
    body: "Model output sanitized before it reaches your agent; foreign-graph detection built in.",
  },
  {
    icon: "refresh",
    title: "Never goes stale",
    body: "Free AST re-index after every edit, a freshness loop that costs nothing to run.",
  },
  {
    icon: "export",
    title: "Exports everywhere",
    body: "GraphML, Mermaid, Neo4j, Obsidian, SVG, Canvas. Take the graph wherever you think.",
  },
] as const;

/** Documentation surfaced in the footer. Labels double as the real commands. */
export const FOOTER_COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Get started",
    links: [
      { label: "Quickstart", href: "#install" },
      { label: "pip install rme-graph", href: "#install" },
      { label: "rme init", href: "#how" },
      { label: "rme index", href: "#how" },
      { label: "rme install (agent setup)", href: "#integrations" },
    ],
  },
  {
    title: "CLI reference",
    links: [
      { label: "rme query", href: "#features" },
      { label: "rme impact", href: "#features" },
      { label: "rme tests", href: "#features" },
      { label: "rme cochange", href: "#features" },
      { label: "rme god-nodes", href: "#features" },
      { label: "rme enrich", href: "#how" },
      { label: "rme export", href: "#" },
    ],
  },
  {
    title: "MCP tools",
    links: [
      { label: "query_graph", href: "#features" },
      { label: "pack_context", href: "#features" },
      { label: "get_impact", href: "#features" },
      { label: "get_tests", href: "#features" },
      { label: "get_neighbors", href: "#" },
      { label: "god_nodes", href: "#features" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "Claude Code", href: "#integrations" },
      { label: "Cursor", href: "#integrations" },
      { label: "Windsurf", href: "#integrations" },
      { label: "Gemini CLI", href: "#integrations" },
      { label: "Codex", href: "#integrations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: REPO_URL },
      { label: "Benchmarks", href: "#benchmark" },
      { label: "Security model", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "License (MIT)", href: "#" },
    ],
  },
];
