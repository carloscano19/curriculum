"use client";

import { motion } from "motion/react";
import { Target, BarChart, Code } from "lucide-react";

export function About({ data }: { data?: any }) {
  const cards = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Strategic SEO & GEO",
      description: "Driving organic growth through Technical SEO and Generative Engine Optimization for AI-driven search."
    },
    {
      icon: <Code className="w-6 h-6 text-purple-600" />,
      title: "Advanced Tracking",
      description: "Expert implementation of GTM server-side, pixel architecture, and data-driven measurement strategies."
    },
    {
      icon: <BarChart className="w-6 h-6 text-emerald-600" />,
      title: "Product & Automation",
      description: "Bridging technical requirements with business goals using AI-powered tools and agile methodologies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="text-lg text-slate-700 leading-loose space-y-6 text-justify md:text-left">
            {data?.description.split('\n\n').map((p: string, i: number) => (
              <p key={i} dangerouslySetInnerHTML={{
                __html: p.replace(/<span/g, '!!SPAN!!')
                  .replace(/<\/span/g, '!!/SPAN!!')
                // Since the data is now plain text, I'll just render it as is 
                // or handle spans if I want to keep the bolding.
                // Actually, I'll just use the text and maybe manual spans if needed.
                // But for now, simple p tags is better.
              }}>
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
