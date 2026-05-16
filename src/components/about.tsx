// components/About.tsx
import React from "react";
import RevealOnScroll from "./reveal-on-scroll";
import SkillBadge from "./skill-badge";
import TimelineItem from "./timeline-items";

const About: React.FC = () => {
  const skills = [
    { icon: "ph ph-atom", name: "React", color: "text-cyan-400" },
    { icon: "ph ph-hexagon", name: "Node.js", color: "text-green-500" },
    { icon: "ph ph-file-code", name: "TypeScript", color: "text-blue-500" },
    { icon: "ph ph-desktop", name: "Electron", color: "text-gray-300" },
    { icon: "ph ph-database", name: "Next", color: "text-red-500" },
    { icon: "ph ph-paint-brush", name: "Tailwind", color: "text-teal-400" },
    { icon: "ph ph-brain", name: "AI APIs", color: "text-purple-400" },
    { icon: "ph ph-cloud", name: "Laravel", color: "text-orange-400" },
  ];

  const timeline = [
    {
      year: "2025 — PRESENT",
      title: "Freelance Fullstack Developer",
      company: "Remote / Independent",
      description:
        "Designing and developing modern digital products with a focus on clean UI, scalable backend systems, and high-performance web experiences.",
      active: true,
    },
    {
      year: "2025",
      title: "Backend Developer Intern",
      company: "Siap Guna",
      description:
        "Built backend APIs, integrated frontend systems, and deployed production-ready applications using modern web technologies and cloud services.",
      active: false,
    },
    {
      year: "2022 — PRESENT",
      title: "Open Source & Self Learning",
      company: "Personal Lab",
      description:
        "Experimenting with AI-powered applications, Electron apps, modern frontend frameworks, and fullstack architecture through continuous learning and personal projects.",
      active: false,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] px-5 relative">
      <div className="max-w-7xl mx-auto w-full px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
          <RevealOnScroll>
            <>
              <p className="font-mono text-pink-500 text-sm tracking-widest mb-2">
                02 // THE PERSONA
              </p>
              <h2 className="font-display text-5xl md:text-4.5xl font-semibold">
                Architecting
                <br />
                Digital{" "}
                <span className="italic text-gray-400">Experiences</span>
              </h2>
            </>
          </RevealOnScroll>
          <p className="text-gray-500 font-mono text-sm max-w-xs text-right mt-6 md:mt-0">
            A blend of technical precision and creative vision, shaping the web
            of tomorrow.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <RevealOnScroll delay={0.1}>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                I build{" "}
                <span className="text-white font-medium">
                  modern digital experiences
                </span>{" "}
                that combine performance, scalability, and clean visual design.
                Passionate about creating applications that feel smooth,
                interactive, and meaningful for users.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <p className="text-gray-400 leading-relaxed">
                As a Fullstack Web & Mobile Developer, I work with{" "}
                <span className="text-white">React</span>,{" "}
                <span className="text-white">Node.js</span>,{" "}
                <span className="text-white">Next</span>, and{" "}
                <span className="text-white">Electron</span> to craft
                high-quality applications from backend architecture to modern
                frontend interfaces. I enjoy transforming ideas into fast,
                responsive, and visually engaging products.
              </p>
            </RevealOnScroll>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center group">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="4"
                      strokeDasharray="283"
                      strokeDashoffset="28"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-bold font-display">
                    87<span className="text-sm text-gray-400">%</span>
                  </span>
                </div>
                <span className="font-mono text-xs tracking-wider text-gray-400">
                  FRONTEND
                  <br />
                  LOGIC
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center group">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#D946EF"
                      strokeWidth="4"
                      strokeDasharray="283"
                      strokeDashoffset="42"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-bold font-display">
                    90<span className="text-sm text-gray-400">%</span>
                  </span>
                </div>
                <span className="font-mono text-xs tracking-wider text-gray-400">
                  BACKEND
                  <br />
                  ARCH
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 flex flex-col gap-12">
            {/* Tech Stack */}
            <RevealOnScroll delay={0.2}>
              <div>
                <h3 className="font-mono text-sm text-gray-400 mb-6 uppercase tracking-widest border-b border-white/5 pb-2">
                  Core Arsenal
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skills.map((skill, idx) => (
                    <SkillBadge key={idx} {...skill} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Timeline */}
            <RevealOnScroll delay={0.25}>
              <div>
                <h3 className="font-mono text-sm text-gray-400 mb-6 uppercase tracking-widest border-b border-white/5 pb-2">
                  Chronology
                </h3>
                <div className="relative border-l border-gray-800 ml-3 flex flex-col gap-8">
                  {timeline.map((item, idx) => (
                    <TimelineItem key={idx} {...item} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
