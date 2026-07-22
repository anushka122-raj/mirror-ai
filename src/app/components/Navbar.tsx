import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6 bg-black/30 backdrop-blur-md border-b border-white/10">

      {/* Logo */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Mirror AI
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-8 text-gray-300 font-medium">

        <Link href="/">Home</Link>

        <Link href="/dashboard">Dashboard</Link>

        <Link href="/resume">Resume</Link>

        <Link href="/interview">Interview</Link>

        <Link href="/roadmap">Roadmap</Link>

      </div>

      {/* Login Button */}
      <button className="rounded-xl bg-cyan-400 px-5 py-2 text-black font-semibold hover:bg-cyan-300 transition">
        Login
      </button>

    </nav>
  );
}