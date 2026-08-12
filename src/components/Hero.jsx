import React from 'react';

export default function Hero({ onBookNow }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Customize your dream events with us
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-in fade-in zoom-in duration-1000 delay-300">
          Where Dreams Wed.
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 text-gray-200 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
          Luxury weddings at Kodungallur.
        </p>
        <button 
          onClick={onBookNow}
          className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-primary/50 animate-in fade-in duration-1000 delay-700"
        >
          Check Availability
        </button>
      </div>
    </section>
  );
}
