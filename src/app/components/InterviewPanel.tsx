export default function InterviewPanel() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto mt-10 px-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* AI Interviewer */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-2xl font-bold">
              AI
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Mirror Interviewer
              </h2>

              <p className="text-green-400 text-sm">
                ● Live Analysis Active
              </p>
            </div>

          </div>

          <div className="rounded-2xl bg-black/40 border border-white/10 p-6">

            <p className="text-gray-400 text-sm mb-3">
              CURRENT QUESTION
            </p>

            <h3 className="text-2xl font-semibold leading-relaxed">
              Explain a situation where you optimized a slow application and improved performance.
            </h3>

          </div>

          <div className="mt-6 flex gap-3">

            <div className="px-4 py-2 rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
              Confidence Tracking
            </div>

            <div className="px-4 py-2 rounded-xl bg-purple-400/10 text-purple-300 border border-purple-400/20">
              Adaptive AI
            </div>

          </div>

        </div>

        {/* Candidate Response */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

          <h2 className="text-2xl font-bold mb-6">
            Candidate Response
          </h2>

          <textarea
            placeholder="Start answering here..."
            className="w-full h-52 rounded-2xl bg-black/40 border border-white/10 p-5 text-white outline-none resize-none focus:border-cyan-400 transition"
          />

          <div className="mt-6 flex justify-between items-center">

            <div className="flex gap-3">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <p className="text-gray-400">
                AI evaluating communication patterns...
              </p>

            </div>

            <button className="bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 rounded-xl font-semibold text-black hover:scale-105 transition">
              Submit
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}