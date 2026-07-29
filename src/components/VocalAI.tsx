export default function VocalAI() {
  return (
    <section className="px-8 py-32 max-w-7xl mx-auto">

      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-12">

        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-6">
          Powered By Intelligence
        </p>

        <h2 className="text-5xl font-bold max-w-3xl">
          Your Personal AI Vocal Engineer.
        </h2>

        <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
          Analyze vocals, discover the perfect chain, and create
          professional studio-ready sounds faster than ever.
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="rounded-2xl bg-black border border-zinc-800 p-6">
            <h3 className="font-semibold text-xl">
              Vocal Analysis
            </h3>
            <p className="text-zinc-400 mt-3">
              Detect tone, pitch, dynamics, and vocal character.
            </p>
          </div>


          <div className="rounded-2xl bg-black border border-zinc-800 p-6">
            <h3 className="font-semibold text-xl">
              Smart Processing
            </h3>
            <p className="text-zinc-400 mt-3">
              Generate EQ, compression, effects, and mixing suggestions.
            </p>
          </div>


          <div className="rounded-2xl bg-black border border-zinc-800 p-6">
            <h3 className="font-semibold text-xl">
              Custom Chains
            </h3>
            <p className="text-zinc-400 mt-3">
              Build your signature sound with premium templates.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}