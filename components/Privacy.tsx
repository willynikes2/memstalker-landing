export default function Privacy() {
  const commitments = [
    "We can't read your data. Period. Encrypted at rest and in transit.",
    "Self-host if you want zero trust. Your server, your rules.",
    "When you leave, we destroy your data. You get a download window first.",
    "We don't train on your data. We don't sell it. No third-party access.",
  ]

  return (
    <section className="px-6 md:px-16 lg:px-24 py-20">
      <div className="flex items-center gap-3 mb-10">
        <svg className="w-6 h-6 text-accent-pale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary">
          Your data. Not ours.
        </h2>
      </div>
      <div className="space-y-5 max-w-xl">
        {commitments.map((text, i) => (
          <p key={i} className="text-base text-text-secondary leading-relaxed">{text}</p>
        ))}
      </div>
    </section>
  )
}
