import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <span className="font-display font-bold text-sm gradient-text">TM.dev</span>
          <p className="text-xs text-white/30 mt-1">© {year} Tushar Mendhule. All rights reserved.</p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/tusharmendhule", icon: <FaGithub />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/tusharmendhule", icon: <FaLinkedin />, label: "LinkedIn" },
            { href: "mailto:tusharmendhule@gmail.com", icon: <FiMail />, label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -2 }}
              className="p-2 rounded-lg glass glass-hover text-white/40 hover:text-white transition-colors"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.a
          href="#home"
          whileHover={{ y: -2 }}
          className="p-2 rounded-lg glass glass-hover text-white/40 hover:text-white transition-colors"
          aria-label="Back to top"
        >
          <FiArrowUp />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
