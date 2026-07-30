import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

function getInitialLang() {
  const stored = localStorage.getItem("lang");
  if (stored && translations[stored]) return stored;
  const browserLang = navigator.language?.slice(0, 2);
  return translations[browserLang] ? browserLang : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => {
    return (path) => {
      const keys = path.split(".");
      let value = translations[lang];
      for (const key of keys) {
        value = value?.[key];
      }
      return value ?? path;
    };
  }, [lang]);

  const value = { lang, setLang, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
