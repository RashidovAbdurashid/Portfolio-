import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProgressBar from "../components/ProgressBar";
import { skillGroups } from "../data/skills";
import { useLanguage } from "../i18n/LanguageContext";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillGroups[0].id);
  const activeGroup = skillGroups.find((g) => g.id === activeTab);

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-40 [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Tools I reach for, ordered by category"
          description="Grouped by what each one is responsible for — not just a list, but a working stack."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`relative rounded-full px-5 py-2.5 font-body text-sm font-medium transition-colors duration-300 ${
                activeTab === group.id
                  ? "bg-amber-signal text-void"
                  : "border border-white/10 text-white/55 hover:text-paper"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <motion.p
          key={activeGroup.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-white/35"
        >
          {activeGroup.note}
        </motion.p>

        <motion.div
          key={activeGroup.id + "-grid"}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeGroup.skills.map((skill, i) => (
            <ProgressBar
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              delay={i * 0.05}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
