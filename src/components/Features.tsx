export default function Features() {
  const features = [
    {
      title: "AI Vocal Presets",
      description:
        "Create professional vocal chains with AI-powered presets designed for modern artists.",
    },
    {
      title: "Studio Quality",
      description:
        "Premium processing workflows inspired by industry recording environments.",
    },
    {
      title: "Instant Access",
      description:
        "Save, organize, and access your favorite vocal settings anywhere.",
    },
  ];

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Powerful Tools
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold">
          Built For The Future Of Sound
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
          >
            <h3 className="text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-4 text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}