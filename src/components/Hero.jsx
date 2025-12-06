import React, { useState, useEffect } from "react";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Full Stack Developer",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentText = skills[currentSkill];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < currentText.length) {
            setDisplayText(currentText.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setDisplayText(currentText.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            // Finished deleting, move to next skill
            setIsDeleting(false);
            setCurrentSkill((currentSkill + 1) % skills.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentSkill, skills]);

  return (
    <header
      id="home"
      className="bg-gradient-to-br from-primary-500/15 to-purple-600/15 py-16 md:py-20 px-6 border-b border-primary-500/20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800 mb-4 leading-tight">
                Ilham Arip
              </h1>
              <div className="h-12 md:h-14 lg:h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 font-normal">
                  <span className="text-primary-500 font-semibold">
                    {displayText}
                  </span>
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm md:text-base">Available for work</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span>📍</span>
                <span className="text-sm md:text-base">Garut, Indonesia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 transition-all duration-300 hover:-translate-y-1"
              >
                Hubungi Saya
              </a>
              <a
                href="#experience"
                className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
              >
                Lihat Portfolio
              </a>
            </div>
          </div>

          {/* Right Side - Avatar */}
          <div className="w-full lg:w-[45%] order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>

              {/* Main Avatar */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl shadow-primary-500/40 border-4 border-white/90 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={profileImage} // ✅ path dari folder public
                  alt="Ilham Arip"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl shadow-lg animate-bounce">
                💻
              </div>
              <div
                className="absolute -bottom-2 -left-2 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-lg shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                📱
              </div>
              <div
                className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm shadow-lg animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                ⚡
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12 lg:mt-16 order-3">
          <div className="animate-bounce">
            <span className="text-slate-500 text-sm">Scroll untuk explore</span>
            <div className="mt-2">⬇️</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
