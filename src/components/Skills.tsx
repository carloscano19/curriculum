"use client";

import { motion } from "motion/react";
import { Globe, Server, Bot, Briefcase, BarChart } from "lucide-react";

export function Skills({ data }: { data?: any }) {
  const areas = [
    {
      title: "SEO & GEO / AEO",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      items: [
        "Advanced technical SEO: log analysis, indexation, WPO and site architecture.",
        "Optimization for AI Overviews and generative search engines (ChatGPT, Gemini, Claude, Perplexity).",
        "GEO/AEO strategies for web products, mobile apps and marketplaces."
      ]
    },
    {
      title: "Tracking & Measurement Engineering",
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      items: [
        "Advanced implementation of GTM (client & server). Integration of pixels and S2S events (Meta, TikTok, Adjust, etc.).",
        "DataLayer architecture, naming conventions, debugging, QA and technical auditing."
      ]
    },
    {
      title: "AI-Powered Automation & App Development",
      icon: <Bot className="w-8 h-8 text-purple-600" />,
      items: [
        "Development of SEO/Data tools in Python and other languages (GitHub).",
        "AI-assisted development using Claude Code, Google Antigravity and LLM agents.",
        "Automation workflows: ETLs, scrapers, reporting systems, dashboards, APIs and data validation."
      ]
    },
    {
      title: "Product Ownership & Growth",
      icon: <Briefcase className="w-8 h-8 text-orange-600" />,
      items: [
        "Ownership of roadmap, backlog and functional definition for web/app features.",
        "Stakeholder management across marketing, tech, content and BI teams.",
        "Experimentation, KPI definition, scalable processes and data-driven decision-making."
      ]
    },
    {
      title: "Data & Dashboards",
      icon: <BarChart className="w-8 h-8 text-emerald-600" />,
      items: [
        "Advanced dashboards (GA4, GSC, Looker Studio).",
        "Multi-source data integration (SEO, CRM, analytics, mobile attribution).",
        "Data processing, extraction and analysis for actionable insights."
      ]
    }
  ];

  return (
    <section id="specialization" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Areas of Specialization</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Deep expertise across technical, strategic, and product domains.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {data?.map((area: any, index: number) => {
            const icons: Record<string, any> = {
              Globe, Server, Bot, Briefcase, BarChart
            };
            const IconComponent = icons[area.icon] || Globe;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group min-h-[400px]"
              >
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {area.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {area.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
