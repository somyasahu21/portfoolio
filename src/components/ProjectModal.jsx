export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  /* 🔊 NODY PROJECT EXPLAIN HANDLER */
  const handleAskNody = () => {
    if (!project) return;

    window.dispatchEvent(
      new CustomEvent("nody-explain-project", {
        detail: project,
      })
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
                 flex items-center justify-center px-4"
    >
      {/* MODAL CONTAINER */}
      <div
        className="relative w-full max-w-4xl
                   bg-[#0b0f13]
                   rounded-3xl
                   border border-white/10
                   shadow-[0_0_60px_rgba(34,211,238,0.15)]
                   overflow-hidden"
      >
        {/* ================= TOP SYSTEM BAR ================= */}
        <div
          className="flex items-center justify-between px-6 py-4
                     border-b border-white/10 bg-white/5"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs tracking-widest text-gray-400">
              PROJECT INSPECTION MODE
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
            aria-label="Close project modal"
          >
            ✕
          </button>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-8 md:p-10 grid gap-10">

          {/* ================= IMAGE PREVIEW ================= */}
          {project.image && (
            <div
              className="relative rounded-2xl overflow-hidden
                         border border-white/10
                         shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[300px] object-cover
                           hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t
                           from-black/40 to-transparent"
              ></div>
            </div>
          )}

          {/* TITLE */}
          <h3
            className="text-2xl md:text-3xl font-bold
                       bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                       bg-clip-text text-transparent"
          >
            {project.title}
          </h3>

          {/* SYSTEM OVERVIEW */}
          {project.fullDesc && (
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-cyan-400">
                System Overview
              </p>
              <p className="text-gray-300 leading-relaxed">
                {project.fullDesc}
              </p>
            </div>
          )}

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* TECH STACK */}
            {project.tech && (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
                  Technology Stack
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.tech}
                </p>
              </div>
            )}

            {/* IMPACT */}
            {project.impact && (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
                  Real-World Impact
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.impact}
                </p>
              </div>
            )}
          </div>

          {/* ================= ACTIONS ================= */}
          <div className="flex flex-wrap gap-4 pt-4">

            {/* LIVE DEMO */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full
                           bg-cyan-400 text-black font-semibold
                           hover:scale-105
                           hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
                           transition"
              >
                🚀 Live Demo
              </a>
            )}

            {/* GITHUB */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full
                           border border-cyan-400 text-cyan-400 font-semibold
                           hover:bg-cyan-400 hover:text-black
                           transition"
              >
                🧠 GitHub
              </a>
            )}

            {/* IMAGE LINK */}
            {project.image && (
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full
                           border border-cyan-400 text-cyan-400 font-semibold
                           hover:bg-cyan-400 hover:text-black
                           transition"
              >
                🖼 View Image
              </a>
            )}

            {/* 🎤 ASK NODY (CONNECTED) */}
            <button
              onClick={handleAskNody}
              className="px-7 py-3 rounded-full
                         border border-white/15 text-gray-300
                         hover:border-cyan-400/40 hover:text-cyan-400
                         transition"
            >
              🎤 Ask NODY about this
            </button>
          </div>
        </div>

        {/* ================= CORNER GLOW ================= */}
        <div
          className="absolute -bottom-32 -right-32 w-64 h-64
                     bg-cyan-400/20 blur-[120px]"
        ></div>
      </div>
    </div>
  );
}
