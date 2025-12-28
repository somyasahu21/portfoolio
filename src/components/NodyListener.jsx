import { useEffect, useRef, useState } from "react";
import { useNody } from "../ai/useNody";
import { nodyData } from "../ai/nodyData";

export default function NodyListener() {
  const [listening, setListening] = useState(false);
  const greetedRef = useRef(false);

  const { startListening } = useNody(setListening);

  const speak = (text) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-IN";
    u.onend = () => {
      startListening(); // 🎤 start mic AFTER greeting
    };
    window.speechSynthesis.speak(u);
  };

  useEffect(() => {
    const handleFirstScroll = () => {
      if (greetedRef.current) return;

      greetedRef.current = true;
      speak(nodyData.greeting);

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
