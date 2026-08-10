// components/Work.tsx
import React, { useState, useRef } from "react";
import RevealOnScroll from "./reveal-on-scroll";
import ProjectCard from "./project-card";
import { projects } from "../types/project";
import type { ProjectDetailData } from "./project-detail";

interface WorkProps {
  onViewProject: (project: ProjectDetailData) => void;
}

const Work: React.FC<WorkProps> = ({ onViewProject }) => {
  type TabType = "all" | "web" | "mobile" | "desktop" | "design";
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs: {
    id: TabType;
    label: string;
    icon: string;
    count: number;
  }[] = [
    {
      id: "all",
      label: "All Projects",
      icon: "ph-grid-four",
      count: projects.length,
    },
    {
      id: "web",
      label: "Web Apps",
      icon: "ph-browser",
      count: projects.filter((p) => p.type === "web").length,
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: "ph-phone",
      count: projects.filter((p) => p.type === "mobile").length,
    },
    {
      id: "desktop",
      label: "Desktop",
      icon: "ph-monitor",
      count: projects.filter((p) => p.type === "desktop").length,
    },
    {
      id: "design",
      label: "UI/UX Design",
      icon: "ph-palette",
      count: projects.filter((p) => p.type === "design").length,
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  const getCategoryLabel = (type: string) => {
    switch (type) {
      case "web":
        return "WEB APPLICATION";
      case "mobile":
        return "MOBILE APP";
      case "desktop":
        return "DESKTOP SOFTWARE";
      case "design":
        return "UI/UX DESIGN";
      default:
        return "PROJECT";
    }
  };

  const getGradientColor = (type: string) => {
    switch (type) {
      case "web":
        return "from-blue-500 to-cyan-500";
      case "mobile":
        return "from-purple-500 to-pink-500";
      case "desktop":
        return "from-green-500 to-emerald-500";
      case "design":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section
      id="work"
      className="py-24 overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="max-w-7xl mx-auto w-full px-6">
        {/* Header */}
        <div className="mb-12">
          <RevealOnScroll>
            <>
              <p className="font-mono text-indigo-500 text-sm tracking-widest mb-2">
                03 // SELECTED ARCHIVE
              </p>
              <h2 className="font-display text-5xl md:text-4.5xl font-bold uppercase tracking-tighter">
                Featured{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl">
                A curated collection of my best projects spanning web
                applications, mobile apps, and desktop software.
              </p>
            </>
          </RevealOnScroll>
        </div>

        {/* Tabs */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <i className={`${tab.icon} text-base`}></i>
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Horizontal Scroll Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20
w-10 h-10 rounded-full bg-black/50 backdrop-blur-md
border border-white/10 flex items-center justify-center
hover:bg-indigo-500 hover:border-indigo-500 transition-all
opacity-100 md:opacity-0 md:group-hover:opacity-100
translate-x-0 md:-translate-x-5 md:group-hover:translate-x-0
duration-300"
          >
            <i className="ph ph-caret-left text-xl"></i>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
w-10 h-10 rounded-full bg-black/50 backdrop-blur-md
border border-white/10 flex items-center justify-center
hover:bg-indigo-500 hover:border-indigo-500 transition-all
opacity-100 md:opacity-0 md:group-hover:opacity-100
translate-x-0 md:translate-x-5 md:group-hover:translate-x-0
duration-300"
          >
            <i className="ph ph-caret-right text-xl"></i>
          </button>

          {/* Decorative Frame */}
          <div className="absolute -inset-4 border border-white/5 rounded-3xl pointer-events-none hidden lg:block">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-indigo-500/30 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-pink-500/30 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-indigo-500/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-pink-500/30 rounded-br-3xl"></div>
          </div>

          {/* Scrollable Content */}
          <div
            ref={scrollContainerRef}
            className="relative z-10 flex overflow-x-auto gap-6 pb-8 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`${
                  filteredProjects.length === 1
                    ? "w-full max-w-sm mx-auto"
                    : "min-w-[320px] md:min-w-[380px] lg:min-w-[420px]"
                }`}
              >
                <RevealOnScroll delay={idx * 0.05}>
                  <ProjectCard
                    title={project.title}
                    category={getCategoryLabel(project.type)}
                    description={project.description}
                    tags={project.tags}
                    photoUrl={project.photoUrl}
                    icon={project.icon}
                    iconGradient={
                      project.iconGradient || getGradientColor(project.type)
                    }
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    features={project.features}
                    onView={() => onViewProject(project)}
                  />
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Counter */}
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-sm text-gray-400">
              Showing{" "}
              <span className="text-white font-bold">
                {filteredProjects.length}
              </span>{" "}
              of <span className="text-white font-bold">{projects.length}</span>{" "}
              projects
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Work;
