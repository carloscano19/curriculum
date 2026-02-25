"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";
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
    arrows: false,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Full width on mobile for maximum visibility
          dots: true,
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

        <div className="px-4 md:px-8">
          {displayClients.length > 0 ? (
            <Slider {...settings} className="-mx-2 md:-mx-4 pb-12">
              {displayClients.map((client, index) => (
                <div key={index} className="px-2 md:px-4 h-full">
                  <div className="h-40 md:h-32 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-2 md:p-6 hover:shadow-md transition-shadow group">
                    {client.logoUrl ? (
                      <div className="relative w-full h-full flex items-center justify-center p-2">
                        <ImageWithFallback
                          src={client.logoUrl}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ) : (
                      <span className="text-sm md:text-xl font-bold text-slate-400 group-hover:text-slate-800 transition-colors text-center px-1">
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
