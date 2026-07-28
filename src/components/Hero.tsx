"use client";

import { motion } from "framer-motion";
import { LockKeyhole, Headphones, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-32">

      {/* Background Glow */}
      <div className="
        absolute
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),transparent_40%)]
      "/>


      <div className="
        max-w-6xl
        mx-auto
        flex
        flex-col
        items-center
        text-center
      ">


        <motion.div
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.8}}
          className="
          mb-8
          flex
          items-center
          gap-3
          rounded-full
          border
          border-zinc-800
          bg-zinc-900/50
          px-5
          py-3
          text-sm
          text-zinc-300
          "
        >
          <Sparkles size={16}/>
          Premium Vocal Presets & Sound Design
        </motion.div>



        <motion.h1
          initial={{opacity:0, scale:.95}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1}}
          className="
          max-w-5xl
          text-5xl
          md:text-7xl
          font-bold
          tracking-tight
          "
        >

          Unlock The Sound
          <br />

          Behind The Hits.

        </motion.h1>



        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.5}}
          className="
          mt-8
          max-w-2xl
          text-lg
          text-zinc-400
          "
        >

          PricelessVault delivers premium vocal presets,
          studio templates, and professional sound chains
          built for artists, producers, and engineers.

        </motion.p>



        {/* Vault Core */}

        <motion.div
          animate={{
            y:[0,-15,0],
          }}
          transition={{
            duration:4,
            repeat:Infinity
          }}
          className="
          mt-16
          flex
          h-44
          w-44
          items-center
          justify-center
          rounded-full
          border
          border-zinc-700
          bg-zinc-950
          shadow-[0_0_80px_rgba(255,255,255,.15)]
          "
        >

          <LockKeyhole
            size={70}
            strokeWidth={1.5}
          />

        </motion.div>



        <div className="
        mt-12
        flex
        flex-col
        md:flex-row
        gap-5
        ">

          <button
          className="
          flex
          items-center
          gap-2
          rounded-full
          bg-white
          px-10
          py-4
          font-semibold
          text-black
          hover:scale-105
          transition
          "
          >

            <Headphones size={20}/>
            Enter The Vault

          </button>



          <button
          className="
          rounded-full
          border
          border-zinc-700
          px-10
          py-4
          hover:bg-zinc-900
          transition
          "
          >

            Explore Presets

          </button>


        </div>


      </div>

    </section>
  );
}