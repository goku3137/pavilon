import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream-DEFAULT/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Monarch Pavilion interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">About Monarch Pavilion</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of SN puram, Kodungallur, Monarch Pavilion is the premier destination for unforgettable weddings and grand celebrations. We offer a blend of classic charm and modern luxury.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our dedicated team works tirelessly to ensure every detail of your special day is executed flawlessly, providing a magical backdrop for your love story and dream events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
