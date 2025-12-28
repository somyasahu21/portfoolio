import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaSpinner,
  FaMagic,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const suggestions = [
    "Hi Somya, I came across your portfolio and would love to discuss a potential opportunity.",
    "Hello, I’m interested in your AI and full-stack work. Can we connect?",
    "Hi Somya, your projects look impressive. I’d like to collaborate or learn more.",
  ];

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0b0f13] text-white px-6 md:px-24 py-36 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]" />

      {/* HEADER */}
      <div className="relative z-10 text-center mb-20">
        <p className="text-xs tracking-[8px] text-cyan-400 mb-4">
          LET’S CONNECT
        </p>
  <h2
  className="inline-block text-3xl md:text-5xl font-extrabold
             bg-gradient-to-r from-cyan-400 via-white to-cyan-300
             bg-clip-text text-transparent
             drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]"
>
  Contact Me
</h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Have an idea, opportunity, or collaboration in mind?
          Let’s talk.
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold
                         bg-gradient-to-r from-cyan-400 via-white to-cyan-300
                         bg-clip-text text-transparent">
            Get in Touch
          </h3>

          <p className="text-gray-300">
            Open to opportunities in
            <span className="text-cyan-400"> AI, Data Science & MERN Stack</span>.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:somya7101@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
            >
              <FaEnvelope className="text-cyan-400" />
              somya7101@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/somya-sahu-5b5a2832b/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
            >
              <FaLinkedin className="text-cyan-400" />
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/somyasahu21"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
            >
              <FaGithub className="text-cyan-400" />
              GitHub Profile
            </a>
            <a
              href="phone 7879750572"
              className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
            >
              <FaPhone className="text-cyan-400" />
                Phone - 7879750572
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl
                        border border-white/10">

          {!submitted ? (
            <>
              <h4 className="text-xl font-semibold mb-6 text-gray-200">
                Send a Message
              </h4>

              {/* AI SUGGESTIONS */}
              <div className="mb-6">
                <p className="text-xs text-cyan-400 mb-2 flex items-center gap-2">
                  <FaMagic /> AI-suggested messages
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((text, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setMessage(text)}
                      className="text-xs px-3 py-1 rounded-full
                                 border border-white/20 text-gray-300
                                 hover:border-cyan-400/50 transition"
                    >
                      Use
                    </button>
                  ))}
                </div>
              </div>

              {/* FORM */}
              <form
                action="https://formspree.io/f/meeqabnw"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input
                  name="username"
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/20
                             rounded-xl px-4 py-3 text-gray-300
                             focus:border-cyan-400 outline-none transition"
                />

                <input
                  name="Email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-white/20
                             rounded-xl px-4 py-3 text-gray-300
                             focus:border-cyan-400 outline-none transition"
                />

                <textarea
                  name="message"
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  className="w-full bg-transparent border border-white/20
                             rounded-xl px-4 py-3 text-gray-300
                             focus:border-cyan-400 outline-none transition"
                />

                <button
                  type="submit"
                  className="flex items-center gap-3 px-7 py-3 rounded-full
                             bg-cyan-400 text-black font-semibold
                             hover:scale-105 transition"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-16">
              <h4 className="text-2xl font-semibold text-cyan-400 mb-4">
                Message Sent Successfully 🚀
              </h4>
              <p className="text-gray-400">
                Thank you for reaching out. I’ll get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
