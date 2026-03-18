interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

export default function Terminal({ title = "terminal", children }: TerminalProps) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="terminal-dot" style={{ backgroundColor: "#ff5f57" }} />
          <div className="terminal-dot" style={{ backgroundColor: "#febc2e" }} />
          <div className="terminal-dot" style={{ backgroundColor: "#28c840" }} />
        </div>
        <span className="font-mono text-xs text-text-secondary absolute left-1/2 -translate-x-1/2">
          {title}
        </span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
