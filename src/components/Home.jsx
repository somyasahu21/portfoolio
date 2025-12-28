import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const man = "/man.png"; // from public folder

export default function Home() {

  /* ================= TYPING EFFECT ================= */
  const roles = [
    "Data Scientist",
    "AI Engineer",
    "Computer Vision Developer",
    "Machine Learning Engineer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && charIndex === roles[roleIndex].length) {
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => (deleting ? prev - 1 : prev + 1));
      setText(roles[roleIndex].substring(0, charIndex));
    }, deleting ? 45 : 90);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  /* ================= GSAP ================= */
  useGSAP(() => {
    gsap.from(".hero-left > *", {
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
    });

    gsap.from(".hero-img", {
      scale: 0.92,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(".hero-img", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut",
    });
  });

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#0b0f13] text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-24 overflow-hidden"
    >
      {/* Subtle background light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-cyan-500/15 blur-[120px] rounded-full"></div>

      {/* LEFT CONTENT */}
      <div className="hero-left relative z-10 w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">

        <span className="tracking-[6px] text-sm font-semibold text-cyan-300">
          I'M
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-white to-cyan-300 bg-clip-text text-transparent">
          SOMYA SAHU
        </h1>

        <div className="text-xl md:text-2xl text-cyan-200 min-h-[40px]">
          {text}
          <span className="animate-pulse ml-1">|</span>
        </div>

       

        {/* CTA BUTTONS */}
        <div className="mt-8 flex gap-5 justify-center md:justify-start">
          <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold
                             hover:scale-105 transition
                             hover:shadow-[0_0_25px_rgba(34,211,238,0.55)]">
            Hire Me
          </button>

          <a
            href="https://drive.google.com/file/d/1Rr2ft0UIsZaPzL6dmHvmjWpj-o1sXR-2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400
                       font-semibold hover:bg-cyan-400 hover:text-black
                       transition hover:scale-105"
          >
            📄 Resume
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center mb-14 md:mb-0">

        {/* Controlled image glow */}
        <div className="absolute w-[360px] h-[360px] bg-cyan-400/20 blur-[90px] rounded-full"></div>

       <img
  src={man}
  alt="AI Developer"
  className="hero-img relative w-[72%] md:w-[60%] rounded-3xl
             drop-shadow-[0_30px_60px_rgba(34,211,238,0.25)]"
/>
      </div>
    </section>
  );
}
