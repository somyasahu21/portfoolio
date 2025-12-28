import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaBrain,
  FaEye,
  FaMicrophone,
  FaDatabase,
  FaProjectDiagram,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaComments,
  FaRocket,
} from "react-icons/fa";

export default function Skills() {
  const skillGroups = [
    {
      title: "AI & Data Science",
      subtitle: "Intelligent systems powered by data & models",
      skills: [
        { name: "Python", level: 4, icon: <FaPython /> },
        { name: "Machine Learning", level: 4, icon: <FaBrain /> },
        { name: "Deep Learning", level: 3, icon: <FaBrain /> },
        { name: "Computer Vision", level: 4, icon: <FaEye /> },
        { name: "NLP & Voice AI", level: 3, icon: <FaMicrophone /> },
      ],
    },
    {
      title: "MERN Stack Engineering",
      subtitle: "Scalable, production-ready web platforms",
      skills: [
        { name: "React.js", level: 4, icon: <FaReact /> },
        { name: "Node.js", level: 4, icon: <FaNodeJs /> },
        { name: "Express.js", level: 3, icon: <FaNodeJs /> },
        { name: "MongoDB", level: 3, icon: <FaDatabase /> },
        { name: "REST APIs", level: 4, icon: <FaProjectDiagram /> },
      ],
    },
    {
      title: "Core Engineering Strengths",
      subtitle: "How I design, reason & solve problems",
      skills: [
        { name: "Problem Solving", level: 4 },
        { name: "System Design", level: 3 },
        { name: "Debugging", level: 4 },
        { name: "Data Analysis", level: 4 },
        { name: "Project Architecture", level: 3 },
      ],
    },
     {
  title: "Learning & Growth",
  subtitle: "Advanced concepts I’m actively exploring and strengthening",
  skills: [
    { name: "Advanced Deep Learning (CNN Optimization)", level: 3 },
    { name: "System Design for Scalable Applications", level: 3 },
    { name: "AI Agent Workflows & Orchestration", level: 3 },
    { name: "Cloud Deployment Basics", level: 2 },
  ],
}
  ];

  const softSkills = [
    { name: "Communication", level: 4, icon: <FaComments /> },
    { name: "Team Collaboration", level: 4, icon: <FaUsers /> },
    { name: "Creative Thinking", level: 3, icon: <FaLightbulb /> },
    { name: "Time Management", level: 4, icon: <FaClock /> },
    { name: "Self Learning & Initiative", level: 4, icon: <FaRocket /> },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#0b0f13] text-white px-6 md:px-24 py-44 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-32">
        <p className="text-xs tracking-[8px] text-cyan-400 mb-5">
          CAPABILITY MATRIX
        </p>  
  <h2
  className="inline-block text-3xl md:text-5xl font-extrabold
             bg-gradient-to-r from-cyan-400 via-white to-cyan-300
             bg-clip-text text-transparent
             drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]"
>
   Engineering Skillset
</h2>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A system-level view of my technical and behavioral capabilities,
          refined through real-world projects and teamwork.
        </p>
      </div>

      {/* TECHNICAL SKILLS */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 mb-36">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group p-12 rounded-[28px]
                       bg-white/5 backdrop-blur-2xl
                       border border-white/10
                       hover:border-cyan-400/50
                       hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]
                       transition-all duration-500"
          >
            {/* GLOW */}
            <div className="absolute -top-12 -right-12 w-48 h-48
                            bg-cyan-400/15 blur-[100px] rounded-full"></div>

            <h3 className="text-2xl font-semibold
                           bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                           bg-clip-text text-transparent mb-3">
              {group.title}
            </h3>

            <p className="text-sm text-gray-400 mb-10">
              {group.subtitle}
            </p>

            <div className="space-y-6">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-gray-300">
                    {skill.icon && (
                      <span className="text-cyan-400">{skill.icon}</span>
                    )}
                    <span>{skill.name}</span>
                  </div>

                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((dot) => (
                      <span
                        key={dot}
                        className={`w-2.5 h-2.5 rounded-full ${
                          dot <= skill.level
                            ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                            : "bg-white/20"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* SOFT SKILLS */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-12 rounded-[28px]
                     bg-white/5 backdrop-blur-2xl
                     border border-white/10
                     hover:border-cyan-400/50
                     transition"
        >
          <h3 className="text-2xl font-semibold
                         bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                         bg-clip-text text-transparent mb-10 text-center">
            Professional & Soft Skills
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4 text-gray-300">
                  <span className="text-cyan-400 text-lg">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </div>

                <div className="flex gap-1.5">
                  {[1, 2, 3, 4].map((dot) => (
                    <span
                      key={dot}
                      className={`w-2.5 h-2.5 rounded-full ${
                        dot <= skill.level
                          ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                          : "bg-white/20"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
