import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "./Reveal";

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Tech Stacks" },
  { value: "100%", label: "Passion Level" },
  { value: "Open", label: "to Work" },
];

const highlights = [
  { icon: "⚡", text: "Full Stack Developer" },
  { icon: "⚛️", text: "React & Node.js" },
  { icon: "🎨", text: "Clean UI/UX Design" },
  { icon: "🚀", text: "Performance First" },
  { icon: "🛠️", text: "Problem Solver" },
  { icon: "📦", text: "Open Source Fan" },
];

const CountUp = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-3xl font-display font-extrabold gradient-text"
    >
      {value}
    </motion.span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "#3B82F6" }}>
              Who I Am
            </p>
            <h2 className="section-title text-4xl sm:text-5xl mb-5">About Me</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bio */}
          <div>
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-8 mb-6 glass-hover">
                <h3 className="font-display font-bold text-xl mb-4 text-white">Hey there! 👋</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  I'm <strong className="text-white font-semibold">Tushar Mendhule</strong>, a passionate
                  Full Stack Developer focused on building responsive web applications
                  and scalable backend systems.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  I enjoy solving complex problems, crafting clean and intuitive user
                  interfaces, and writing backend code that scales. My sweet spot is
                  where good design meets solid engineering.
                </p>
                <p className="text-white/60 leading-relaxed">
                  When I'm not coding, I'm exploring new technologies, contributing
                  to open source projects, or sharpening my problem-solving skills.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="glass glass-hover rounded-xl p-4 flex items-center gap-3"
                  >
                    <span className="text-2xl">{h.icon}</span>
                    <span className="text-sm font-medium text-white/80">{h.text}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right - Stats */}
          <div>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="glass glass-hover rounded-2xl p-6 text-center"
                    style={{ border: "1px solid rgba(59,130,246,0.15)" }}
                  >
                    <CountUp value={s.value} />
                    <p className="text-sm text-white/50 mt-1 font-medium">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div
                className="glass rounded-2xl p-6"
                style={{ border: "1px solid rgba(16,185,129,0.2)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ background: "#10B981" }}
                  />
                  <span className="font-semibold text-white">Currently</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Building exciting full-stack projects and actively looking for
                  my first professional developer role. Ready to learn, contribute,
                  and grow fast.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Remote", "On-site", "Internship", "Full-time"].map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
