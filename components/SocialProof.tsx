const INTEGRATIONS = ["Claude", "ChatGPT", "Gemini", "Cursor", "Windsurf"];

const STATS = [
  { value: "200K+", label: "Reddit views" },
  { value: "97%", label: "Upvote ratio" },
  { value: "500", label: "Early adopter spots" },
  { value: "Open Source", label: "Free forever tier" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-[#21262d] py-16 md:py-20">
      <div className="reveal max-w-4xl mx-auto px-6 text-center">
        {/* Integrations */}
        <p className="text-text-secondary text-sm mb-6">
          Trusted by developers building with
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {INTEGRATIONS.map((name) => (
            <span
              key={name}
              className="font-mono text-sm text-text-primary border border-[#21262d] rounded-full px-4 py-2 transition-colors hover:border-[#3d444d]"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-display font-bold text-text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
