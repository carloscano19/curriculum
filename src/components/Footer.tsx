"use client";

import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Carlos Cano Fernández. {t({ en: "All rights reserved.", es: "Todos los derechos reservados." })}
        </p>
      </div>
    </footer>
  );
}
