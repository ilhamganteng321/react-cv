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
    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(
          this.getAttribute("href") as string,
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
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
