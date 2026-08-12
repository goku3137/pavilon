import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-8", aspect: "aspect-[16/9]" },
    { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80", colSpan: "col-span-12 md:col-span-4", aspect: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", colSpan: "col-span-12 md:col-span-4", aspect: "aspect-[3/4]" },
    { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-8", aspect: "aspect-[16/9]" },
    { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80", colSpan: "col-span-12", aspect: "aspect-[21/9]" }
  ];

  return (
    <section className="py-32 bg-background relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-12 gap-4">
          {images.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.colSpan} ${item.aspect} relative overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500 z-10" />
              <img 
                src={item.src} 
                alt={`Gallery visual ${i+1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                loading="lazy"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-sans tracking-[0.2em] text-ivory uppercase border border-ivory/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
