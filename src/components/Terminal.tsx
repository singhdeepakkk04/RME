interface TerminalProps {
  title?: string;
  code: string;
  className?: string;
}

/**
 * Syntax-lights a code block with a tiny, intentional tokenizer:
 *  - $ prompt, the command after it, "quoted strings", [tags], (notes),
 *    --flags, and # comments.
 * Deliberately lightweight, enough to read like a real terminal, no deps.
 */
function highlight(line: string): JSX.Element {
  // Full-line comment / dim note
  if (/^\s*#/.test(line)) {
    return <span className="text-faint">{line}</span>;
  }

  // Prompt lines: "$ rme query ..."
  const promptMatch = line.match(/^(\s*)\$\s(\S+)(\s.*)?$/);
  if (promptMatch) {
    const [, indent, cmd, rest = ""] = promptMatch;
    return (
      <>
        {indent}
        <span className="text-signal">$</span>{" "}
        <span className="text-cyan font-semibold">{cmd}</span>
        {colorRest(rest)}
      </>
    );
  }

  return <>{colorRest(line)}</>;
}

function colorRest(rest: string): (JSX.Element | string)[] {
  // Split on quoted strings, [tags], (notes), --flags, trailing # comments.
  const parts = rest.split(/("[^"]*"|\[[^\]]*\]|\([^)]*\)|--[\w-]+|#.*$)/g);
  return parts.map((p, i) => {
    if (!p) return "";
    if (p.startsWith('"')) return <span key={i} className="text-amber-700">{p}</span>;
    if (p.startsWith("[")) return <span key={i} className="text-teal-700">{p}</span>;
    if (p.startsWith("(")) return <span key={i} className="text-signal">{p}</span>;
    if (p.startsWith("--")) return <span key={i} className="text-violet-700">{p}</span>;
    if (p.startsWith("#")) return <span key={i} className="text-faint">{p}</span>;
    return <span key={i}>{p}</span>;
  });
}

export default function Terminal({ title = "~/your-repo", code, className }: TerminalProps) {
  const lines = code.split("\n");
  return (
    <div className={`surface-code overflow-hidden ${className ?? ""}`}>
      <div className="flex items-center gap-2 border-b border-hair bg-black/[0.025] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-faint">{title}</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.7] text-[#2b2a27]">
        <code>
          {lines.map((line, i) => (
            <div key={i}>{line ? highlight(line) : " "}</div>
          ))}
        </code>
      </pre>
    </div>
  );
}
