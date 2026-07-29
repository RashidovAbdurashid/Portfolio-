import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { timeline } from "../data/timeline";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="About Me" title="A developer who cares about the details" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 leading-relaxed">
              I'm Abdurashid Rashidov, a frontend developer focused on building
              interfaces that feel fast, look deliberate, and hold up on every
              screen size. I care about the gap between a design file and a
              real, working product — that's the part I enjoy solving.
            </p>
            <p className="mt-5 text-white/60 leading-relaxed">
              My day-to-day toolkit is React, Vite and Tailwind CSS, backed by
              a working knowledge of Node.js and databases so I can speak the
              same language as the backend of a project, not just the surface
              of it.
            </p>
            <p className="mt-5 text-white/60 leading-relaxed">
              Outside of shipped projects, I spend time refining components,
              reading through other developers' code, and looking for the
              smallest way to make an interface feel one step more polished.
            </p>

            <div className="mt-9">
              <Button href="/resume.pdf" icon={FiDownload}>
                Download CV
              </Button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-[9px]" />
            <ul className="space-y-8">
              {timeline.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-9 sm:pl-11"
                >
                  <span
                    className={`absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:h-5 sm:w-5 ${
                      item.type === "education"
                        ? "border-slate-panel bg-void"
                        : "border-amber-signal bg-void"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.type === "education" ? "bg-slate-panel" : "bg-amber-signal"
                      }`}
                    />
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-amber-signal/80">{item.year}</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white/40">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{item.place}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
