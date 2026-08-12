import React from 'react';
import { motion } from 'framer-motion';

export default function Amenities() {
  const features = [
    { title: "Stage Production", desc: "Cinematic lighting & sound", colSpan: "col-span-12 md:col-span-8", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" },
    { title: "Live Streaming", desc: "4K broadcast to the world", colSpan: "col-span-12 md:col-span-4", img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=800&q=80" },
    { title: "Guest Hospitality", desc: "Premium dining experience", colSpan: "col-span-12 md:col-span-4", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" },
    { title: "Valet & Logistics", desc: "Seamless arrival", colSpan: "col-span-12 md:col-span-8", img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=800&q=80" },
    { title: "Climate Control", desc: "Advanced HVAC systems", colSpan: "col-span-12 md:col-span-6", img: "https://images.unsplash.com/photo-1505312814889-4be662bba689?auto=format&fit=crop&w=800&q=80" },
    { title: "Photo Stations", desc: "Curated aesthetic corners", colSpan: "col-span-12 md:col-span-6", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section className="py-32 bg-surface relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        <div className="mb-20">
          <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase mb-6 block">
            03 — Everything Included
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory max-w-3xl leading-tight">
            EVERYTHING'S ALREADY <br/>IN THE PACKAGE.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${feature.colSpan} relative h-[300px] md:h-[400px] rounded-sm overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-700 z-10" />
              <img 
                src={feature.img} 
                alt={feature.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase mb-2">
                  Feature {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-serif text-ivory mb-1">{feature.title}</h3>
                <p className="text-sm font-sans font-light text-muted">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
