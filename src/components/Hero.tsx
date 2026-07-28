export default function Hero() {
  return (
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
        <button className="rounded-full bg-white px-8 py-4 text-black font-semibold">
          Get Started
        </button>

        <button className="rounded-full border border-zinc-700 px-8 py-4">
          Learn More
        </button>
      </div>

    </section>
  );
}