import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import resume from "../assets/My_resume.pdf";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const timeline = t("about.timeline");

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 leading-relaxed">{t("about.p1")}</p>
            <p className="mt-5 text-white/60 leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="mt-5 text-white/60 leading-relaxed">
              {t("about.p3")}
            </p>

            <div className="mt-9">
              <Button href={resume} icon={FiDownload}>
                {t("about.cv")}
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
                        item.type === "education"
                          ? "bg-slate-panel"
                          : "bg-amber-signal"
                      }`}
                    />
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-amber-signal/80">
                      {item.year}
                    </span>
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
