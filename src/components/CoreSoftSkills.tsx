"use client";

import { motion } from "motion/react";
import { CheckCircle2, Brain, Users, MessageSquare, Lightbulb, TrendingUp, Code, Database, Server, Smartphone, LayoutDashboard } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function CoreSoftSkills() {
  const { t } = useLanguage();
  const softSkills = [
    { name: t({ en: "Strategic mindset", es: "Mentalidad estratégica" }), icon: <Brain className="w-5 h-5 text-emerald-400" /> },
    { name: t({ en: "High ownership & accountability", es: "Alto compromiso y responsabilidad" }), icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
    { name: t({ en: "Cross-functional collaboration", es: "Colaboración interfuncional" }), icon: <Users className="w-5 h-5 text-emerald-400" /> },
    { name: t({ en: "Technical & business communication", es: "Comunicación técnica y de negocio" }), icon: <MessageSquare className="w-5 h-5 text-emerald-400" /> },
    { name: t({ en: "Problem-solving under pressure", es: "Resolución de problemas bajo presión" }), icon: <Lightbulb className="w-5 h-5 text-emerald-400" /> },
    { name: t({ en: "Data-driven decision-making", es: "Toma de decisiones basada en datos" }), icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
  ];

  const coreSkills = [
    { name: "Technical SEO & GEO", icon: <Code className="w-5 h-5 text-blue-400" /> },
    { name: "GTM client/server", icon: <Server className="w-5 h-5 text-blue-400" /> },
    { name: "Server-to-server tracking", icon: <Database className="w-5 h-5 text-blue-400" /> },
    { name: t({ en: "Python & AI automation", es: "Python y automatización con IA" }), icon: <BotIcon className="w-5 h-5 text-blue-400" /> },
    { name: "Product Ownership", icon: <Smartphone className="w-5 h-5 text-blue-400" /> },
    { name: t({ en: "Data analytics & dashboards", es: "Analítica de datos y dashboards" }), icon: <LayoutDashboard className="w-5 h-5 text-blue-400" /> },
  ];

  return (
    <section id="core-soft-skills" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-emerald-400">Soft</span> Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-slate-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-blue-400">Core</span> Skills
            </h3>
            <div className="space-y-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-slate-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}
