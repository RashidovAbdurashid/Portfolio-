import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const iconMap = {
  html5: SiHtml5,
  css3: SiCss,
  sass: SiSass,
  javascript: SiJavascript,
  react: SiReact,
  vite: SiVite,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  figma: SiFigma,
};

export default function ProgressBar({ name, icon, level, delay = 0 }) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl border border-white/8 bg-ink/60 p-5 transition-colors duration-300 hover:border-amber-signal/40"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-lg text-white/70 transition-colors duration-300 group-hover:bg-amber-signal/15 group-hover:text-amber-signal">
            {Icon && <Icon aria-hidden="true" />}
          </span>
          <span className="font-body text-sm font-medium text-paper">{name}</span>
        </div>
        <span className="font-mono text-xs text-white/40">{level}%</span>
      </div>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: delay + 0.15, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-amber-signal/70 to-amber-signal"
        />
      </div>
    </motion.div>
  );
}
