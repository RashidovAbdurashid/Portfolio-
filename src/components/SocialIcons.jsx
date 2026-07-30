import { motion } from "framer-motion";
import { FiGithub, FiSend, FiMail, FiLinkedin } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";

const socials = [
  {
    id: "github",
    icon: FiGithub,
    href: "https://github.com/RashidovAbdurashid",
    label: "GitHub",
  },
  {
    id: "telegram",
    icon: FiSend,
    href: "https://t.me/first_7_01",
    label: "Telegram",
  },
  {
    id: "email",
    icon: FiMail,
    href: "mailto:rashidov.dev@gmail.com",
    label: "Email",
  },
  {
    id: "linkedin",
    icon: FiLinkedin,
    href: "https://linkedin.com/in/RashidovAbdurashid",
    label: "LinkedIn",
  },
];

export default function SocialIcons({ className = "" }) {
  const { t } = useLanguage();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ id, icon: Icon, href, label }) => (
        <motion.a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          whileHover={{ y: -3, borderColor: "rgba(245,158,11,0.6)" }}
          whileTap={{ scale: 0.94 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/70 transition-colors duration-300 hover:text-amber-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-signal"
        >
          <Icon className="text-lg" aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  );
}
