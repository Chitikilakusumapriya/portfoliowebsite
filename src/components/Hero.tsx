import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react";
import { typingRoles } from "../data/portfolio";
import AvatarAssistant from "./AvatarAssistant";

export default function Hero({ contentReady = true }: { contentReady?: boolean }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % typingRoles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium tracking-widest text-red-400 uppercase">
              Portfolio
            </p>
            <h1 className="mb-4 text-4xl leading-tight font-bold font-[family-name:var(--font-display)] sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="gradient-text glow-text">Kusumapriya Chitikila</span>
            </h1>
            <p className="mb-6 text-lg text-neutral-400 sm:text-xl">
              Computer Science Undergraduate | Aspiring Software Developer
            </p>
            <div className="mb-8 flex h-8 items-center justify-center text-xl font-semibold text-neutral-200 lg:justify-start">
              <span className="typing-cursor">
                {displayText}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
              data-cursor-hover
            >
              <FolderOpen size={18} />
              View Projects
            </button>
            <a
              href="/resume.txt"
              download="Kusumapriya_Chitikila_Resume.txt"
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 hover:bg-white/10"
              data-cursor-hover
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="group flex items-center gap-2 rounded-xl border border-red-500/30 px-6 py-3 text-sm font-semibold text-red-400 transition-all duration-300 hover:bg-red-500/10"
              data-cursor-hover
            >
              <Mail size={18} />
              Contact Me
            </button>
          </motion.div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <AvatarAssistant autoSpeak={contentReady} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollTo("#about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-red-400"
          aria-label="Scroll to about section"
          data-cursor-hover
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
}
