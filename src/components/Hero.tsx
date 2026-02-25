"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

export function Hero({ data }: { data: any }) {
  const { t } = useLanguage();

  const titleStr = data?.title || "Carlos Cano Fernández";
  const lastSpaceIdx = titleStr.lastIndexOf(' ');
  const firstName = lastSpaceIdx !== -1 ? titleStr.substring(0, lastSpaceIdx) : titleStr;
  const lastName = lastSpaceIdx !== -1 ? titleStr.substring(lastSpaceIdx + 1) : "";
  const subtitle = t(data?.subtitle) || "Full Stack Developer";
  const imageUrl = data?.imageUrl || "https://images.unsplash.com/photo-1758599543136-5977bf2dd922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwcG9ydHJhaXQlMjBidXNpbmVzcyUyMHN1aXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzcxNzAwNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 md:pt-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              {t(data?.badge) || "Elevating digital projects"}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {firstName} <br />
              <span className="text-blue-600">{lastName}</span>
            </h1>

            <div className="text-xl md:text-2xl text-slate-700 mb-8 font-light space-y-4">
              {subtitle.split('\n').length > 0 && (
                <p className="font-medium text-slate-900 leading-snug">
                  {subtitle.split('\n')[0]}
                </p>
              )}
              {subtitle.split('\n').length > 1 && (
                <p className="text-lg text-slate-600 whitespace-pre-line">
                  {subtitle.split('\n').slice(1).join('\n')}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20"
              >
                {t({ en: "Contact Me", es: "Contáctame" })}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={data?.cvPdfUrl || "#"}
                download="CV-Carlos-Cano-Fernandez.pdf"
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group print:hidden"
              >
                {t({ en: "Download CV", es: "Descargar CV" })}
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-[2rem] -rotate-3 opacity-10"></div>
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src={data?.imageUrl || "https://images.unsplash.com/photo-1758599543136-5977bf2dd922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwcG9ydHJhaXQlMjBidXNpbmVzcyUyMHN1aXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzcxNzAwNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"}
                  alt={data?.title || "Carlos Cano Fernández"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {data?.experienceYears || "10+"}
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{t({ en: "Years of", es: "Años de" })}</p>
                  <p className="font-bold text-slate-900">{t({ en: "Experience", es: "Experiencia" })}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
