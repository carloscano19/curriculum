"use client";

import { motion } from "motion/react";
import { Briefcase, MapPin } from "lucide-react";

export function Experience({ data }: { data?: any }) {
  const experiences = [
    {
      role: "Head of SEO, GEO & Data Tracking",
      company: "Socios.com / Chiliz",
      location: "Madrid",
      period: "April 2022 - Present",
      bullets: [
        "Lead global SEO & GEO/AEO strategy for web and mobile apps.",
        "Own the full tracking architecture: GTM (client & server), S2S events, naming conventions and QA.",
        "Implement LLM visibility strategies (ChatGPT, Claude, Gemini, Perplexity).",
        "Build internal tools using Python + AI (Claude Code, Antigravity) for audits, scrapers and automation.",
        "Act as Product Owner for SEO, analytics & tracking: feature definition, experiments, KPIs, prioritisation."
      ]
    },
    {
      role: "Head of SEO / ASO & Project Leader",
      company: "Alkemy",
      location: "Madrid",
      period: "Dec. 2020 - April 2022",
      bullets: [
        "Led SEO/ASO strategy for national and international accounts.",
        "Managed teams and end-to-end processes, including technical reviews and roadmap planning.",
        "Designed measurement frameworks and 360° reporting systems for multiple clients."
      ]
    },
    {
      role: "Head of SEO",
      company: "SIDN",
      location: "Granada",
      period: "Jan. 2013 - Dec. 2020",
      bullets: [
        "Managed a team of 20+ SEO consultants.",
        "Oversaw 50+ active accounts with a strong technical and growth-oriented approach.",
        "Built reporting systems based on micro-objectives aligned with business KPIs."
      ]
    },
    {
      role: "SEO Consultant",
      company: "SIDN",
      location: "Granada",
      period: "Jan. 2011 - Dec. 2012",
      bullets: [
        "Performed on-page and off-page SEO audits.",
        "Conducted technical SEO audits (log analysis, rendering, indexation, WPO, etc.).",
        "Executed keyword research and content audits.",
        "Managed backlink acquisition campaigns."
      ]
    },
    {
      role: "Academic Director SEO",
      company: "Digital Labs",
      location: "Granada",
      period: "Jan. 2018 - Dec. 2022",
      bullets: [
        "Managed and developed the full course program.",
        "Oversaw and coordinated the teaching staff.",
        "Delivered part of the training modules.",
        "Managed student progress and academic needs.",
        "Advised instructors and supported curriculum development.",
        "Supervised and guided the master's final project."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {data?.map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-16 last:mb-0 group"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>

              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>

                {/* Content */}
                <div className="flex-1 w-full md:w-1/2 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    {/* Mobile Connector Dot */}
                    <div className="md:hidden absolute -left-[41px] top-8 w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-50 shadow-sm"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap w-fit">{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-1 text-slate-700 font-medium">
                        <Briefcase size={16} className="text-slate-400" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <MapPin size={16} className="text-slate-400" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Desktop Connector Dot */}
                    <div className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-50 shadow-sm z-10 
                            ${index % 2 === 0 ? '-left-[56px]' : '-right-[56px]'}`}
                    ></div>
                    <div className={`hidden md:block absolute top-8 w-12 h-px bg-slate-200 
                            ${index % 2 === 0 ? '-left-[48px]' : '-right-[48px]'}`}
                    ></div>
                  </div>
                </div>

                {/* Empty Space for Grid */}
                <div className="hidden md:block flex-1"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
