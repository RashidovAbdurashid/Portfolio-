import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiLayers,
  FiLayout,
  FiShare2,
  FiGrid,
} from "react-icons/fi";

const iconMap = {
  code: FiCode,
  device: FiSmartphone,
  react: FiLayers,
  layout: FiLayout,
  api: FiShare2,
  ui: FiGrid,
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-ink to-void p-8 transition-colors duration-400 hover:border-amber-signal/40"
    >
      <span className="absolute -right-4 -top-6 font-display text-7xl font-bold text-white/[0.03] transition-colors duration-400 group-hover:text-amber-signal/[0.08]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-xl text-amber-signal">
        {Icon && <Icon aria-hidden="true" />}
      </span>
      <h3 className="relative mt-6 font-display text-lg font-semibold text-paper">
        {service.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/55">
        {service.description}
      </p>
    </motion.div>
  );
}
