import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {

  /* 🔒 LOCK / UNLOCK BACKGROUND SCROLL */
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  /* 🔊 NODY PROJECT EXPLAIN HANDLER */
  const handleAskNody = () => {
    if (!project) return;
    window.dispatchEvent(
      new CustomEvent("nody-explain-project", { detail: project })
    );
  };

  return (
    <>
      {project && (
        <div
          className="fixed inset-0 z-50
                     bg-black/80 backdrop-blur-sm
                     flex items-start md:items-center
                     justify-center
                     px-4 py-6"
        >
          <div
            className="relative w-full max-w-4xl
                       bg-[#0b0f13]
                       rounded-3xl
                       border border-white/10
                       shadow-[0_0_60px_rgba(34,211,238,0.15)]
                       max-h-[90vh]
                       flex flex-col"
          >
            {/* HEADER */}
            <div
              className="sticky top-0 z-20
                         flex items-center justify-between
                         px-6 py-4
                         border-b border-white/10
                         bg-[#0b0f13]/95 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="text-xs tracking-widest text-gray-400">
                  PROJECT INSPECTION MODE
                </span>
              </div>

              <button
                onClick={onClose}
                className="text-2xl text-gray-400 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* SCROLL AREA */}
            <div
              className="overflow-y-auto p-8 md:p-10 grid gap-10
                         overscroll-contain touch-pan-y"
              style={{
                height: "calc(90vh - 72px)",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl max-h-[300px] object-cover"
                />
              )}

              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                {project.title}
              </h3>

              {project.fullDesc && (
                <p className="text-gray-300 leading-relaxed">
                  {project.fullDesc}
                </p>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {project.tech && (
                  <div className="p-6 bg-white/5 rounded-2xl">
                    <p className="text-cyan-400 text-sm">Technology Stack</p>
                    <p className="text-gray-300 text-sm">{project.tech}</p>
                  </div>
                )}
                {project.impact && (
                  <div className="p-6 bg-white/5 rounded-2xl">
                    <p className="text-cyan-400 text-sm">Real-World Impact</p>
                    <p className="text-gray-300 text-sm">{project.impact}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-6 py-3 bg-cyan-400 text-black rounded-full"
                  >
                    🚀 Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full"
                  >
                    🧠 GitHub
                  </a>
                )}
                <button
                  onClick={handleAskNody}
                  className="px-6 py-3 border border-white/20 text-gray-300 rounded-full"
                >
                  🎤 Ask NODY
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
