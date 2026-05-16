// App.tsx
import { useEffect } from "react";
import Spotlight from "./components/spotlight";
import BackgroundShapes from "./components/background-shapes";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";

function App() {
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
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
