import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Button from "../components/Button";
import SocialIcons from "../components/SocialIcons";
import { useTypewriter } from "../hooks/useTypewriter";

const roles = ["Frontend Developer", "React Engineer", "UI Craftsman"];

export default function Hero() {
  const typed = useTypewriter(roles);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-signal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-slate-panel/40 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono text-sm text-amber-signal"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-signal" />
            </span>
            Available for new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Abdurashid</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 flex h-10 items-center font-display text-2xl font-medium text-white/60 sm:text-3xl"
          >
            <span>{typed}</span>
            <span className="ml-1 inline-block h-7 w-[3px] animate-blink bg-amber-signal" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-md text-white/55"
          >
            I build fast, accessible interfaces with React and modern tooling —
            turning design intent into production-grade code, component by
            component.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/resume.pdf" icon={FiDownload}>
              Download CV
            </Button>
            <Button
              href="#contact"
              variant="outline"
              icon={FiArrowRight}
              onClick={(e) => scrollTo(e, "contact")}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10"
          >
            <SocialIcons />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-float rounded-2xl border border-white/8 bg-ink/80 shadow-panel">
            <div className="flex items-center gap-1.5 border-b border-white/6 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]/70" />
              <span className="ml-3 font-mono text-[11px] text-white/35">developer.jsx</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-7 text-white/70 sm:text-sm">
              <p><span className="text-amber-signal">const</span> developer = {"{"}</p>
              <p className="pl-4">name: <span className="text-emerald-300">'Abdurashid Rashidov'</span>,</p>
              <p className="pl-4">role: <span className="text-emerald-300">'Frontend Developer'</span>,</p>
              <p className="pl-4">
                stack: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Vite'</span>, <span className="text-emerald-300">'Tailwind'</span>],
              </p>
              <p className="pl-4">focus: <span className="text-emerald-300">'clean, fast UI'</span>,</p>
              <p>{"};"}</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-white/8 bg-ink/90 px-5 py-4 shadow-panel">
            <span className="font-display text-2xl font-bold text-amber-signal">3+</span>
            <span className="max-w-[7rem] font-body text-xs leading-tight text-white/55">
              Years building interfaces
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
