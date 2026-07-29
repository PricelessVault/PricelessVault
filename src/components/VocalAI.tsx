export default function VocalAI() {
  return (
    <section className="px-8 py-32 max-w-7xl mx-auto">

      <div className="
        rounded-3xl
        border border-zinc-800
        bg-gradient-to-b
        from-zinc-900
        to-black
        p-12
      ">

        <p className="
          uppercase
          tracking-[0.3em]
          text-sm
          text-zinc-500
          mb-6
        ">
          Powered By Intelligence
        </p>


        <h2 className="
          text-5xl
          font-bold
          max-w-3xl
        ">
          Your Personal AI Vocal Engineer.
        </h2>


        <p className="
          mt-6
          text-lg
          text-zinc-400
          max-w-2xl
        ">
          Analyze vocals, discover professional vocal chains,
          and create studio-ready sounds faster than ever.
        </p>


        <div className="
          grid
          md:grid-cols-3
          gap-6
          mt-12
        ">


          <div className="
            rounded-2xl
            bg-black
            border
            border-zinc-800
            p-6
          ">
            <h3 className="text-xl font-semibold">
              Vocal Analysis
            </h3>

            <p className="mt-3 text-zinc-400">
              Detect tone, pitch, dynamics, and vocal personality.
            </p>
          </div>



          <div className="
            rounded-2xl
            bg-black
            border
            border-zinc-800
            p-6
          ">
            <h3 className="text-xl font-semibold">
              Smart Processing
            </h3>

            <p className="mt-3 text-zinc-400">
              Get intelligent EQ, compression,
              effects, and mixing recommendations.
            </p>
          </div>



          <div className="
            rounded-2xl
            bg-black
            border
            border-zinc-800
            p-6
          ">
            <h3 className="text-xl font-semibold">
              Signature Chains
            </h3>

            <p className="mt-3 text-zinc-400">
              Create your own recognizable sound
              with premium vocal templates.
            </p>
          </div>


        </div>

      </div>

    </section>
  );
}