// components/Hero.tsx
import React from "react";
import RevealOnScroll from "./reveal-on-scroll";
import FloatingCards from "./flating-cards";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[90vh]">
        {/* Left Content */}
        <div className="lg:col-span-8 z-10">
          <RevealOnScroll>
            <p className="font-mono text-indigo-500 tracking-widest text-sm uppercase">
              Web & Mobile developer
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
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Archive
                <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              {/* <button className="px-8 py-4 rounded-full font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 border border-transparent hover:border-gray-700">
                <i className="ph ph-download-simple"></i>
                Get Manifesto PDF
              </button> */}
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <FloatingCards />
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
