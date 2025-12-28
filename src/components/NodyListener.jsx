import { useEffect, useRef, useState } from "react";
import { useNody } from "../ai/useNody";
import { nodyData } from "../ai/nodyData";

export default function NodyListener() {
  const [listening, setListening] = useState(false);
  const greetedRef = useRef(false);

  // initialize Nody
  const { startListening } = useNody(setListening);

  /* ================= SPEAK ================= */
  const speak = (text) => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";

    // start mic AFTER greeting finishes
    utterance.onend = () => {
      startListening();
    };

    window.speechSynthesis.speak(utterance);
  };

  /* ================= SCROLL TO GREET ================= */
  useEffect(() => {
    const handleFirstScroll = () => {
      if (greetedRef.current) return;

      greetedRef.current = true;

      // 🔓 unlock speech (required by browser)
      window.__NODY_USER_UNLOCKED__ = true;

      // 🔊 greet user
      speak(nodyData.greeting);

      // remove listeners after first use
      window.removeEventListener("scroll", handleFirstScroll);
      window.removeEventListener("wheel", handleFirstScroll);
      window.removeEventListener("touchmove", handleFirstScroll);
    };

    window.addEventListener("scroll", handleFirstScroll, { passive: true });
    window.addEventListener("wheel", handleFirstScroll, { passive: true });
    window.addEventListener("touchmove", handleFirstScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleFirstScroll);
      window.removeEventListener("wheel", handleFirstScroll);
      window.removeEventListener("touchmove", handleFirstScroll);
    };
  }, []);

  /* ================= UI ================= */
  return (
    <>
      {listening && (
        <div
          className="fixed bottom-6 right-6 z-50
                     w-14 h-14 rounded-full
                     bg-cyan-400 text-black
                     flex items-center justify-center
                     shadow-[0_0_30px_rgba(34,211,238,0.9)]
                     animate-pulse"
        >
          🎤
        </div>
      )}
    </>
  );
}
