const tiers = [
  {
    name: "Free",
    price: "Self-hosted",
    priceDetail: null,
    highlight: false,
    badge: null,
    features: [
      "Unlimited documents",
      "Full-text search",
      "All AI connectors",
      "Self-learning",
      "Community support",
    ],
    cta: {
      label: "View on GitHub \u2192",
      href: "https://github.com/memstalker",
      style: "outline" as const,
    },
  },
  {
    name: "Starter",
    price: "$12",
    priceDetail: "/mo",
    highlight: false,
    badge: null,
    features: [
      "Hosted for you",
      "500 documents",
      "1 AI connector",
      "Basic search",
      "Email support",
    ],
    cta: {
      label: "Get Early Access",
      href: "#cta",
      style: "outline" as const,
    },
  },
  {
    name: "Pro",
    price: "$25",
    priceDetail: "/mo",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Unlimited documents",
      "ALL AI connectors",
      "Smart search (FTS5 + semantic)",
      "YouTube, GitHub, Twitter ingestion",
      "Self-learning auto-updates",
      "API access",
      "Priority support",
    ],
    cta: {
      label: "Get Early Access",
      href: "#cta",
      style: "glow" as const,
    },
  },
  {
    name: "Team",
    price: "$50",
    priceDetail: "/mo",
    highlight: false,
    badge: null,
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Shared knowledge base",
      "Role-based access",
      "Team analytics",
      "Priority support",
    ],
    cta: {
      label: "Get Early Access",
      href: "#cta",
      style: "outline" as const,
    },
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="text-center">
        <span className="text-accent font-mono text-xs uppercase tracking-[0.2em]">
          pricing
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
          Start free. Scale when you&apos;re ready.
        </h2>
        <p className="text-text-secondary mt-4">No credit card required.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-16">
        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            className={`relative p-8 reveal reveal-delay-${i + 1} ${
              tier.highlight
                ? "pricing-highlight bg-bg-elevated"
                : "glass-card"
            }`}
          >
            {tier.badge && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-bg text-xs font-bold px-3 py-1 rounded-full">
                {tier.badge}
              </span>
            )}

            <h3 className="font-display font-semibold text-lg">{tier.name}</h3>

            <div className="mt-2">
              {tier.priceDetail ? (
                <p>
                  <span
                    className={`text-3xl font-display font-bold ${
                      tier.highlight ? "text-accent" : ""
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {tier.priceDetail}
                  </span>
                </p>
              ) : (
                <p className="text-2xl font-display font-bold">{tier.price}</p>
              )}
            </div>

            <div className="border-t border-border-subtle my-6" />

            <ul className="space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-text-secondary flex items-start gap-2"
                >
                  <span className="text-accent">&#10003;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              {tier.cta.style === "glow" ? (
                <a href={tier.cta.href} className="btn-glow w-full block text-center">
                  {tier.cta.label}
                </a>
              ) : (
                <a
                  href={tier.cta.href}
                  className="block w-full text-center border border-border-subtle hover:border-border-hover text-text-primary text-sm font-medium py-2.5 px-4 rounded-lg transition-colors"
                  target={tier.cta.label.includes("GitHub") ? "_blank" : undefined}
                  rel={tier.cta.label.includes("GitHub") ? "noopener noreferrer" : undefined}
                >
                  {tier.cta.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
