import React from 'react';
import { motion } from 'framer-motion';

export default function Contact({ onBookNow }) {
  return (
    <section id="location" className="relative z-10 bg-background">
      
      {/* Location / Map Section */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[60vh] border-b border-white/5">
        
        {/* Map – shows on top on mobile, on right on desktop */}
        <div className="order-1 lg:order-2 bg-surface/50 relative overflow-hidden h-[55vw] min-h-[280px] lg:h-auto">
          <iframe
            title="Monarch Pavilion Kodungallur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.7082194040965!2d76.20228827496647!3d10.237127189762278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c6a5a5a5a5a%3A0x0!2sMonarch%20Pavilion%2C%20SN%20Puram%2C%20Kodungallur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(60%) invert(10%) contrast(1.1)', minHeight: '280px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
          {/* Subtle dark overlay to match brand aesthetic */}
          <div className="absolute inset-0 bg-background/15 pointer-events-none z-10" />
        </div>

        {/* Info – shows below on mobile, on left on desktop */}
        <div className="order-2 lg:order-1 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center">
          <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase mb-6 block">
            06 — The Location
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-ivory mb-10">
            SN PURAM, KODUNGALLUR
          </h2>
          
          <div className="space-y-8 text-sm font-sans text-muted">
            <div>
              <div className="text-ivory font-medium mb-2 tracking-widest uppercase text-xs">Address</div>
              Monarch Pavilion<br />
              SN Puram, Kodungallur,<br />
              Kerala 680 664, India
            </div>
            <div>
              <div className="text-ivory font-medium mb-2 tracking-widest uppercase text-xs">Direct Line</div>
              <a href="tel:+919895205469" className="hover:text-accent transition-colors">
                +91 98952 05469
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a 
                href="https://www.google.com/maps/search/Monarch+Pavilion+Kodungallur+Kerala/@10.2371272,76.2022883,17z"
                target="_blank" 
                rel="noreferrer"
                className="inline-block border-b border-accent/30 text-accent uppercase tracking-widest text-[10px] pb-1 hover:border-accent transition-colors"
              >
                Open in Google Maps ↗
              </a>
              <a 
                href="https://maps.apple.com/?q=Monarch+Pavilion+Kodungallur+Kerala"
                target="_blank" 
                rel="noreferrer"
                className="inline-block border-b border-white/20 text-muted uppercase tracking-widest text-[10px] pb-1 hover:border-ivory hover:text-ivory transition-colors"
              >
                Open in Apple Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Climax CTA */}
      <div className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
          alt="Final CTA Background"
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        
        <div className="relative z-20 text-center px-6 w-full max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-10 sm:mb-12"
          >
            LET'S FIND <br/>YOUR DATE.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
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
              Book a Visit via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
