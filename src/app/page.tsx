export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wider">
          PricelessVault
        </h1>

        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#">Features</a>
          <a href="#">Security</a>
          <a href="#">Pricing</a>
          <button className="rounded-full bg-white px-5 py-2 text-black font-medium">
            Enter Vault
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-400">
          The Future Of Digital Security
        </p>

        <h2 className="max-w-4xl text-5xl md:text-7xl font-bold leading-tight">
          Protect What Matters.
          <br />
          Preserve Your Future.
        </h2>

        <p className="mt-8 max-w-xl text-lg text-zinc-400">
          PricelessVault is a secure digital ecosystem designed to protect,
          organize, and manage your most valuable assets.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-white px-8 py-4 text-black font-semibold hover:bg-zinc-200">
            Get Started
          </button>

          <button className="rounded-full border border-zinc-700 px-8 py-4 hover:bg-zinc-900">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-8 pb-24">
        <Feature
          title="Secure Storage"
          text="Enterprise-grade protection for your digital assets."
        />

        <Feature
          title="Private Access"
          text="Your information stays controlled by you."
        />

        <Feature
          title="Future Ready"
          text="Built with modern technology for tomorrow."
        />
      </section>
    </main>
  );
}

function Feature({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-zinc-400">
        {text}
      </p>
    </div>
  );
}