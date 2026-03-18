interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

export default function Terminal({ title = "terminal", children }: TerminalProps) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="flex items-center gap-1.5">
          <div className="terminal-dot" style={{ backgroundColor: "#d1d5db" }} />
          <div className="terminal-dot" style={{ backgroundColor: "#d1d5db" }} />
          <div className="terminal-dot" style={{ backgroundColor: "#d1d5db" }} />
        </div>
        <span className="font-mono text-xs text-text-tertiary absolute left-1/2 -translate-x-1/2">
          {title}
        </span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
