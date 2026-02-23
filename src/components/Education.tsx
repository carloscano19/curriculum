"use client";

import { motion } from "motion/react";
import { GraduationCap, Award, Languages } from "lucide-react";
import { cvData } from "@/lib/data";

export function Education({ data }: { data?: any }) {
  const education = [
    {
      degree: "Web3 Talents Program",
      institution: "Frankfurt School Blockchain Center",
      year: "2026",
      color: "text-indigo-600"
    },
    {
      degree: "Generative AI Applied to Digital Transformation",
      institution: "MIT Professional Education",
      year: "2025",
      color: "text-blue-600"
    },
    {
      degree: "Master’s in SEO/SEM",
      institution: "Webpositer",
      year: "Graduated",
      color: "text-emerald-600"
    },
    {
      degree: "Master’s in Project Management",
      institution: "Aula Formación Granada",
      year: "Graduated",
      color: "text-purple-600"
    },
    {
      degree: "Chemical Engineering",
      institution: "University of Granada",
      year: "Graduated",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="education" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Education Column */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Education & Certifications</h2>
            </div>

            <div className="space-y-8 pl-4 border-l-2 border-slate-100">
              {data?.map((item: any, index: number) => (
                <div key={index} className="relative pl-8 group">
                  <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white shadow-sm transition-colors duration-300 ${index === 0 ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-blue-400'}`}></div>

                  <h3 className="text-xl font-bold text-slate-900">{item.degree}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                    <span className="text-slate-600 font-medium">{item.institution}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className={`text-sm font-bold ${item.color} bg-slate-50 px-2 py-0.5 rounded`}>
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Column */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <Languages size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Languages</h2>
              </div>

              <div className="space-y-6">
                {cvData.languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-slate-900 text-lg">{lang.name}</span>
                      <span className="text-slate-500 text-sm font-medium">{lang.level}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full ${lang.color} rounded-full`} style={{ width: `${lang.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <Award className="w-8 h-8 text-yellow-500 mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed">
                  Committed to continuous learning and staying ahead of the curve in digital trends, from Web3 protocols to the latest in Generative AI.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
