import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { navLinks } from "../data/nav";
import SocialIcons from "./SocialIcons";

export default function MobileMenu({ open, onClose, active, onNavigate }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-void/98 backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-display text-lg font-bold text-paper">
              A<span className="text-amber-signal">.</span>Rashidov
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col items-start gap-2 px-8" aria-label="Mobile primary">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => onNavigate(e, link.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className={`font-display text-4xl font-semibold transition-colors duration-300 ${
                  active === link.id ? "text-amber-signal" : "text-paper/80"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="absolute bottom-10 left-8">
            <SocialIcons />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
