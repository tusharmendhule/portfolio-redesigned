// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink, FiCode, FiLayers } from "react-icons/fi";
// import Reveal from "./Reveal";

// // Hardcoded production-ready project data
// const projects = [
//   {
//     title: "AgroIntelX",
//     category: "Full Stack",
//     status: "In Progress",
//     description:
//       "AI-powered precision agriculture platform that provides crop disease detection, crop recommendation, fertilizer recommendation, weather forecasting, soil analysis, multilingual AI assistant, analytics dashboard, and farmer decision support.",
//     tech: [
//       "React",
//       "FastAPI",
//       "MongoDB Atlas",
//       "TensorFlow",
//       "Python",
//       "JWT",
//       "Tailwind CSS"
//     ],
//     highlights: [
//       "AI Disease Detection",
//       "Weather Forecast",
//       "Crop Recommendation",
//       "Farmer Dashboard"
//     ],
//     github: "https://github.com/tusharmendhule/AgroIntelX",
//     live: "https://agrointelx.onrender.com/"
//   },
//   {
//     title: "ShpNex",
//     category: "Full Stack",
//     status: "Completed",
//     description:
//       "Modern full-stack e-commerce platform with secure authentication, shopping cart, product management, admin dashboard, responsive UI, and REST API integration.",
//     tech: [
//       "Next.js",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "JWT",
//       "Tailwind CSS"
//     ],
//     highlights: [
//       "JWT Authentication",
//       "Shopping Cart",
//       "Admin Dashboard",
//       "Responsive Design"
//     ],
//     github: "https://github.com/tusharmendhule/shpnex",
//     live: "https://shpnex-1.onrender.com/"
//   },
//   {
//     title: "Portfolio Website",
//     category: "Frontend",
//     status: "Completed",
//     description:
//       "Modern personal portfolio built using React, Vite, Tailwind CSS, and Framer Motion to showcase my projects, skills, certifications, and achievements.",
//     tech: [
//       "React",
//       "Vite",
//       "Tailwind CSS",
//       "Framer Motion"
//     ],
//     highlights: [
//       "Responsive Design",
//       "Modern UI",
//       "Smooth Animations",
//       "Fast Performance"
//     ],
//     github: "https://github.com/tusharmendhule/portfolio-redesigned",
//     live: "https://tusharmendhule.vercel.app/"
//   }
// ];

// const categoryColors = {
//   "Full Stack": { bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.3)", text: "#93c5fd" },
//   "Frontend": { bg: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.3)", text: "#67e8f9" },
//   "Backend": { bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.3)", text: "#6ee7b7" },
// };

// const statusColors = {
//   Completed: { text: "#34d399", dot: "#10B981" },
//   "In Progress": { text: "#fbbf24", dot: "#f59e0b" },
// };

// const ProjectCard = ({ project, index }) => {
//   const catColor = categoryColors[project.category] || categoryColors["Full Stack"];
//   const status = statusColors[project.status] || statusColors["Completed"];

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{ duration: 0.4, delay: index * 0.08 }}
//       whileHover={{ y: -6 }}
//       className="glass rounded-2xl overflow-hidden flex flex-col"
//       style={{ border: "1px solid rgba(255,255,255,0.06)" }}
//     >
//       {/* Card header strip */}
//       <div
//         className="h-1.5 w-full"
//         style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)" }}
//       />

//       <div className="p-6 flex flex-col flex-1">
//         {/* Top row */}
//         <div className="flex items-start justify-between gap-3 mb-4">
//           <div className="p-2 rounded-lg" style={{ background: "rgba(59,130,246,0.1)" }}>
//             <FiCode size={18} style={{ color: "#3B82F6" }} />
//           </div>
//           <div className="flex items-center gap-2">
//             <span
//               className="text-xs px-2.5 py-1 rounded-full font-medium"
//               style={{
//                 background: catColor.bg,
//                 border: `1px solid ${catColor.border}`,
//                 color: catColor.text,
//               }}
//             >
//               {project.category}
//             </span>
//             <div className="flex items-center gap-1">
//               <div
//                 className="w-1.5 h-1.5 rounded-full"
//                 style={{ background: status.dot }}
//               />
//               <span className="text-xs font-medium" style={{ color: status.text }}>
//                 {project.status}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Title & description */}
//         <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
//           {project.title}
//         </h3>
//         <p className="text-sm text-white/55 leading-relaxed mb-4 flex-1">
//           {project.description}
//         </p>

//         {/* Highlights */}
//         <div className="grid grid-cols-2 gap-1.5 mb-5">
//           {project.highlights.map((h) => (
//             <div key={h} className="flex items-center gap-1.5 text-xs text-white/50">
//               <span style={{ color: "#10B981" }}>✓</span>
//               {h}
//             </div>
//           ))}
//         </div>

//         {/* Tech stack */}
//         <div className="flex flex-wrap gap-1.5 mb-5">
//           {project.tech.map((t) => (
//             <span key={t} className="tag text-xs">{t}</span>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="flex gap-2 mt-auto">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 btn-ghost text-xs py-2 justify-center"
//           >
//             <FaGithub /> Code
//           </a>
//           {project.live ? (
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 btn-primary text-xs py-2 justify-center"
//             >
//               <FiExternalLink /> Live Demo
//             </a>
//           ) : (
//             <button
//               disabled
//               className="flex-1 text-xs py-2 rounded-lg font-medium flex items-center justify-center gap-1.5 cursor-not-allowed"
//               style={{
//                 background: "rgba(255,255,255,0.03)",
//                 color: "rgba(148,163,184,0.4)",
//                 border: "1px solid rgba(255,255,255,0.06)",
//               }}
//             >
//               <FiExternalLink /> Coming Soon
//             </button>
//           )}
//         </div>
//       </div>
//     </motion.article>
//   );
// };

// const Projects = () => {
//   const [filter, setFilter] = useState("All");
//   const categories = ["All", ...new Set(projects.map((p) => p.category))];

//   const filtered =
//     filter === "All" ? projects : projects.filter((p) => p.category === filter);

//   return (
//     <section id="projects" className="py-28 px-6">
//       <div className="max-w-6xl mx-auto">
//         <Reveal>
//           <div className="text-center mb-16">
//             <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "#06B6D4" }}>
//               What I've Built
//             </p>
//             <h2 className="section-title text-4xl sm:text-5xl mb-5">Projects</h2>
//             <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
//           </div>
//         </Reveal>

//         {/* Filters */}
//         <Reveal delay={0.1}>
//           <div className="flex flex-wrap gap-2 justify-center mb-10">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setFilter(cat)}
//                 className="px-4 py-2 rounded-full text-sm font-medium transition-all"
//                 style={
//                   filter === cat
//                     ? {
//                         background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
//                         color: "white",
//                         boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
//                       }
//                     : {
//                         background: "rgba(255,255,255,0.05)",
//                         color: "rgba(148,163,184,0.8)",
//                         border: "1px solid rgba(255,255,255,0.08)",
//                       }
//                 }
//               >
//                 <FiLayers className="inline mr-1" size={12} />{cat}
//               </button>
//             ))}
//           </div>
//         </Reveal>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={filter}
//             className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
//           >
//             {filtered.map((project, i) => (
//               <ProjectCard key={project.title} project={project} index={i} />
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* CTA */}
//         <Reveal delay={0.2}>
//           <div className="text-center mt-12">
//             <a
//               href="https://github.com/tusharmendhule"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn-ghost inline-flex"
//             >
//               <FaGithub /> View All on GitHub
//             </a>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCode, FiLayers } from "react-icons/fi";
import Reveal from "./Reveal";

// Hardcoded production-ready project data with updated URLs and localized asset image keys
const projects = [
  {
    title: "AgroIntelX",
    category: "Full Stack",
    status: "In Progress",
    description:
      "AI-powered precision agriculture platform that provides crop disease detection, crop recommendation, fertilizer recommendation, weather forecasting, soil analysis, multilingual AI assistant, analytics dashboard, and farmer decision support.",
    tech: [
      "React",
      "FastAPI",
      "MongoDB Atlas",
      "TensorFlow",
      "Python",
      "JWT",
      "Tailwind CSS"
    ],
    highlights: [
      "AI Disease Detection",
      "Weather Forecast",
      "Crop Recommendation",
      "Farmer Dashboard"
    ],
    github: "https://github.com/tusharmendhule/AgroIntelX",
    live: "https://agrointelx.onrender.com/",
    image: "/assets/projects/agrointelx.png" // Relative path inside your public folder or source directory
  },
  {
    title: "ShpNex",
    category: "Full Stack",
    status: "Completed",
    description:
      "Modern full-stack e-commerce platform with secure authentication, shopping cart, product management, admin dashboard, responsive UI, and REST API integration.",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS"
    ],
    highlights: [
      "JWT Authentication",
      "Shopping Cart",
      "Admin Dashboard",
      "Responsive Design"
    ],
    github: "https://github.com/tusharmendhule/shpnex",
    live: "https://shpnex-1.onrender.com/",
    image: "/assets/projects/shpnex.png" // Relative path inside your public folder or source directory
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    status: "Completed",
    description:
      "Modern personal portfolio built using React, Vite, Tailwind CSS, and Framer Motion to showcase my projects, skills, certifications, and achievements.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion"
    ],
    highlights: [
      "Responsive Design",
      "Modern UI",
      "Smooth Animations",
      "Fast Performance"
    ],
    github: "https://github.com/tusharmendhule/portfolio-redesigned",
    live: "https://tusharmendhule.vercel.app/",
    image: "/assets/projects/portfolio.png" // Relative path inside your public folder or source directory
  }
];

const categoryColors = {
  "Full Stack": { bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.3)", text: "#93c5fd" },
  "Frontend": { bg: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.3)", text: "#67e8f9" },
  "Backend": { bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.3)", text: "#6ee7b7" },
};

const statusColors = {
  Completed: { text: "#34d399", dot: "#10B981" },
  "In Progress": { text: "#fbbf24", dot: "#f59e0b" },
};

const ProjectCard = ({ project, index }) => {
  const catColor = categoryColors[project.category] || categoryColors["Full Stack"];
  const status = statusColors[project.status] || statusColors["Completed"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl overflow-hidden flex flex-col"
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Card header strip */}
      <div
        className="h-1.5 w-full"
        style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)" }}
      />

      {/* Card Visual Header Mockup */}
      {project.image && (
        <div className="w-full h-44 overflow-hidden relative border-b border-white/5 bg-neutral-900/40">
          <img 
            src={project.image} 
            alt={`${project.title} Interface Preview`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              // Hides the broken thumbnail wrapper context if images are not yet mapped locally
              e.target.parentElement.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="p-2 rounded-lg" style={{ background: "rgba(59,130,246,0.1)" }}>
            <FiCode size={18} style={{ color: "#3B82F6" }} />
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: catColor.bg,
                border: `1px solid ${catColor.border}`,
                color: catColor.text,
              }}
            >
              {project.category}
            </span>
            <div className="flex items-center gap-1">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: status.dot }}
              />
              <span className="text-xs font-medium" style={{ color: status.text }}>
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Title & description */}
        <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-xs text-white/50">
              <span style={{ color: "#10B981" }}>✓</span>
              {h}
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-ghost text-xs py-2 justify-center"
          >
            <FaGithub /> Code
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-xs py-2 justify-center"
            >
              <FiExternalLink /> Live Demo
            </a>
          ) : (
            <button
              disabled
              className="flex-1 text-xs py-2 rounded-lg font-medium flex items-center justify-center gap-1.5 cursor-not-allowed"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: "rgba(148,163,184,0.4)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <FiExternalLink /> Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "#06B6D4" }}>
              What I've Built
            </p>
            <h2 className="section-title text-4xl sm:text-5xl mb-5">Projects</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={
                  filter === cat
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
                <FiLayers className="inline mr-1" size={12} />{cat}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/tusharmendhule"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex"
            >
              <FaGithub /> View All on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;