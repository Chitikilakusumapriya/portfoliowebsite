import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 0.3 : 1 }}
        transition={{ duration: 0.5 }}
        className={isLoading ? "pointer-events-none" : ""}
      >
        <CustomCursor />
        <ScrollProgress />
        <ParticleBackground />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero contentReady={!isLoading} />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
