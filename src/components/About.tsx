import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-red-400 uppercase">
            Get to know me
          </p>
          <h2 className="section-title gradient-text">About Me</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card glass-card-hover rounded-3xl p-8 sm:p-12"
        >
          <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-display)]">
                Kusumapriya Chitikila
              </h3>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <MapPin size={14} />
                Visakhapatnam, Andhra Pradesh, India
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            I am a Computer Science and Engineering student at{" "}
            <span className="font-medium text-red-400">Vel Tech University</span> with a CGPA of{" "}
            <span className="font-semibold text-white">9.09</span>. I am passionate about software
            development, backend engineering, databases, and problem solving. I enjoy building
            practical applications using Python, Java, SQL, and modern web technologies while
            continuously improving my technical skills.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-3">
              <p className="text-xs tracking-wider text-neutral-500 uppercase">CGPA</p>
              <p className="text-2xl font-bold text-red-400">9.09</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/3 px-5 py-3">
              <p className="text-xs tracking-wider text-neutral-500 uppercase">Expected Graduation</p>
              <p className="text-2xl font-bold text-white">2027</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/3 px-5 py-3">
              <p className="text-xs tracking-wider text-neutral-500 uppercase">Focus</p>
              <p className="text-lg font-semibold text-white">Backend & Full-Stack</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
