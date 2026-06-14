import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { contactInfo } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-red-400 uppercase">
            Get In Touch
          </p>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <p className="section-subtitle mx-auto mt-4">
            I'm open to internships, collaborations, and software engineering opportunities
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="mb-6 text-xl font-bold font-[family-name:var(--font-display)]">
              Contact Information
            </h3>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: "Location", value: contactInfo.location, href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider text-neutral-500 uppercase">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-neutral-200 transition-colors hover:text-red-400"
                        data-cursor-hover
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-neutral-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/5 pt-8">
              <p className="mb-4 text-sm text-neutral-500">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="GitHub"
                  data-cursor-hover
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="LinkedIn"
                  data-cursor-hover
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const message = formData.get("message") as string;
              window.location.href = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}\n\nFrom: ${email}`;
            }}
          >
            <h3 className="mb-6 text-xl font-bold font-[family-name:var(--font-display)]">
              Send a Message
            </h3>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-neutral-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-neutral-400">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-neutral-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
                data-cursor-hover
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
