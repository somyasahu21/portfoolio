import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0b0f13] text-white px-6 md:px-24 py-28 overflow-hidden"
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-24">
       <h2
  className="inline-block text-3xl md:text-5xl font-extrabold
             bg-gradient-to-r from-cyan-400 via-white to-cyan-300
             bg-clip-text text-transparent
             drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]"
>
  About Me
</h2>

        <p className="mt-6 text-gray-400 leading-relaxed">
          I design and develop intelligent software systems using
          <span className="text-cyan-400 font-semibold"> Python, AI, and MERN Stack</span>
          — focusing on real-world usability, performance, and scalability.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-20">

        {/* WHAT I BUILD */}
        <div>
         <h3
  className="text-2xl md:text-3xl font-semibold
             bg-gradient-to-r from-cyan-400 via-white to-cyan-300
             bg-clip-text text-transparent
             mb-8
             drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]"
>
  🚀 What I Build
</h3>


          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Systems",
                desc: "Computer vision, face recognition, object detection, voice assistants, and intelligent automation built using Python and modern AI frameworks.",
              },
              {
                title: "Full-Stack Web Apps",
                desc: "End-to-end MERN stack applications with dashboards, authentication, APIs, and real-time data handling.",
              },
              {
                title: "Data-Driven Solutions",
                desc: "Machine learning models, fake news detection, analytics systems, and decision-support tools.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white/5 backdrop-blur-md
                           border border-white/10 hover:border-cyan-400/40
                           hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HOW I WORK */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-300 mb-8">
            🧠 How I Work
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Understand the problem deeply",
              "Design the system architecture",
              "Build & train intelligent models",
              "Deploy as a usable product",
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10
                           text-gray-300 text-sm text-center
                           hover:border-cyan-400/40 transition"
              >
                <span className="block text-cyan-400 font-semibold mb-2">
                  Step {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* TECH PILLARS */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-300 mb-8">
            🛠️ My Core Tech Stack
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                Python & AI
              </h4>
              <p className="text-gray-400 text-sm">
                Python, OpenCV, Machine Learning, Deep Learning,
                Computer Vision, NLP, Model Training & Inference
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                MERN Stack
              </h4>
              <p className="text-gray-400 text-sm">
                MongoDB, Express.js, React, Node.js,
                REST APIs, Authentication, Dashboards
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                System Integration
              </h4>
              <p className="text-gray-400 text-sm">
                AI + Web integration, real-time data,
                hardware & API-based systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  