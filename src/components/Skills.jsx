import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaPython, FaJava,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiVite, SiPostman } from "react-icons/si";
import Reveal from "./Reveal";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: "Advanced" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: "Advanced" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: "Intermediate" },
      { name: "React", icon: <FaReact />, color: "#61DAFB", level: "Intermediate" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", level: "Intermediate" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933", level: "Intermediate" },
      { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF", level: "Intermediate" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: "Intermediate" },
      { name: "Python", icon: <FaPython />, color: "#3776AB", level: "Beginner" },
      { name: "Java", icon: <FaJava />, color: "#007396", level: "Beginner" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: "Intermediate" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF", level: "Intermediate" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF", level: "Intermediate" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37", level: "Intermediate" },
    ],
  },
];

const levelColor = {
  Advanced: { bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.3)", text: "#34d399" },
  Intermediate: { bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.3)", text: "#93c5fd" },
  Beginner: { bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.3)", text: "#c4b5fd" },
};

const SkillCard = ({ skill, index }) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.3, delay: index * 0.06 }}
    whileHover={{ y: -5, scale: 1.03 }}
    className="glass glass-hover rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default"
  >
    <div
      className="text-4xl w-14 h-14 flex items-center justify-center rounded-xl"
      style={{
        color: skill.color,
        background: `${skill.color}18`,
        border: `1px solid ${skill.color}30`,
      }}
    >
      {skill.icon}
    </div>
    <p className="text-sm font-semibold text-white text-center">{skill.name}</p>
    <span
      className="text-xs px-2 py-0.5 rounded-full font-medium"
      style={{
        background: levelColor[skill.level].bg,
        border: `1px solid ${levelColor[skill.level].border}`,
        color: levelColor[skill.level].text,
      }}
    >
      {skill.level}
    </span>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", ...skillGroups.map((g) => g.label)];

  const filteredSkills =
    activeTab === "All"
      ? skillGroups.flatMap((g) => g.skills)
      : skillGroups.find((g) => g.label === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "#8B5CF6" }}>
              My Toolkit
            </p>
            <h2 className="section-title text-4xl sm:text-5xl mb-5">Skills & Technologies</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  activeTab === tab
                    ? {
                        background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                        color: "white",
                        boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(148,163,184,0.8)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filteredSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
