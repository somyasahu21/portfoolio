import { useState } from "react";
import { useNody } from "../ai/useNody";

export default function NodyListener() {
  const [listening, setListening] = useState(false);

  // Initialize NODY
  useNody(setListening);

  return (
    <>
      {/* 🎤 LISTENING INDICATOR */}
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
