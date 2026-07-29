export default function PresetShowcase() {
  const presets = [
    {
      name: "Platinum Vocal Chain",
      style: "Modern Pop",
      price: "$29",
      description:
        "A polished radio-ready vocal chain with EQ, compression, and effects.",
    },
    {
      name: "Dark R&B Atmosphere",
      style: "R&B / Soul",
      price: "$39",
      description:
        "Smooth textures, warm tones, and cinematic vocal depth.",
    },
    {
      name: "Studio Rap Blueprint",
      style: "Hip-Hop",
      price: "$49",
      description:
        "Professional rap vocal processing used for modern records.",
    },
  ];

  return (
    <section className="px-8 py-32 max-w-7xl mx-auto">

      <div className="text-center mb-16">

        <p className="
          uppercase
          tracking-[0.3em]
          text-sm
          text-zinc-500
        ">
          Premium Library
        </p>


        <h2 className="
          text-5xl
          font-bold
          mt-5
        ">
          Professional Vocal Presets
        </h2>


        <p className="
          mt-5
          text-zinc-400
          max-w-2xl
          mx-auto
        ">
          Industry-inspired vocal chains built for artists,
          engineers, and creators.
        </p>

      </div>



      <div className="
        grid
        md:grid-cols-3
        gap-8
      ">

        {presets.map((preset) => (

          <div
            key={preset.name}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950
              p-8
              hover:border-zinc-500
              transition
            "
          >

            <p className="
              text-sm
              text-zinc-500
              uppercase
              tracking-widest
            ">
              {preset.style}
            </p>


            <h3 className="
              text-2xl
              font-bold
              mt-4
            ">
              {preset.name}
            </h3>


            <p className="
              text-zinc-400
              mt-4
            ">
              {preset.description}
            </p>


            <div className="
              flex
              items-center
              justify-between
              mt-8
            ">

              <span className="
                text-3xl
                font-bold
              ">
                {preset.price}
              </span>


              <button className="
                rounded-full
                bg-white
                text-black
                px-6
                py-3
                font-semibold
                hover:scale-105
                transition
              ">
                View Preset
              </button>

            </div>


          </div>

        ))}

      </div>

    </section>
  );
}