const rows = [
  { feature: 'Cross-model memory', memstalker: '✓', mem0: '✗', zep: '✗', letta: '✗' },
  { feature: 'Free hosted tier', memstalker: '✓', mem0: '✗', zep: '✓', letta: '✗' },
  { feature: 'Self-hosted option', memstalker: '✓', mem0: 'Enterprise', zep: '✗', letta: '✗' },
  { feature: 'Setup time', memstalker: '< 5 min', mem0: 'API integration', zep: 'API integration', letta: 'Platform onboard' },
  { feature: 'Self-learning', memstalker: '✓', mem0: '✗', zep: '✗', letta: '✓' },
  { feature: 'Data ownership', memstalker: 'Full', mem0: 'Cloud', zep: 'Cloud', letta: 'Cloud' },
  { feature: 'Starting price', memstalker: 'Free', mem0: '$249/mo', zep: 'Metered', letta: '$20/mo' },
]

function cellClass(value: string, isMemstalker = false): string {
  if (value === '✓') return 'text-green-400'
  if (value === '✗') return 'text-text-muted'
  return isMemstalker ? 'text-text-primary' : 'text-text-secondary'
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="px-6 md:px-16 lg:px-24 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-12">
        How Memstalker compares.
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse">
          <thead>
            <tr className="border-b border-border-subtle">
              <th className="text-left text-text-primary font-medium text-sm py-3 pr-4">Feature</th>
              <th className="text-left text-accent-pale font-semibold text-sm py-3 px-4 bg-accent/5">Memstalker</th>
              <th className="text-left text-text-secondary text-sm py-3 px-4">Mem0</th>
              <th className="text-left text-text-secondary text-sm py-3 px-4">Zep</th>
              <th className="text-left text-text-secondary text-sm py-3 px-4">Letta</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={`border-b border-border-subtle${i % 2 !== 0 ? '' : ' bg-bg-surface/50'}`}
              >
                <td className="text-text-primary font-medium text-sm py-3 pr-4">{row.feature}</td>
                <td className={`text-sm py-3 px-4 bg-accent/5 ${cellClass(row.memstalker, true)}`}>
                  {row.memstalker}
                </td>
                <td className={`text-sm py-3 px-4 ${cellClass(row.mem0)}`}>{row.mem0}</td>
                <td className={`text-sm py-3 px-4 ${cellClass(row.zep)}`}>{row.zep}</td>
                <td className={`text-sm py-3 px-4 ${cellClass(row.letta)}`}>{row.letta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
