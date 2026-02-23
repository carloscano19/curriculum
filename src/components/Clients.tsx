"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";

export function Clients({ data }: { data?: any[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Clients</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Companies I have worked with or currently work with.
          </p>
        </motion.div>

        <div className="px-8">
          {displayClients.length > 0 ? (
            <Slider {...settings} className="-mx-4 pb-12">
              {displayClients.map((client, index) => (
                <div key={client.id || index} className="px-4 h-full">
                  <div className="h-32 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-6 hover:shadow-md transition-shadow group">
                    {client.logoUrl ? (
                      <img
                        src={client.logoUrl}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const span = document.createElement('span');
                            span.className = "text-xl font-bold text-slate-400 group-hover:text-slate-800 transition-colors text-center";
                            span.innerText = client.name;
                            parent.appendChild(span);
                          }
                        }}
                      />
                    ) : (
                      <span className="text-xl font-bold text-slate-400 group-hover:text-slate-800 transition-colors text-center">
                        {client.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center text-slate-400">No clients to display at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
}
