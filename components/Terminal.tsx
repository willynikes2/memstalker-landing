interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

export default function Terminal({ title = "terminal", children }: TerminalProps) {
  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-lg overflow-hidden">
      <div className="flex items-center relative px-4 py-2 border-b border-border-subtle">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-text-muted/30" />
        </div>
        <span className="font-mono text-xs text-text-muted absolute left-1/2 -translate-x-1/2">
          {title}
        </span>
      </div>
      <div className="p-4 font-mono text-sm">{children}</div>
    </div>
  );
}
