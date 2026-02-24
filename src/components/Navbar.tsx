"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Specialization", href: "#specialization" },
    { name: "Skills", href: "#core-soft-skills" },
    { name: "Clients", href: "#clients" },
    { name: "Tech", href: "#tech-stack" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-slate-900 tracking-tighter shrink-0 mr-8 group flex items-center gap-1">
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md transform -rotate-3 group-hover:rotate-0 transition-transform">CCF</span>
          <span className="text-slate-800">Cano</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-6">
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
        </div>

        {/* Mobile Menu Button - Show on smaller screens (below xl) */}
        <button
          className="xl:hidden text-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
