import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Silver',
      price: '₹50,000',
      description: 'Perfect for intimate gatherings and small events.',
      features: ['Up to 200 Guests', 'Standard Decoration', 'Basic Audio System', 'Air Cooler Support', '4 Hours Duration'],
      highlight: false
    },
    {
      name: 'Gold',
      price: '₹1,20,000',
      description: 'Our most popular package for grand weddings.',
      features: ['Up to 600 Guests', 'Premium Floral Decor', 'Full AC Hall', 'Advanced Sound & Lighting', 'Bridal Suite Included', '8 Hours Duration'],
      highlight: true
    },
    {
      name: 'Platinum',
      price: '₹2,50,000',
      description: 'The ultimate luxury experience with zero compromises.',
      features: ['Up to 1200 Guests', 'Custom Theme Decoration', 'Outdoor Garden Access', 'Photo Booth Setup', 'Valet Parking', 'Full Day Access'],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose a package that fits your dream event. We also offer fully customized packages upon request.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:-translate-y-2 ${pkg.highlight ? 'border-2 border-primary md:-translate-y-4 md:hover:-translate-y-6' : 'border border-gray-100'}`}
            >
              {pkg.highlight && (
                <div className="bg-primary text-white text-center py-2 text-sm font-semibold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 mb-6 h-10">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-500"> / event</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check size={18} className="text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${pkg.highlight ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
