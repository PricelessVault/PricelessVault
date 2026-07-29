const presets = [
  {
    name: "Midnight R&B",
    type: "Smooth Vocal",
    price: "$29"
  },
  {
    name: "Studio Rap Chain",
    type: "Professional Mix",
    price: "$39"
  },
  {
    name: "HyperPop Future",
    type: "Experimental AI",
    price: "$25"
  }
];


export default function PresetShowcase() {
  return (
    <section className="px-6 py-32 max-w-7xl mx-auto">

      <h2 className="text-4xl md:text-5xl font-bold">
        Premium Vocal Presets
      </h2>

      <p className="mt-4 text-zinc-400">
        Professional sound chains created for modern artists.
      </p>


      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {presets.map((preset)=>(
          <div
            key={preset.name}
            className="
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-950
            p-8
            hover:-translate-y-2
            transition
            "
          >

            <h3 className="text-2xl font-semibold">
              {preset.name}
            </h3>

            <p className="mt-3 text-zinc-400">
              {preset.type}
            </p>

            <button className="
            mt-8
            rounded-full
            bg-white
            px-6
            py-3
            text-black
            font-semibold
            ">
              Buy {preset.price}
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}