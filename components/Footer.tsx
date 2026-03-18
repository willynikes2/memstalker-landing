export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="py-12 px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <span className="font-display font-bold text-lg text-text-primary">Memstalker</span>
            <span className="text-text-secondary text-sm ml-4">
              Persistent memory for AI agents.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/memstalker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/memstalker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://reddit.com/r/memstalker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary text-sm transition-colors"
            >
              Reddit
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border-subtle pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-text-tertiary text-xs">
            Built by Shawn Daniel
          </span>
          <span className="text-text-tertiary text-xs">
            Powered by{" "}
            <a
              href="https://github.com/memstalker/knowledge-base-server"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors underline underline-offset-2"
            >
              knowledge-base-server
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
