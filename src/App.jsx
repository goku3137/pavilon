import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Statistics from './components/Statistics';
import Experience from './components/Experience';
import Amenities from './components/Amenities';
import Technology from './components/Technology';
import Gallery from './components/Gallery';
import VideoWalkthrough from './components/VideoWalkthrough';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBookingModal = () => setIsModalOpen(true);
  const closeBookingModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookNow={openBookingModal} />
      <main>
        <Hero onBookNow={openBookingModal} />
        <Introduction />
        <Statistics />
        <Experience />
        <Amenities />
        <Technology />
        <Gallery />
        <VideoWalkthrough />
        <Pricing onBookNow={openBookingModal} />
        <Contact onBookNow={openBookingModal} />
      </main>
      <BookingModal isOpen={isModalOpen} onClose={closeBookingModal} />
      
      {/* Minimal Luxury Footer */}
      <footer className="bg-background border-t border-white/5 py-16 text-center">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="font-serif text-2xl text-ivory tracking-widest uppercase mb-8">
              Monarch <span className="font-sans text-xs font-light text-accent tracking-[0.3em] block sm:inline mt-2 sm:mt-0 sm:ml-2">Pavilion</span>
           </div>
           <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-8">
              Kodungallur, Kerala
           </p>
           <p className="text-[10px] font-sans tracking-widest text-muted/50 uppercase">
             © {new Date().getFullYear()} Monarch Pavilion. All Rights Reserved.
           </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
