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

        <RevealOnScroll>
          <div className="mb-10 sm:mb-12 md:mb-16">
            <p className="mb-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-indigo-400">
              02 // About / Expertise
            </p>

            <h2 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight text-white">
              Architecting{" "}
              <span className="text-gray-500">Digital Experiences.</span>
            </h2>

            <div className="mt-5 h-px w-16 bg-indigo-500 sm:w-24" />
          </div>
        </RevealOnScroll>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-12 md:gap-12">
          {/* ==========================================
      LEFT COLUMN
  ========================================== */}
          <div className="flex flex-col gap-7 sm:gap-8 md:col-span-5">
            <RevealOnScroll delay={0.1}>
              <p className="text-lg sm:text-xl leading-relaxed font-light text-gray-300">
                I build{" "}
                <span className="font-medium text-white">
                  modern digital experiences
                </span>{" "}
                that combine performance, scalability, and clean visual design.
                Passionate about creating applications that feel smooth,
                interactive, and meaningful for users.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <p className="text-sm sm:text-base leading-7 text-gray-400">
                As a Fullstack Web & Mobile Developer, I work with{" "}
                <span className="text-gray-200">React</span>,{" "}
                <span className="text-gray-200">Node.js</span>,{" "}
                <span className="text-gray-200">Next</span>, and{" "}
                <span className="text-gray-200">Electron</span> to craft
                high-quality applications from backend architecture to modern
                frontend interfaces. I enjoy transforming ideas into fast,
                responsive, and visually engaging products.
              </p>
            </RevealOnScroll>

            {/* Stats */}
            <div className="mt-2 grid grid-cols-2 gap-3 sm:gap-5 md:mt-4">
              {/* Frontend */}
              <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-6 text-center transition-colors hover:bg-white/[0.06]">
                <div className="relative mx-auto mb-3 h-16 w-16 sm:mb-4 sm:h-20 sm:w-20">
                  <svg className="h-full w-full -rotate-90">
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
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-bold font-display">
                    87
                    <span className="text-xs sm:text-sm text-gray-400">%</span>
                  </span>
                </div>

                <span className="font-mono text-[9px] sm:text-xs tracking-wider text-gray-400">
                  FRONTEND
                  <br />
                  LOGIC
                </span>
              </div>

              {/* Backend */}
              <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-6 text-center transition-colors hover:bg-white/[0.06]">
                <div className="relative mx-auto mb-3 h-16 w-16 sm:mb-4 sm:h-20 sm:w-20">
                  <svg className="h-full w-full -rotate-90">
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
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-bold font-display">
                    90
                    <span className="text-xs sm:text-sm text-gray-400">%</span>
                  </span>
                </div>

                <span className="font-mono text-[9px] sm:text-xs tracking-wider text-gray-400">
                  BACKEND
                  <br />
                  ARCH
                </span>
              </div>
            </div>
          </div>

          {/* ==========================================
      RIGHT COLUMN
  ========================================== */}
          <div className="flex flex-col gap-10 sm:gap-12 md:col-span-7">
            {/* Tech Stack */}
            <RevealOnScroll delay={0.2}>
              <div>
                <h3 className="mb-5 border-b border-white/5 pb-2 font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.2em]">
                  Core Arsenal
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
                  {skills.map((skill, idx) => (
                    <SkillBadge key={idx} {...skill} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Timeline */}
            <RevealOnScroll delay={0.25}>
              <div>
                <h3 className="mb-5 border-b border-white/5 pb-2 font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.2em]">
                  Chronology
                </h3>

                <div className="relative ml-2 sm:ml-3 flex flex-col gap-7 border-l border-gray-800 pl-5 sm:gap-8 sm:pl-6">
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
