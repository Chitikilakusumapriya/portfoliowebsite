import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-red-400 uppercase">
            Technical Expertise
          </p>
          <h2 className="section-title gradient-text">Skills</h2>
          <p className="section-subtitle mx-auto mt-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="mb-6 text-center text-lg font-semibold text-neutral-300 sm:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="glass-card glass-card-hover group flex flex-col items-center gap-3 rounded-2xl p-5"
                      data-cursor-hover
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition-all duration-300 group-hover:bg-red-500/20 group-hover:shadow-lg group-hover:shadow-red-500/20">
                        <Icon size={24} />
                      </div>
                      <span className="text-center text-sm font-medium text-neutral-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
