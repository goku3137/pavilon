import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Wedding',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the magic of a perfect wedding day. Our luxury venues are designed to make your special moments unforgettable.'
    },
    {
      title: 'Birthday Celebration',
      image: 'https://images.unsplash.com/photo-1530103862676-de8892b07439?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Host the ultimate birthday bash with tailored decorations, catering, and entertainment for all ages.'
    },
    {
      title: 'Customize Wedding Venues',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Personalize every detail of your venue at SN puram, Kodungallur. We bring your unique vision to life.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Customize your dream events with us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white border border-gray-100 border-t-0 rounded-b-2xl">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
