"use client";

import { motion } from "framer-motion";
import { Headphones, Play } from "lucide-react";

const presets = [
  {
    title: "Midnight R&B",
    description: "Dark silky vocals with a modern studio feel.",
    price: "$29.99",
  },
  {
    title: "Platinum Pop",
    description: "Radio-ready vocals with professional processing.",
    price: "$39.99",
  },
  {
    title: "Future Atmospheres",
    description: "Experimental vocal textures and cinematic effects.",
    price: "$24.99",
  },
];

export default function Vault() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-16">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Inside The Vault
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Premium Sounds.
            <br />
            Unlimited Creativity.
          </h2>

          <p className="mt-6 text-zinc-400 max-w-xl mx-auto">
            Exclusive vocal presets and production tools designed
            for artists who demand professional results.
          </p>

        </div>



        <div className="grid gap-8 md:grid-cols-3">

          {presets.map((preset, index) => (

            <motion.div
              key={preset.title}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              transition={{delay:index * .15}}
              viewport={{once:true}}
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

              <div className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white
              text-black
              mb-8
              ">
                <Headphones />
              </div>


              <h3 className="text-2xl font-bold">
                {preset.title}
              </h3>


              <p className="mt-4 text-zinc-400">
                {preset.description}
              </p>


              <div className="
              mt-8
              flex
              items-center
              justify-between
              ">

                <span className="text-xl font-semibold">
                  {preset.price}
                </span>


                <button className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-zinc-700
                px-5
                py-2
                text-sm
                hover:bg-white
                hover:text-black
                transition
                ">
                  <Play size={15}/>
                  Preview
                </button>

              </div>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}