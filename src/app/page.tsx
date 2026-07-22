import InterviewPanel from "./components/InterviewPanel";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050816] to-[#0a0f2c]" />

      {/* Glow Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[450px] h-[450px] bg-cyan-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-20 animate-pulse"></div>

      <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-pink-500 rounded-full blur-[140px] opacity-10"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_55%)]"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* AI Tag */}
        <div className="mb-6">
          <div className="px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl shadow-lg">
            <p className="text-cyan-300 tracking-[0.35em] uppercase text-xs font-semibold">
              AI Interview Intelligence
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight max-w-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent">
            MIRROR
          </span>

          <br />

          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-lg md:text-2xl text-gray-300 leading-relaxed">
          A next-generation adaptive interview simulator that analyzes
          communication, coding patterns, emotional confidence,
          problem-solving behavior, and real-time thinking ability.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="group relative overflow-hidden rounded-2xl bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105">

            <span className="relative z-10">
              Start Simulation
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 transition duration-300 group-hover:opacity-100"></div>

          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 font-medium text-white transition duration-300 hover:bg-white/10 hover:scale-105 shadow-xl">
            Explore Features
          </button>

        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <h2 className="text-4xl font-bold text-cyan-300">98%</h2>
            <p className="text-gray-400 mt-2">
              Behavioral Analysis Accuracy
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <h2 className="text-4xl font-bold text-purple-300">AI</h2>
            <p className="text-gray-400 mt-2">
              Adaptive Interview Engine
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <h2 className="text-4xl font-bold text-pink-300">24/7</h2>
            <p className="text-gray-400 mt-2">
              Real-Time Feedback System
            </p>
          </div>

        </div>

      </section>

      {/* Interview Panel */}
      <InterviewPanel />

    </main>
  );
}