import { FiGithub, FiSend, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-ink/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-white/40">
          © {year} Abdurashid Rashidov. All rights reserved.
        </p>

        <div className="flex items-center gap-6 font-body text-sm text-white/55">
          <a
            href="https://github.com/RashidovAbdurashid"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-amber-signal"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://t.me/first_7_01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-amber-signal"
          >
            <FiSend aria-hidden="true" /> Telegram
          </a>
          <a
            href="mailto:rashidov.dev@gmail.com"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-amber-signal"
          >
            <FiMail aria-hidden="true" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
