import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f13] text-white px-6 md:px-24 py-20 overflow-hidden">
      
      {/* SOFT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid gap-14 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h3
            className="text-2xl font-extrabold
                       bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                       bg-clip-text text-transparent"
          >
            Somya Sahu
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed text-sm max-w-sm">
            Data Scientist & Full-Stack Engineer crafting intelligent,
            human-centered AI systems and scalable applications.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <p className="text-sm tracking-widest text-cyan-400 mb-6">
            EXPLORE
          </p>

          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "About", "Projects", "Skills", "Journey", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <p className="text-sm tracking-widest text-cyan-400 mb-6">
            CONNECT
          </p>

          <div className="space-y-4 text-gray-400 text-sm">
            <a
              href="mailto:somya7101@gmail.com"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
              somya7101@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/somya-sahu-5b5a2832b/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/somyasahu21"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaGithub />
              GitHub
            </a>
            
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 border-t border-white/10"></div>

      {/* COPYRIGHT */}
      <div className="relative z-10 text-center mt-8 text-gray-500 text-xs tracking-wide">
        © {new Date().getFullYear()} Somya Sahu · Built with AI, Logic & Purpose
      </div>
    </footer>
  );
}
