export default function DemoVideo() {
  return (
    <section id="demo" className="px-6 md:px-16 lg:px-24 py-20">
      <h2 className="text-2xl font-bold text-text-primary mb-2">
        See it in action.
      </h2>
      <p className="text-text-tertiary text-sm mb-8">2-minute demo</p>
      <div className="max-w-3xl rounded-xl overflow-hidden border border-border-subtle bg-bg-elevated">
        <video
          src="/demo.mp4"
          controls
          preload="none"
          playsInline
          className="w-full aspect-video"
        />
      </div>
    </section>
  )
}
