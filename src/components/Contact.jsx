import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    const message = "Hi, I would like to inquire about booking Monarch Pavilion.";
    window.open(`https://wa.me/919895205469?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900">Get in Touch</h3>
            <p className="text-gray-600">Our calendar fills up quickly. Contact us today to secure your preferred date and begin planning your dream event.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600 mt-1">Monarch Pavilion<br/>SN puram, Kodungallur</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600 mt-1">9895205469</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleWhatsApp}
              className="mt-4 flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg shadow-green-500/30"
            >
              <MessageCircle size={20} />
              Book via WhatsApp
            </button>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="+91" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Details</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Tell us about your event..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
