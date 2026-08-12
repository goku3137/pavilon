import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'THE GRAND ENTRANCE',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '02',
    title: 'THE STAGE',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '03',
    title: 'LIVE TO THE WORLD',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '04',
    title: 'THE KEEPSAKES',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '05',
    title: 'THE SEND-OFF',
    image: 'https://images.unsplash.com/photo-1530103862676-de8892b07439?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  }
];

export default function Experience() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollPosition = -top;
      const stepHeight = height / steps.length;
      
      if (scrollPosition > 0 && scrollPosition < height) {
        const current = Math.min(
          Math.floor(scrollPosition / stepHeight),
          steps.length - 1
        );
        setActiveStep(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="bg-background relative z-10 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 pt-32 pb-16">
        <span className="text-[10px] font-sans tracking-[0.2em] text-accent uppercase">
          02 — The Experience
        </span>
      </div>

      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Sticky Text List */}
            <div className="space-y-8 z-20">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`transition-all duration-700 ease-out flex items-baseline gap-6 ${
                    index === activeStep ? 'opacity-100 translate-x-4' : 'opacity-20 hover:opacity-50'
                  }`}
                >
                  <span className="text-xs font-sans tracking-widest text-accent">{step.id}</span>
                  <h3 className="text-3xl md:text-5xl font-serif text-ivory">{step.title}</h3>
                </div>
              ))}
            </div>

            {/* Crossfading Images */}
            <div className="relative h-[60vh] md:h-[80vh] w-full rounded-sm overflow-hidden">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ 
                    opacity: index === activeStep ? 1 : 0,
                    scale: index === activeStep ? 1 : 1.05
                  }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-background/20 z-10" />
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
