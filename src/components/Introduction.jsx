import React from 'react';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section id="venue" className="py-32 bg-background relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Section Label */}
        <div className="mb-20">
          <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase">
            01 — The Venue
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Editorial Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory leading-tight mb-8">
              A Canvas for Your <br className="hidden md:block"/>Grandest Visions.
            </h2>
            <div className="space-y-6 text-muted font-light text-base leading-relaxed max-w-md">
              <p>
                Monarch Pavilion is more than a hall; it is an all-inclusive ecosystem designed for perfection. Situated in SN puram, Kodungallur, we blend architectural elegance with cutting-edge technology.
              </p>
              <p>
                From the moment your guests arrive until the final send-off, every detail is orchestrated to create an immersive, cinematic experience that lingers in memory forever.
              </p>
            </div>
            <div className="mt-12">
              <a href="#experience" className="text-xs font-sans tracking-[0.2em] uppercase text-ivory pb-2 border-b border-accent/30 hover:border-accent transition-colors">
                Discover the Journey
              </a>
            </div>
          </motion.div>

          {/* Architectural Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
              <div className="absolute inset-0 bg-background/10 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Monarch Pavilion Hall" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
