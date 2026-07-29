export default function VocalAI() {
  return (
    <section className="px-6 py-32 max-w-7xl mx-auto">

      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-10 md:p-16">

        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Artificial Intelligence
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          Your AI Vocal Studio
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Upload your vocals, analyze your tone, and discover professional
          preset chains designed for your voice.
        </p>


        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="rounded-2xl bg-zinc-900 p-6">
            <h3 className="font-semibold text-xl">
              Voice Analysis
            </h3>
            <p className="mt-3 text-zinc-400">
              AI detects your vocal style and recommends matching presets.
            </p>
          </div>


          <div className="rounded-2xl bg-zinc-900 p-6">
            <h3 className="font-semibold text-xl">
              Instant Chains
            </h3>
            <p className="mt-3 text-zinc-400">
              Apply professional studio processing instantly.
            </p>
          </div>


          <div className="rounded-2xl bg-zinc-900 p-6">
            <h3 className="font-semibold text-xl">
              Artist Workflow
            </h3>
            <p className="mt-3 text-zinc-400">
              Save, organize, and improve your sound.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}