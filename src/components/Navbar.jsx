import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 transition-all duration-500 sm:px-8 ${
            scrolled ? "glass shadow-panel py-2.5" : "py-3"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="font-display text-lg font-bold tracking-tight text-paper"
          >
            A<span className="text-amber-signal">.</span>Rashidov
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="relative px-4 py-2 font-body text-sm font-medium text-white/60 transition-colors duration-300 hover:text-paper"
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/8"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
                {active === link.id && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-signal" />
                )}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden rounded-full bg-amber-signal px-5 py-2.5 font-body text-sm font-semibold text-void transition-transform duration-300 hover:scale-105 md:inline-flex"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper md:hidden"
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={active}
        onNavigate={handleNavClick}
      />
    </>
  );
}
