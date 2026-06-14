import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-red-400 uppercase">
            My Work
          </p>
          <h2 className="section-title gradient-text">Projects</h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of applications I've built to solve real-world problems
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              data-cursor-hover
            >
              <div className="glass-card glass-card-hover relative overflow-hidden rounded-3xl p-8 h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                      Project {index + 1}
                    </span>
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10 group-hover:text-red-400"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold font-[family-name:var(--font-display)] text-white transition-colors group-hover:text-red-400">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-neutral-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-red-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/5 bg-white/3 px-3 py-1 text-xs font-medium text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-red-500/5 blur-2xl transition-all duration-500 group-hover:bg-red-500/15"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
