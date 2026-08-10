import { useEffect, useState } from "react";

import Spotlight from "./components/spotlight";
import BackgroundShapes from "./components/background-shapes";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";
import ProjectDetail, {
  type ProjectDetailData,
} from "./components/project-detail";

function App() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDetailData | null>(null);

  useEffect(() => {
    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handleClick = (e: Event, anchor: HTMLAnchorElement) => {
      e.preventDefault();

      const href = anchor.getAttribute("href");

      if (!href) return;

      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => handleClick(e, anchor));
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.replaceWith(anchor.cloneNode(true));
      });
    };
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <Spotlight />
      <BackgroundShapes />
      <Navbar />

      {selectedProject ? (
        // ====================================
        // PROJECT DETAIL
        // ====================================
        <ProjectDetail
          project={selectedProject}
          onBack={() => {
            setSelectedProject(null);

            // Kembali ke section Projects
            setTimeout(() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 50);
          }}
        />
      ) : (
        // ====================================
        // MAIN PORTFOLIO
        // ====================================
        <main>
          <Hero />
          <About />

          <Work
            onViewProject={(project) => {
              setSelectedProject(project);

              // Scroll ke paling atas
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />

          <Contact />
        </main>
      )}
    </div>
  );
}

export default App;
