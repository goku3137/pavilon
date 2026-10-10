import React from 'react';
import { motion } from 'framer-motion';

export default function Pricing({ onBookNow }) {
  const packages = [
    {
      name: 'CORAL',
      price: '₹80,000',
      description: 'The intimate collection.',
      features: ['Up to 200 Guests', 'Standard Decoration', 'Basic Audio System', 'Air Cooler Support', '4 Hours Duration'],
      recommended: false
    },
    {
      name: 'PEARL',
      price: '₹1,20,000',
      description: 'Our signature grand experience.',
      features: ['Up to 600 Guests', 'Premium Floral Decor', 'Full AC Hall', 'Advanced Sound & Lighting', 'Bridal Suite Included', '8 Hours Duration'],
      recommended: true
    },
    {
      name: 'RUBY',
      price: '₹2,50,000',
      description: 'The ultimate luxury canvas.',
      features: ['Up to 1200 Guests', 'Custom Theme Decoration', 'Outdoor Garden Access', 'Photo Booth Setup', 'Valet Parking', 'Full Day Access'],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-background relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="text-center mb-24">
          <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase mb-6 block">
            05 — The Investment
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory">
            CURATED PACKAGES
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 md:p-12 relative ${pkg.recommended ? 'bg-surface/50 border border-accent/20' : 'border-t border-white/10 mt-0 md:mt-12'}`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-background text-[9px] font-sans tracking-[0.2em] uppercase px-4 py-1">
                  The Standard
                </div>
              )}

              <h3 className="text-xl font-serif text-ivory tracking-widest uppercase mb-4">{pkg.name}</h3>
              <div className="text-sm font-sans font-light text-muted h-10 mb-8">{pkg.description}</div>

              <div className="mb-12">
                <span className="text-4xl font-serif text-ivory">{pkg.price}</span>
              </div>

              <div className="space-y-4 mb-12">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="text-xs font-sans text-muted tracking-wide flex items-center gap-4">
                    <div className="w-1 h-1 bg-accent/50 rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={onBookNow}
                className={`w-full py-4 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 ${pkg.recommended
                    ? 'bg-ivory text-background hover:bg-accent'
                    : 'bg-transparent border border-white/20 text-ivory hover:border-accent hover:text-accent'
                  }`}
              >
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
