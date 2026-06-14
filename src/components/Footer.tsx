import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <p className="text-lg font-bold font-[family-name:var(--font-display)] gradient-text">
              Kusumapriya Chitikila
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Computer Science Undergraduate | Aspiring Software Developer
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
            aria-label="Scroll to top"
            data-cursor-hover
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-sm text-neutral-500">
            Built with <Heart size={14} className="text-red-500" /> by Kusumapriya Chitikila
          </p>
          <p className="mt-2 text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
