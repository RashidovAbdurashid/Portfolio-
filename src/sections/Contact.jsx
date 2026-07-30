import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import SocialIcons from "../components/SocialIcons";
import { useLanguage } from "../i18n/LanguageContext";

const fields = [
  { id: "name", label: "Name", type: "text", icon: FiUser, placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", icon: FiMail, placeholder: "you@email.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (id) => (e) => setForm((f) => ({ ...f, [id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something worth shipping"
          description="Have a project, a role, or just a question? I read every message."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl border border-white/8 bg-ink/60 p-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-paper">
                Prefer GitHub or a direct message?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Check out my code and past work, or reach out directly through
                any of the channels below.
              </p>
              <a
                href="https://github.com/RashidovAbdurashid"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-body text-sm font-semibold text-paper transition-colors duration-300 hover:border-amber-signal/60 hover:text-amber-signal"
              >
                <FiGithub aria-hidden="true" /> View GitHub Profile <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                Find me elsewhere
              </p>
              <SocialIcons />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/8 bg-ink/60 p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {fields.map(({ id, label, type, icon: Icon, placeholder }) => (
                <div key={id} className="relative">
                  <label htmlFor={id} className="mb-2 block font-body text-sm text-white/55">
                    {label}
                  </label>
                  <div className="relative">
                    <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30" aria-hidden="true" />
                    <input
                      id={id}
                      type={type}
                      required
                      value={form[id]}
                      onChange={handleChange(id)}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-white/10 bg-void/60 py-3.5 pl-11 pr-4 font-body text-sm text-paper placeholder:text-white/25 outline-none transition-colors duration-300 focus:border-amber-signal/60"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 relative">
              <label htmlFor="message" className="mb-2 block font-body text-sm text-white/55">
                Message
              </label>
              <div className="relative">
                <FiMessageSquare className="pointer-events-none absolute left-4 top-4 text-white/30" aria-hidden="true" />
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-void/60 py-3.5 pl-11 pr-4 font-body text-sm text-paper placeholder:text-white/25 outline-none transition-colors duration-300 focus:border-amber-signal/60"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-signal px-7 py-3.5 font-body text-sm font-semibold text-void transition-colors duration-300 hover:bg-amber-400 sm:w-auto"
            >
              {status === "sent" ? "Message Sent" : "Send Message"}
            </motion.button>
            {status === "sent" && (
              <p className="mt-3 font-mono text-xs text-amber-signal">
                Thanks — I'll get back to you soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
