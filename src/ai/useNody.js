import { useEffect, useRef } from "react";
import { detectIntent, generateAnswer } from "./nodyBrain";
import { nodyData } from "./nodyData";

export function useNody(setListening) {
  const recognitionRef = useRef(null);
  const lastIntentRef = useRef(null);
  const lastProjectRef = useRef(null);
  const isSpeakingRef = useRef(false);

  /* ================= WAKE WORDS ================= */
  const wakeWords = ["nody", "noddy", "nodey", "no d", "nodi"];

  const hasWakeWord = (text) =>
    wakeWords.some((w) => text.includes(w));

  const removeWakeWord = (text) => {
    wakeWords.forEach((w) => {
      text = text.replace(w, "");
    });
    return text.trim();
  };

  /* ================= MAIN EFFECT ================= */
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onstart = () => setListening?.(true);
    recognition.onend = () => setListening?.(false);

    recognition.onresult = (event) => {
      if (isSpeakingRef.current) return;

      const transcript =
        event.results[event.results.length - 1][0].transcript.toLowerCase();

      console.log("🎙 NODY heard:", transcript);

      if (!hasWakeWord(transcript)) return;

      const cleanedText = removeWakeWord(transcript);

      /* ===== WAKE ONLY ===== */
      if (!cleanedText) {
        speak("Yes, how can I help you?", recognition);
        return;
      }

      /* ===== FOLLOW-UP ===== */
      if (
        cleanedText.includes("tell me more") ||
        cleanedText.includes("aur batao") ||
        cleanedText.includes("more details")
      ) {
        if (lastProjectRef.current) {
          speak(
            buildProjectSpeech(lastProjectRef.current, true),
            recognition
          );
        } else if (lastIntentRef.current) {
          speak(generateAnswer(lastIntentRef.current, true), recognition);
        } else {
          speak("Please ask me about Somya or his projects first.", recognition);
        }
        return;
      }

      /* ===== NORMAL QUESTION ===== */
      const intent = detectIntent(cleanedText);
      lastIntentRef.current = intent;
      speak(generateAnswer(intent), recognition);
    };

    recognition.start();
    recognitionRef.current = recognition;

    /* ===== GREETING (AUTO, UNLOCK SAFE) ===== */
    speak(nodyData.greeting, recognition);

    /* ===== PROJECT BUTTON LISTENER ===== */
    const handleProjectExplain = (event) => {
      const project = event.detail;
      if (!project) return;

      lastProjectRef.current = project;
      speak(buildProjectSpeech(project, true), recognition);
    };

    window.addEventListener(
      "nody-explain-project",
      handleProjectExplain
    );

    return () => {
      recognition.stop();
      window.removeEventListener(
        "nody-explain-project",
        handleProjectExplain
      );
    };
  }, []);

  /* ================= EXPOSE CONTROLS (ADDED) ================= */
  return {
    startListening: () => {
      if (recognitionRef.current) {
        recognitionRef.current.start();
      }
    },
    stopListening: () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    },
  };
}

/* ================= SPEAK ================= */
function speak(text, recognition) {
  // 🔐 SAFETY: only speak after user interaction (scroll/click/etc.)
  if (!window.__NODY_USER_UNLOCKED__) return;

  const synth = window.speechSynthesis;
  synth.cancel();
  if (recognition) recognition.stop();

  isSpeakingRefSetter(true);

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  utterance.rate = 1;
  utterance.pitch = 1;

  utterance.onend = () => {
    isSpeakingRefSetter(false);
    if (recognition) recognition.start();
  };

  synth.speak(utterance);
}

function isSpeakingRefSetter(state) {
  if (typeof window !== "undefined") {
    window.__NODY_SPEAKING__ = state;
  }
}

/* ================= PROJECT SPEECH ================= */
function buildProjectSpeech(project, detailed = false) {
  let parts = [];

  parts.push(`This project is called ${project.title}.`);

  if (project.shortDesc) {
    parts.push(project.shortDesc);
  }

  if (detailed && project.fullDesc) {
    const steps = project.fullDesc
      .split(/Step \d+:|Final Step:/)
      .map((s) => s.trim())
      .filter(Boolean);

    steps.forEach((step, index) => {
      parts.push(`Step ${index + 1}. ${step}`);
    });
  }

  if (project.tech) {
    parts.push(`This system is built using ${project.tech}.`);
  }

  if (project.impact) {
    parts.push(
      `The real world impact of this project is that it ${project.impact}.`
    );
  }

  return parts.join(" ");
}
