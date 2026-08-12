import React from 'react';
import { Settings, TreePine, Wind, Utensils, Zap, Camera, ThermometerSnowflake } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { title: "Customisable Venue", icon: <Settings size={32} /> },
    { title: "Outdoor Garden", icon: <TreePine size={32} /> },
    { title: "Air Conditioner (AC)", icon: <Wind size={32} /> },
    { title: "Open Dining Experience", icon: <Utensils size={32} /> },
    { title: "Power Backup", icon: <Zap size={32} /> },
    { title: "Photo Booth", icon: <Camera size={32} /> },
    { title: "Air Cooler", icon: <ThermometerSnowflake size={32} /> },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Premium Amenities</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {amenities.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transform duration-300 border border-gray-50 text-center"
            >
              <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full">
                {item.icon}
              </div>
              <h4 className="font-medium text-gray-800 text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
