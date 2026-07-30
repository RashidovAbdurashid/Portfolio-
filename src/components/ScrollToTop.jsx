import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-7 right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-ink/90 text-amber-signal shadow-panel backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-signal"
        >
          <FiArrowUp aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
