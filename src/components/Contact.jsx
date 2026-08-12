import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ onBookNow }) {
  return (
    <section id="location" className="relative z-10 bg-background">
      
      {/* Location / Map Section */}
      <div className="grid lg:grid-cols-2 min-h-[60vh] border-b border-white/5">
        <div className="p-12 md:p-24 flex flex-col justify-center order-2 lg:order-1">
          <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase mb-6 block">
            06 — The Location
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-12">
            SN PURAM, KODUNGALLUR
          </h2>
          
          <div className="space-y-8 text-sm font-sans text-muted">
            <div>
              <div className="text-ivory font-medium mb-1 tracking-widest uppercase text-xs">Address</div>
              Monarch Pavilion<br />
              SN puram, Kodungallur,<br />
              Kerala, India
            </div>
            <div>
              <div className="text-ivory font-medium mb-1 tracking-widest uppercase text-xs">Direct Line</div>
              9895205469
            </div>
            <div className="pt-8">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block border-b border-accent/30 text-accent uppercase tracking-widest text-[10px] pb-1 hover:border-accent transition-colors"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 bg-surface/50 relative overflow-hidden h-[40vh] lg:h-auto">
          {/* Mock Dark Map Treatment */}
          <div className="absolute inset-0 bg-background/80 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-grain z-20" />
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Map Abstract" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 z-30 flex items-center justify-center">
             <div className="w-4 h-4 bg-accent rounded-full animate-pulse shadow-[0_0_30px_rgba(212,175,130,0.5)]" />
          </div>
        </div>
      </div>

      {/* Climax CTA */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
          alt="Final CTA Background"
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        
        <div className="relative z-20 text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-12"
          >
            LET'S FIND <br/>YOUR DATE.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={onBookNow}
              className="bg-ivory text-background px-10 py-4 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-accent transition-colors duration-300 w-full sm:w-auto"
            >
              Check Availability
            </button>
            <a 
              href="https://wa.me/919895205469?text=I%20would%20like%20to%20book%20a%20visit%20to%20Monarch%20Pavilion." 
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-widest font-sans text-ivory border-b border-transparent hover:border-accent hover:text-accent transition-all pb-1"
            >
              Book a Visit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
