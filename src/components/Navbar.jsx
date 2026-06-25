import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.getElementById(l.id));
      const current = sections.findLast(
        (s) => s && s.getBoundingClientRect().top <= 120
      );
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          style={{
            background: scrolled
              ? "rgba(3,7,18,0.85)"
              : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.06)"
              : "none",
            transition: "all 0.4s ease",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="font-display font-bold text-lg tracking-tight">
              <span className="gradient-text">TM</span>
              <span className="text-white/60 ml-1 text-sm font-normal">dev</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                  style={{
                    color: active === link.id ? "white" : "rgba(148,163,184,0.8)",
                  }}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Resume CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="btn-primary text-sm py-2 px-4"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg glass text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 glass rounded-2xl p-4 md:hidden"
            style={{ background: "rgba(3,7,18,0.95)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-white/5"
                style={{ color: active === link.id ? "#3B82F6" : "#94A3B8" }}
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-white/10 mt-3 pt-3">
              <a href="#contact" className="btn-primary w-full justify-center text-sm">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
