import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import Reveal from "./Reveal";
import emailjs from "@emailjs/browser";

const socials = [
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    value: "tusharmendhule",
    href: "https://github.com/tusharmendhule",
    color: "#FFFFFF",
  },
  {
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    value: "tusharmendhule",
    href: "https://www.linkedin.com/in/tusharmendhule",
    color: "#0A66C2",
  },
  {
    icon: <FiMail size={20} />,
    label: "Email",
    // value: "tushar@example.com",
    // href: "mailto:tushar@example.com"0,
    value: "tusharmendhule1@gmail.com",
    href: "mailto:tusharmendhule1@gmail.com",
    color: "#3B82F6",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("sending");
  //   // Simulate async send
  //   await new Promise((r) => setTimeout(r, 1200));
  //   setStatus("sent");
  //   setForm({ name: "", email: "", message: "" });
  //   setTimeout(() => setStatus("idle"), 4000);
  // };
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setStatus("sending");

//   try {
//     await emailjs.send(
//       "service_hcl2avd",
//       "template_sspqaxn",
//       {
//         from_name: form.name,
//         from_email: form.email,
//         message: form.message,
//       },
//       "fyRvqshwRbg_G00gj"
//     );

//     setStatus("sent");
//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });

//     setTimeout(() => setStatus("idle"), 4000);
//   } catch (error) {
//     console.error(error);
//     alert("Failed to send message.");
//     setStatus("idle");
//   }
// };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  console.log("Form Data:", form);

  try {
    const response = await emailjs.send(
      "service_hcl2avd", // e.g. service_9ldmy57
      "template_sspqaxn", // e.g. template_xxxxxx
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "fyRvqshwRbg_G00gj" // e.g. abcdefghijklmnop
    );

    console.log("SUCCESS!", response);

    setStatus("sent");
    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setStatus("idle"), 4000);
  } catch (error) {
    console.error("EmailJS Error:", error);

    alert(
      error?.text || "Failed to send message. Check the browser console."
    );

    setStatus("idle");
  }
};

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "#10B981" }}>
              Let's Connect
            </p>
            <h2 className="section-title text-4xl sm:text-5xl mb-5">Get In Touch</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <Reveal delay={0.1} direction="left">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Open to new opportunities
              </h3>
              <p className="text-white/55 leading-relaxed mb-8">
                I'm currently looking for my first professional developer role.
                Whether you have an opportunity, a project in mind, or just want
                to say hi — my inbox is always open.
              </p>

              {/* Location */}
              <div className="flex items-center gap-3 mb-8 text-white/60">
                <div className="p-2 rounded-lg glass">
                  <FiMapPin style={{ color: "#3B82F6" }} />
                </div>
                <div>
                  <p className="text-xs text-white/35 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium text-white/80">India — Remote Friendly</p>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 glass glass-hover rounded-xl group"
                  >
                    <div
                      className="p-2 rounded-lg"
                      style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                    >
                      <span style={{ color: s.color }}>{s.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-white/35 uppercase tracking-wider">{s.label}</p>
                      <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{s.value}</p>
                    </div>
                    <div className="ml-auto text-white/25 group-hover:text-white/60 transition-colors">→</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right - Form */}
          <Reveal delay={0.15} direction="right">
            <div
              className="glass rounded-2xl p-8"
              style={{ border: "1px solid rgba(59,130,246,0.15)" }}
            >
              <h3 className="font-display font-bold text-xl text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="What's on your mind?"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all resize-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className="btn-primary justify-center mt-2"
                  style={
                    status === "sent"
                      ? { background: "linear-gradient(135deg, #10B981, #059669)" }
                      : status === "sending"
                      ? { opacity: 0.7 }
                      : {}
                  }
                >
                  {status === "idle" && <><FiSend /> Send Message</>}
                  {status === "sending" && <><span className="animate-spin">⟳</span> Sending…</>}
                  {status === "sent" && <><FiCheck /> Sent! I'll be in touch</>}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
