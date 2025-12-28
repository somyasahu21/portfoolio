import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaBrain,
  FaCode,
  FaRocket,
} from "react-icons/fa";

export default function Journey() {
  const journey = [
    {
      phase: "PHASE 01",
      title: "Curiosity → Foundations",
      desc:
        "I began with Python and data science fundamentals, training my thinking around logic, data structures, exploratory analysis, and problem decomposition — the mindset required for real AI work.",
      tech: "Python · Data Analysis · Logical Thinking",
      icon: <FaLightbulb />,
    },
    {
      phase: "PHASE 02",
      title: "Learning → Intelligence",
      desc:
        "I transitioned from learning concepts to building intelligence — applying machine learning, computer vision, and NLP to solve real problems like misinformation detection and visual assistance.",
      tech: "Machine Learning · Computer Vision · NLP",
      icon: <FaBrain />,
    },
    {
      phase: "PHASE 03",
      title: "Models → Systems",
      desc:
        "I moved beyond isolated models and started engineering complete systems — integrating AI with MERN Stack to build scalable, interactive, production-ready platforms.",
      tech: "MERN Stack · APIs · System Integration",
      icon: <FaCode />,
    },
    {
      phase: "CURRENT",
      title: "Systems → Purpose",
      desc:
        "Today, I design intelligent systems with intent — AI assistants, automation tools, and data-driven platforms that prioritize usability, clarity, and real-world impact.",
      tech: "AI Systems · Architecture · UX for AI",
      icon: <FaRocket />,
    },
  ];

  return (
    <section
      id="journey"
      className="relative bg-[#0b0f13] text-white
                 px-6 md:px-24 py-44 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0
                      bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-36">
        <p className="text-xs tracking-[8px] text-cyan-400 mb-5">
          ENGINEERING STORY
        </p>
          <h2
  className="inline-block text-3xl md:text-5xl font-extrabold
             bg-gradient-to-r from-cyan-400 via-white to-cyan-300
             bg-clip-text text-transparent
             drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]"
>
  Journey & Experience 
</h2>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A data scientist’s journey — evolving from curiosity to systems,
          from learning to engineering real intelligence.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* CENTRAL LINE */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px]
                        bg-gradient-to-b
                        from-cyan-400/70 via-cyan-400/30 to-transparent"></div>

        <div className="space-y-32">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-12
                ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* NODE */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full
                                bg-[#0b0f13]
                                border border-cyan-400/70
                                flex items-center justify-center
                                text-cyan-400 text-xl
                                shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                  {item.icon}
                </div>
              </div>

              {/* CARD */}
              <div
                className="relative flex-1 p-10 rounded-3xl
                           bg-white/5 backdrop-blur-xl
                           border border-white/10
                           hover:border-cyan-400/50
                           hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]
                           transition-all duration-500"
              >
                {/* GLOW */}
                <div className="absolute -top-12 -right-12 w-44 h-44
                                bg-cyan-400/15 blur-[100px] rounded-full"></div>

                {/* PHASE */}
                <p className="text-xs tracking-[4px] text-cyan-400 mb-3">
                  {item.phase}
                </p>

                {/* TITLE */}
                <h3
                  className="text-xl md:text-2xl font-semibold
                             bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                             bg-clip-text text-transparent mb-4"
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 leading-relaxed text-[15px] mb-4">
                  {item.desc}
                </p>

                {/* TECH TAG */}
                <p className="text-sm text-cyan-400/80">
                  {item.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
