"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { cvData } from "../lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t(cvData.common.nav.home), href: "#home" },
    { name: t(cvData.common.nav.about), href: "#about" },
    { name: t(cvData.common.nav.specialization), href: "#specialization" },
    { name: t(cvData.common.nav.skills), href: "#core-soft-skills" },
    { name: t(cvData.common.nav.clients), href: "#clients" },
    { name: t(cvData.common.nav.tech), href: "#tech-stack" },
    { name: t(cvData.common.nav.experience), href: "#experience" },
    { name: t(cvData.common.nav.education), href: "#education" },
    { name: t(cvData.common.nav.contact), href: "#contact" },
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="shrink-0 mr-8 flex items-center">
          <img
            src="/logo_transparente.png"
            alt="Logo CCF"
            className="h-20 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Language Switcher */}
          <button
            onClick={handleLanguageToggle}
            className="ml-4 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center gap-1.5"
          >
            <span className={language === 'es' ? 'text-blue-600' : 'opacity-40'}>ES</span>
            <span className="w-px h-3 bg-slate-200"></span>
            <span className={language === 'en' ? 'text-blue-600' : 'opacity-40'}>EN</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="xl:hidden flex items-center gap-4">
          {/* Mobile Language Switcher */}
          <button
            onClick={handleLanguageToggle}
            className="px-2.5 py-1 rounded-full border border-slate-200 text-[10px] font-bold text-slate-600 transition-all flex items-center gap-1"
          >
            <span className={language === 'es' ? 'text-blue-600' : 'opacity-40'}>ES</span>
            <span className="w-px h-2 bg-slate-200"></span>
            <span className={language === 'en' ? 'text-blue-600' : 'opacity-40'}>EN</span>
          </button>

          <button
            className="text-slate-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-blue-600 font-medium py-2 border-b border-slate-100 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
