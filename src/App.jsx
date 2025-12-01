import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceTimeline from "./components/Experiences";
import Experience from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary-500 via-purple-600 via-pink-500 via-blue-500 to-cyan-500 bg-size-400 bg-pos-0 animate-mesh-gradient">
        <div className="mesh-overlay absolute inset-0 pointer-events-none z-10"></div>

        <Navbar />

        <div className="relative z-20 pt-20 px-4 pb-10 md:px-6">
          <div className="max-w-6xl mx-auto bg-white/95 rounded-3xl md:rounded-4xl shadow-2xl overflow-hidden border border-white/50">
            <Hero />

            <div className="px-6 md:px-8 py-12 md:py-16">
              <About />
              <Skills />
              <Projects/>
              <ExperienceTimeline />
              <Contact />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
