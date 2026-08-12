import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ number, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(number.replace(/,/g, ''));
      const duration = 2000;
      const incrementTime = (duration / end) * 2;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-serif text-ivory mb-2">
        {count}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-widest font-sans text-muted">
        {label}
      </div>
    </div>
  );
};

export default function Statistics() {
  return (
    <section className="py-24 bg-surface border-y border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <StatItem number="1000" suffix="+" label="Celebrations" />
          <StatItem number="50" suffix="+" label="Team Members" />
          <StatItem number="300" suffix="+" label="Cars Capacity" />
          <StatItem number="1200" suffix="" label="Max Guests" />
        </div>
      </div>
    </section>
  );
}
