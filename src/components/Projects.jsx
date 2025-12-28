import React, { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("ai");
  const [selectedProject, setSelectedProject] = useState(null);

  /* ================= FETCH PROJECT DATA ================= */
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error("Failed to load projects", err));
  }, []);

  const tabs = [
    { id: "ai", label: "AI & Data Science" },
    { id: "mern", label: "MERN Stack" },
    { id: "mini", label: "Mini Projects" },
  ];

  const filteredProjects = projects.filter(
    (p) => p.category === activeTab
  );

  return (
    <section
      id="projects"
      className="relative bg-[#0b0f13] text-white px-6 md:px-24 py-36 overflow-hidden"
    >
      {/* BACKGROUND STRUCTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_55%)]"></div>

      {/* ================= HEADER ================= */}
      <div className="relative z-10 text-center mb-28">
        <h2
          className="inline-block text-3xl md:text-5xl font-extrabold
                     bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
        >
          Projects
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Engineering intelligent systems, scalable platforms, and practical
          tools using AI, Data Science, and Full-Stack technologies.
        </p>
      </div>

      {/* ================= TABS ================= */}
      <div className="relative z-10 flex justify-center gap-6 mb-24 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-7 py-2.5 rounded-full text-sm font-medium
              transition-all duration-300
              ${
                activeTab === tab.id
                  ? "text-black bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.65)]"
                  : "text-gray-400 border border-white/15 hover:border-cyan-400/40"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= PROJECT GRID ================= */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative rounded-2xl
                       bg-[#0f172a]/90 backdrop-blur-md
                       border border-white/10
                       hover:border-cyan-400/40
                       transition-all duration-300
                       overflow-hidden"
          >
            {/* SYSTEM HEADER BAR */}
            <div className="flex items-center justify-between px-6 py-3
                            border-b border-white/10 bg-white/5">
              <span className="text-xs tracking-widest text-gray-400">
                SYSTEM MODULE
              </span>

              <span className="text-[10px] px-3 py-1 rounded-full
                               border border-cyan-400/40 text-cyan-400">
                {activeTab.toUpperCase()}
              </span>
            </div>

            {/* CARD CONTENT */}
            <div className="relative p-8">
              {/* LEFT ACCENT */}
              <span
                className="absolute left-0 top-10 h-[60%] w-[3px]
                           bg-gradient-to-b from-cyan-400 to-transparent
                           opacity-0 group-hover:opacity-100 transition"
              ></span>

              {/* TITLE */}
              <h4
                className="text-xl font-semibold mb-4
                           bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                           bg-clip-text text-transparent"
              >
                {project.title}
              </h4>

              {/* DESCRIPTION */}
              {project.shortDesc && (
                <p className="text-gray-400 text-sm leading-relaxed max-w-[92%]">
                  {project.shortDesc}
                </p>
              )}

              {/* FOOTER */}
              <div className="mt-10 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Click to explore full system →
                </span>

                <span className="w-10 h-[2px] bg-cyan-400/40
                                 group-hover:w-16 transition-all duration-300"></span>
              </div>
            </div>

            {/* CORNER GLOW */}
            <div
              className="absolute -bottom-24 -right-24 w-48 h-48
                         bg-cyan-400/20 blur-[90px]
                         opacity-0 group-hover:opacity-100 transition"
            ></div>
          </div>
        ))}
      </div>

      {/* ================= PROJECT MODAL ================= */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
