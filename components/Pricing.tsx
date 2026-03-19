type Tier = {
  name: string
  price: string
  period?: string
  originalPrice?: string
  subtitle: string
  highlight: boolean
  badge?: string
  features: string[]
  cta: {
    label: string
    href: string
    style: "primary" | "secondary"
  }
  mobileFirst?: boolean
}

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    subtitle: "Try it. No credit card.",
    highlight: false,
    features: [
      "Managed hosting",
      "100 docs",
      "1K searches/mo",
      "1 AI connector",
      "FTS5",
      "Self-learning",
      "Community support",
    ],
    cta: {
      label: "Start Free",
      href: "/#early-access",
      style: "primary",
    },
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    originalPrice: "$25",
    subtitle: "Locked in forever. 500 spots.",
    highlight: true,
    badge: "Early Adopter — 52% off",
    mobileFirst: true,
    features: [
      "Everything in Free",
      "Unlimited docs",
      "Unlimited searches",
      "All AI connectors",
      "FTS5+Semantic",
      "YouTube/GitHub/Twitter ingestion",
      "API access",
      "Email support",
    ],
    cta: {
      label: "Get Pro",
      href: "/#early-access",
      style: "primary",
    },
  },
  {
    name: "Team",
    price: "$50",
    period: "/mo",
    subtitle: "Shared memory for your team.",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 5 members",
      "Shared KB",
      "Role-based access",
      "Team analytics",
      "Priority support",
    ],
    cta: {
      label: "Get Team",
      href: "/#early-access",
      style: "secondary",
    },
  },
  {
    name: "Self-Hosted",
    price: "Free",
    subtitle: "Full features. Your infrastructure.",
    highlight: false,
    features: [
      "Unlimited everything",
      "All AI connectors",
      "FTS5+Semantic",
      "Self-learning",
      "Full API",
      "Community support",
    ],
    cta: {
      label: "View on GitHub",
      href: "https://github.com/willynikes2/knowledge-base-server",
      style: "secondary",
    },
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-16 lg:px-24 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-12">
        Start free. Scale when you need to.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`bg-bg-elevated border border-border-subtle rounded-xl p-6 flex flex-col${
              tier.mobileFirst ? " order-first lg:order-none" : ""
            }${tier.highlight ? " border-accent/30 ring-1 ring-accent/20" : ""}`}
          >
            {tier.badge && (
              <span className="bg-accent/10 text-accent-pale text-xs px-2.5 py-0.5 rounded-full inline-block mb-3">
                {tier.badge}
              </span>
            )}

            <h3 className="font-semibold text-text-primary mb-1">{tier.name}</h3>
            <p className="text-text-muted text-xs mb-4">{tier.subtitle}</p>

            <div className="mb-6">
              {tier.originalPrice && (
                <span className="line-through text-text-muted text-sm mr-2">{tier.originalPrice}/mo</span>
              )}
              <span className="text-4xl font-extrabold text-text-primary">{tier.price}</span>
              {tier.period && <span className="text-text-muted text-sm">{tier.period}</span>}
            </div>

            <ul className="space-y-2.5 flex-1 mb-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span className="text-sm text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            {tier.cta.style === "primary" ? (
              <a
                href={tier.cta.href}
                className="bg-white text-black font-semibold text-sm w-full py-2.5 rounded-md text-center block hover:opacity-90 transition-opacity"
              >
                {tier.cta.label}
              </a>
            ) : (
              <a
                href={tier.cta.href}
                className="border border-border-hover text-text-tertiary font-semibold text-sm w-full py-2.5 rounded-md text-center block hover:border-text-muted transition-colors"
                target={tier.cta.href.startsWith("http") ? "_blank" : undefined}
                rel={tier.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {tier.cta.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
