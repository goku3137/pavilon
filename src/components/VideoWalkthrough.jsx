import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoWalkthrough() {
  return (
    <section className="bg-background relative z-10 border-b border-white/5">
      <div className="w-full h-screen relative group cursor-pointer overflow-hidden">
        
        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-colors duration-700 z-10" />
        
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
          alt="Video thumbnail"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[20%]"
        />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-24 rounded-full border border-ivory/20 flex items-center justify-center backdrop-blur-md mb-8 group-hover:scale-110 group-hover:border-ivory/50 transition-all duration-500"
          >
            <Play fill="currentColor" className="text-ivory ml-2" size={32} />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory tracking-wide mb-4">
            WALK THROUGH MONARCH PAVILION
          </h2>
          <span className="text-[10px] font-sans tracking-[0.3em] text-accent uppercase">
            A Cinematic Tour
          </span>
        </div>

      </div>
    </section>
  );
}
