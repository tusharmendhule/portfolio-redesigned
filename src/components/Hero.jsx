import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import profile from "../assets/profile.jpg";

const ROLES = [
  "Full Stack Developer",
  "React Enthusiast",
  "Backend Engineer",
  "Problem Solver",
];

const TypeWriter = () => {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="gradient-text font-display font-bold">
      {displayed}
      <span className="animate-pulse ml-0.5" style={{ color: "#3B82F6" }}>|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Hero glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, #8B5CF6 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.25)",
                color: "#34d399",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-none tracking-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text block mt-1">Tushar</span>
              <span className="gradient-text">Mendhule</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/70 mb-3 h-8 font-medium"
            >
              <TypeWriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-white/50 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about building responsive web applications and scalable
              backend systems. Clean code, clean UI, clean architecture.
            </motion.p>

            <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
  className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
>
  {/* View Projects */}
  <button
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    className="btn-primary"
  >
    View Projects <FiArrowRight />
  </button>

  {/* Contact */}
  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    className="btn-ghost"
  >
    <FiMail />
    Contact
  </button>

  {/* Resume */}
  <a
    href="/resume.pdf"
    download
    className="btn-ghost"
    aria-label="Download Resume"
  >
    <FiDownload />
    Resume
  </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-white/30 uppercase tracking-widest">Find me on</span>
              <a
                href="https://github.com/tusharmendhule"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass glass-hover text-white/60 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tusharmendhule"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass glass-hover text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow rings */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-slow"
                style={{
                  background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                  padding: "3px",
                  borderRadius: "50%",
                  filter: "blur(2px)",
                  opacity: 0.6,
                }}
                aria-hidden="true"
              />

              {/* Spinning ring */}
              <div
                className="absolute -inset-3 rounded-full border border-dashed opacity-20"
                style={{
                  borderColor: "#3B82F6",
                  animation: "spin 15s linear infinite",
                }}
                aria-hidden="true"
              />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(59,130,246,0.5)",
                  boxShadow: "0 0 60px rgba(59,130,246,0.25), 0 0 120px rgba(139,92,246,0.1)",
                }}
              >
                <img
                  src={profile}
                  alt="Tushar Mendhule — Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay shimmer */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-8 glass rounded-xl px-3 py-2 text-xs font-medium"
                style={{ border: "1px solid rgba(16,185,129,0.3)" }}
              >
                <span style={{ color: "#34d399" }}>✓</span> Open to Work
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-4 bottom-8 glass rounded-xl px-3 py-2 text-xs font-medium"
                style={{ border: "1px solid rgba(59,130,246,0.3)" }}
              >
                <span className="gradient-text">10+</span> Projects Built
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-white/25 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-6 rounded-full"
            style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.6), transparent)" }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
