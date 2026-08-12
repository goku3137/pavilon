import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ onBookNow }) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Cinematic Background */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-grain"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        {/* Dark Cinematic Grading */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col items-center text-center mt-20"
      >
        {/* Metadata Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] md:text-xs font-sans tracking-[0.3em] text-accent uppercase mb-8"
        >
          Kodungallur · Thrissur · Kerala
        </motion.div>

        {/* Oversized Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-ivory max-w-5xl mb-8"
        >
          MAKE EVERY MOMENT <br />
          <span className="italic font-light text-accent/90">EXTRAORDINARY</span>
        </motion.h1>

        {/* Editorial Statement */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-sm md:text-base font-sans font-light text-muted max-w-lg mb-12 tracking-wide leading-relaxed"
        >
          An extraordinary event experience, not just a venue. Luxury weddings and grand celebrations at the heart of Kodungallur.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button 
            onClick={onBookNow}
            className="bg-ivory text-background px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-accent transition-colors duration-300 w-full sm:w-auto"
          >
            Check Your Date
          </button>
          <a 
            href="#venue"
            className="text-xs uppercase tracking-widest font-sans text-ivory border-b border-transparent hover:border-accent hover:text-accent transition-all pb-1"
          >
            Explore The Experience
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
