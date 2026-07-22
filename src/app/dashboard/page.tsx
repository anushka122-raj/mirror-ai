import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">

      {/* Heading */}

      <h1 className="text-5xl font-bold">
        Welcome to Mirror AI 👋
      </h1>

      <p className="mt-3 text-gray-400">
        Your AI Placement Assistant
      </p>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-gray-400">ATS Score</h2>
          <p className="text-5xl font-bold text-cyan-300 mt-3">
            84%
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-gray-400">Interview Score</h2>
          <p className="text-5xl font-bold text-purple-300 mt-3">
            72%
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-gray-400">Roadmap</h2>
          <p className="text-5xl font-bold text-pink-300 mt-3">
            40%
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-gray-400">Target Company</h2>
          <p className="text-3xl font-bold text-yellow-300 mt-5">
            Google
          </p>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-5">

          <Link
            href="/resume"
            className="rounded-xl bg-cyan-400 text-black px-6 py-4 font-semibold hover:scale-105 transition"
          >
            Analyze Resume
          </Link>

          <Link
            href="/interview"
            className="rounded-xl bg-purple-400 text-black px-6 py-4 font-semibold hover:scale-105 transition"
          >
            Start Interview
          </Link>

          <Link
            href="/roadmap"
            className="rounded-xl bg-pink-400 text-black px-6 py-4 font-semibold hover:scale-105 transition"
          >
            Generate Roadmap
          </Link>

        </div>

      </div>

    </main>
  );
}