"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y:-20, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      className="
      flex items-center justify-between
      px-8 py-6
      max-w-7xl mx-auto
      "
    >

      <h1 className="
      text-3xl
      font-bold
      tracking-widest
      bg-gradient-to-r
      from-white
      to-zinc-500
      bg-clip-text
      text-transparent
      ">
        PricelessVault
      </h1>


      <div className="
      flex gap-8
      items-center
      text-zinc-400
      ">

        <a className="hover:text-white transition">
          Features
        </a>

        <a className="hover:text-white transition">
          Security
        </a>

        <a className="hover:text-white transition">
          Pricing
        </a>


        <button
        className="
        rounded-full
        px-6 py-3
        bg-white
        text-black
        font-semibold
        hover:scale-105
        transition
        ">
          Enter Vault
        </button>

      </div>

    </motion.nav>
  );
}