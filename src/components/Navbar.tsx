export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold tracking-wider">
        PricelessVault
      </h1>

      <div className="flex gap-6 items-center text-sm text-zinc-300">
        <a href="#">Features</a>
        <a href="#">Security</a>
        <a href="#">Pricing</a>

        <button className="rounded-full bg-white px-5 py-2 text-black font-medium">
          Enter Vault
        </button>
      </div>
    </nav>
  );
}