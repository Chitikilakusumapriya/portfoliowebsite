import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";
import { achievements } from "../data/portfolio";

const icons = [Award, Trophy, Star];

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-red-400 uppercase">
            Recognition
          </p>
          <h2 className="section-title gradient-text">Achievements & Certifications</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-card glass-card-hover group rounded-2xl p-6 text-center"
                data-cursor-hover
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 text-red-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/20">
                  <Icon size={26} />
                </div>
                <h3 className="mb-2 text-lg font-semibold font-[family-name:var(--font-display)] text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
