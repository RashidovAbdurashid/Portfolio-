import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProjectCard({ project, index }) {
  const ring =
    project.accent === "amber"
      ? "group-hover:border-amber-signal/50"
      : "group-hover:border-slate-panel";
  const { t } = useLanguage();
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-ink/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-panel ${ring}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-void">
        <div className="flex items-center gap-1.5 border-b border-white/6 bg-white/[0.03] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 truncate font-mono text-[11px] text-white/30">
            {project.live.replace("https://", "")}
          </span>
        </div>
        <div
          className={`relative flex h-[calc(100%-38px)] w-full items-center justify-center transition-transform duration-700 group-hover:scale-[1.04] ${
            project.accent === "amber"
              ? "bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.22),transparent_60%),linear-gradient(135deg,#121212,#0B0B0F)]"
              : "bg-[radial-gradient(circle_at_30%_20%,rgba(30,41,59,0.9),transparent_60%),linear-gradient(135deg,#121212,#0B0B0F)]"
          }`}
        >
          <span className="select-none font-display text-6xl font-semibold text-white/10">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
          <div className="absolute inset-0 bg-grid-faint bg-grid opacity-30" />
        </div>
        <div className="absolute inset-0 top-[38px] flex items-center justify-center bg-void/70 opacity-0 backdrop-blur-sm transition-opacity duration-400 group-hover:opacity-100">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-signal px-6 py-3 font-body text-sm font-semibold text-void transition-transform duration-300 hover:scale-105"
          >
            Open Live Demo <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-amber-signal/70">
              {project.id}
            </span>
            <h3 className="mt-1 font-display text-xl font-semibold text-paper">
              {project.name}
            </h3>
          </div>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-paper transition-colors duration-300 hover:text-amber-signal"
          >
            Live Demo <FiArrowUpRight aria-hidden="true" />
          </a>
          <span className="h-4 w-px bg-white/10" />
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-white/50 transition-colors duration-300 hover:text-paper"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
