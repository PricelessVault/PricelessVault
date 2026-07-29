export default function Features() {
  const features = [
    {
      title: "Studio Grade Vocal Chains",
      text: "Professional vocal presets designed for modern recording workflows."
    },
    {
      title: "Instant Preset Vault",
      text: "Access your premium vocal templates anytime, anywhere."
    },
    {
      title: "AI Vocal Intelligence",
      text: "Future-ready tools to analyze and enhance your sound."
    }
  ];

  return (
    <section className="px-8 py-24 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        Built For The Next Generation Of Artists
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-zinc-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}