import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe, FiChevronDown } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";
import { languages } from "../i18n/translations";


export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 font-mono text-xs font-medium text-white/70 transition-colors duration-300 hover:border-amber-signal/50 hover:text-amber-signal"
      >
        <FiGlobe aria-hidden="true" />
        {lang.toUpperCase()}
        <FiChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="glass absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-xl border border-white/10 py-1 shadow-panel"
          >
            {languages.map(({ code, label }) => (
              <li key={code} role="option" aria-selected={lang === code}>
                <button
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 font-body text-sm transition-colors duration-200 ${
                    lang === code
                      ? "text-amber-signal"
                      : "text-white/70 hover:text-paper"
                  }`}
                >
                  {label}
                  {lang === code && (
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-signal" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
