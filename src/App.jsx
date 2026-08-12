import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Amenities from './components/Amenities';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBookingModal = () => setIsModalOpen(true);
  const closeBookingModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen font-sans bg-[#fbfbfb]">
      <Navbar onBookNow={openBookingModal} />
      <main>
        <Hero onBookNow={openBookingModal} />
        <About />
        <Amenities />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <BookingModal isOpen={isModalOpen} onClose={closeBookingModal} />
      
      <footer className="bg-gray-900 text-white py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">© {new Date().getFullYear()} Monarch Pavilion. All rights reserved.</p>
        <p className="text-sm text-gray-500 mt-2">SN puram, Kodungallur</p>
      </footer>
    </div>
  );
}

export default App;
