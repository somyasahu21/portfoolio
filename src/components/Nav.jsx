import React, { useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Nav() {
  const navRef = useRef(null);
  const mobileRef = useRef(null);

  /* ============== GSAP ENTRY (STABLE & SCOPED) ============== */
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".logo", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".nav-item",
          {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.2"
        );
    },
    { scope: navRef }
  );

  const toggleMenu = () => {
    mobileRef.current.classList.toggle("translate-x-full");
  };

  /* 🔹 UPDATED NAV ITEMS (Experience added) */
  const navItems = [
    "home",
    "about",
    "projects",
    "skills",
    "journey", // Experience / Journey section
    "contact",
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full
                 bg-[#0b0f13]/80 backdrop-blur-xl
                 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4
                      flex items-center justify-between">

        {/* LOGO */}
        <h1
          className="logo text-2xl md:text-3xl font-extrabold
                     bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                     bg-clip-text text-transparent cursor-pointer"
        >
          PORTFOLIO
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10
                       text-[17px] text-gray-300">
          {navItems.map((item) => (
            <li key={item} className="nav-item">
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80} // accounts for fixed navbar
                activeClass="text-cyan-400"
                className="cursor-pointer
                           hover:text-cyan-400
                           transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <div
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-2 cursor-pointer"
        >
          <span className="w-7 h-[2px] bg-white"></span>
          <span className="w-7 h-[2px] bg-white"></span>
          <span className="w-7 h-[2px] bg-white"></span>
        </div>
      </div>

      
     {/* MOBILE MENU */}
<div
  ref={mobileRef}
  className="fixed inset-0 z-[999]
             bg-[#0b0f13]
             text-white
             flex flex-col
             items-center
             gap-8
             pt-32
             text-2xl font-semibold
             transform translate-x-full
             transition-transform duration-500
             md:hidden"
>
  {/* ❌ CLOSE BUTTON */}
  <button
    onClick={toggleMenu}
    className="absolute top-6 right-6
               text-3xl font-bold
               hover:text-cyan-400
               transition"
  >
    ✕
  </button>

  {navItems.map((item) => (
    <Link
      key={item}
      to={item}
      smooth={true}
      duration={500}
      offset={-80}
      onClick={toggleMenu}
      className="cursor-pointer
                 hover:text-cyan-400
                 transition"
    >
      {item.toUpperCase()}
    </Link>
  ))}
</div>


    </nav>
  );
}
