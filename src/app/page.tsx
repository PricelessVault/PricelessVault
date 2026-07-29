import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VocalAI from "@/components/VocalAI";
import PresetShowcase from "@/components/PresetShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Features />

      <VocalAI />

      <PresetShowcase />

      <Pricing />

      <Footer />

    </main>
  );
}