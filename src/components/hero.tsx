// components/Hero.tsx
import React from "react";
import RevealOnScroll from "./reveal-on-scroll";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[90vh]">
        {/* Profile Image — Mobile Only (tampil di atas teks) */}
        <div className="flex justify-center lg:hidden">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

            {/* Profile Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src="/images/r-profile.png"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-2 -right-6 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
              <p className="text-[10px] font-mono text-white whitespace-nowrap">
                AVAILABLE FOR WORK
              </p>
            </div>
          </div>
        </div>

        {/* Left Content */}
        <div className="lg:col-span-8 z-10">
          <RevealOnScroll>
            <p className="font-mono text-indigo-500 tracking-widest text-sm uppercase">
              01 // Web & Mobile developer
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-[3rem] leading-[0.9] tracking-tighter mb-8">
              <span className="block text-gray-400">CREATING</span>
              <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                DIGITAL
              </span>
              <span className="relative inline-block">
                REALITIES
                <svg
                  className="absolute w-full h-4 -bottom-2 left-0 text-indigo-500 opacity-50"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                  />
                </svg>
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
              I am a{" "}
              <span className="text-white font-medium">
                Web & Mobile Developer
              </span>{" "}
              focused on building modern applications with high performance,
              elegant interfaces, and interactive user experiences. Experienced
              in using <span className="text-white font-medium">Node.js</span>,{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Next</span>, dan{" "}
              <span className="text-white font-medium">Electron</span> to create
              scalable and futuristic digital solutions.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="flex flex-wrap gap-4 my-10">
              <a
                href="#work"
                className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Archive
                <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Content — Desktop Only */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

              {/* Profile Image */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <img
                  src="/images/r-profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-5 -right-5 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                <p className="text-xs font-mono text-white">
                  AVAILABLE FOR WORK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
