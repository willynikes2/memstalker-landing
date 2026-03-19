import type { ReactNode } from "react";

export default function DocsSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border-subtle py-12 first:border-t-0 first:pt-0">
      <p className="text-xs uppercase tracking-[0.28em] text-text-muted mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
        {title}
      </h2>
      {description ? (
        <p className="text-text-secondary text-base leading-7 max-w-3xl mb-8">{description}</p>
      ) : null}
      {children}
    </section>
  );
}
