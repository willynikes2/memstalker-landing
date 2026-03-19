export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border-subtle">
      <div className="flex flex-col items-center gap-4 py-8 px-6">
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/willynikes2/knowledge-base-server"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm hover:text-text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/willynikes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm hover:text-text-secondary transition-colors"
          >
            Twitter
          </a>
          <a
            href="/docs"
            className="text-text-muted text-sm hover:text-text-secondary transition-colors"
          >
            Docs
          </a>
          <a
            href="/privacy"
            className="text-text-muted text-sm hover:text-text-secondary transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-text-muted text-sm hover:text-text-secondary transition-colors"
          >
            Terms
          </a>
        </div>
        <span className="text-text-muted text-xs">Built by Shawn Daniel</span>
      </div>
    </footer>
  );
}
