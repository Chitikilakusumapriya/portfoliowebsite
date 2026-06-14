import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-red-400 uppercase">
            Academic Journey
          </p>
          <h2 className="section-title gradient-text">Education</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-6 h-full w-px bg-gradient-to-b from-red-500 via-red-500/50 to-transparent sm:left-1/2 sm:-translate-x-px" />

          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 flex items-start gap-6 sm:mb-16 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="hidden w-1/2 sm:block" />

              <div
                className={`w-full sm:w-1/2 ${
                  index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:text-left"
                }`}
              >
                <div
                  className={`glass-card glass-card-hover rounded-2xl p-6 ${
                    item.highlight ? "border-red-500/20 glow-red" : ""
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3 sm:justify-end">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        item.highlight
                          ? "bg-red-500/15 text-red-400"
                          : "bg-white/5 text-neutral-400"
                      } ${index % 2 === 0 ? "sm:order-last" : ""}`}
                    >
                      <BookOpen size={20} />
                    </div>
                    {item.period && (
                      <span className="text-sm font-medium text-red-400">{item.period}</span>
                    )}
                  </div>
                  <h3 className="mb-1 text-lg font-bold font-[family-name:var(--font-display)] text-white">
                    {item.institution}
                  </h3>
                  <p className="mb-3 text-sm text-neutral-400">{item.degree}</p>
                  <span
                    className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${
                      item.highlight
                        ? "bg-red-500/15 text-red-400"
                        : "bg-white/5 text-neutral-300"
                    }`}
                  >
                    {item.score}
                  </span>
                </div>
              </div>

              <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-1/2">
                <motion.div
                  className={`h-3 w-3 rounded-full ${
                    item.highlight ? "bg-red-500 glow-red" : "bg-neutral-600"
                  }`}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
