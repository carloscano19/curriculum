"use client";

import { motion } from "motion/react";
import { Database, Search, Bot, Briefcase, Layers, Terminal, Cpu, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();
  const categories = [
    {
      id: "tracking",
      title: t({ en: "Tracking & Analytics", es: "Tracking y Analítica" }),
      icon: <Database className="w-6 h-6 text-blue-500" />,
      description: t({
        en: "Data integrity and advanced measurement architectures.",
        es: "Integridad de datos y arquitecturas de medición avanzada."
      }),
      tools: [
        "GTM (client & server)", "GA4", "GSC", "Looker Studio", "BigQuery",
        "Server-to-server tracking", "Meta CAPI", "TikTok API", "Adjust",
        "DataLayer architecture", "Regex QA", "Debugging", "Measurement Protocol"
      ]
    },
    {
      id: "seo",
      title: "SEO & Crawling",
      icon: <Search className="w-6 h-6 text-emerald-500" />,
      description: t({
        en: "Technical SEO auditing and log analysis for maximum visibility.",
        es: "Auditoría SEO técnica y análisis de logs para máxima visibilidad."
      }),
      tools: [
        "Screaming Frog", "Jet Octopus", "Botify", "Sistrix", "Ahrefs", "Semrush",
        "Log analyzers", "Render testing", "WPO tools"
      ]
    },
    {
      id: "ai",
      title: t({ en: "AI & Automation", es: "IA y Automatización" }),
      icon: <Bot className="w-6 h-6 text-purple-500" />,
      description: t({
        en: "Leveraging LLMs and scripts for process automation.",
        es: "Uso de LLMs y scripts para la automatización de procesos."
      }),
      tools: [
        "Python", "Claude Code", "Google Antigravity",
        "ChatGPT", "Gemini", "LangChain", "LLM agents",
        "Scrapers", "ETLs pipelines", "Custom automation scripts"
      ]
    },
    {
      id: "product",
      title: t({ en: "Product / Project", es: "Producto / Proyecto" }),
      icon: <Briefcase className="w-6 h-6 text-orange-500" />,
      description: t({
        en: "Agile management and product lifecycle oversight.",
        es: "Gestión ágil y supervisión del ciclo de vida del producto."
      }),
      tools: [
        "Jira", "Notion", "Confluence", "Asana",
        "Roadmap planning", "User stories", "QA & testing"
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-semibold mb-6">
            <Cpu size={14} />
            <span>{t({ en: "Technical Arsenal", es: "Arsenal Técnico" })}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Tools</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t({
              en: "A deep dive into the technologies and platforms I use to drive data-centric decisions and scalable product growth.",
              es: "Una inmersión profunda en las tecnologías y plataformas que utilizo para impulsar decisiones centradas en datos y un crecimiento de producto escalable."
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:bg-slate-800 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                {index % 2 === 0 ? <Terminal size={64} /> : <Layers size={64} />}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                  <p className="text-slate-400 text-sm">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-300 hover:bg-slate-800 transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
