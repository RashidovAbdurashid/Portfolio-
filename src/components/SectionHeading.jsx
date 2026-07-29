import { motion } from "framer-motion";

export default function SectionHeading({ index, eyebrow, title, description, align = "left" }) {
  return (
    <div className={`mb-14 md:mb-20 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-amber-signal ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-amber-signal/60" />
        {index && <span>{index}</span>}
        <span>{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
        className="mt-4 font-display text-3xl font-semibold text-paper sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          className="mt-5 max-w-xl text-white/55"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
