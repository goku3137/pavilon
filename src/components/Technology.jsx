import React from 'react';
import { motion } from 'framer-motion';

export default function Technology() {
  return (
    <section id="technology" className="py-32 bg-[#050505] relative z-10 border-b border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center mb-20 relative z-20">
          <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase mb-6 block">
            04 — The Platform
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-ivory max-w-4xl mx-auto leading-tight">
            ONE BOOKING. <br/>AN ENTIRE COMMAND CENTRE.
          </h2>
        </div>

        {/* Futuristic Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Dashboard Panel */}
          <div className="aspect-[16/9] bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 md:p-6 shadow-2xl relative z-10 overflow-hidden">
            
            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="text-[10px] font-sans tracking-[0.2em] text-muted uppercase">
                Monarch OS
              </div>
            </div>

            {/* Mock Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 h-[calc(100%-60px)]">
              <div className="col-span-2 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-sans tracking-widest text-muted uppercase">Live Event Stream</span>
                 </div>
              </div>
              <div className="col-span-1 grid grid-rows-2 gap-4 md:gap-6">
                <div className="bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center p-6">
                    <span className="text-4xl font-serif text-accent mb-2">1,240</span>
                    <span className="text-[10px] font-sans tracking-widest text-muted uppercase">Guests Arrived</span>
                </div>
                <div className="bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center p-6">
                    <span className="text-xl font-sans text-ivory mb-2">AI Delivery</span>
                    <span className="text-[10px] font-sans tracking-widest text-green-400/80 uppercase">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Element 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex absolute -right-12 top-1/4 bg-surface/90 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl z-20 flex-col gap-2 w-64"
          >
            <div className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase mb-2">Lighting Control</div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-accent rounded-full" />
            </div>
            <div className="text-xs text-muted font-sans text-right mt-1">Preset: Cinematic</div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex absolute -left-12 bottom-1/4 bg-surface/90 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl z-20 flex-col gap-3 w-56"
          >
            <div className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase mb-1">Temperature</div>
            <div className="text-3xl font-serif text-ivory">22°C</div>
            <div className="text-xs text-muted font-sans flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" /> Optimal Range
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
