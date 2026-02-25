"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Clients({ data }: { data?: any[] }) {
  const displayClients = data && data.length > 0 ? data : [];

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            TRUST & EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 max-w-3xl mx-auto leading-tight">
            Brands that have trusted my strategic vision
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
          {displayClients.length > 0 ? (
            displayClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-3xl border border-slate-100 p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Logo Container */}
                  <div className="h-20 md:h-24 w-full flex items-center justify-center mb-6">
                    {client.logoUrl ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <ImageWithFallback
                          src={client.logoUrl}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                        <span className="text-2xl font-bold">{client.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {client.category || "DIGITAL CONSULTANCY"}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400">
              No clients to display at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
