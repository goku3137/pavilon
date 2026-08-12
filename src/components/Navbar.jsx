import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onBookNow }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'The Venue', href: '#venue' },
    { name: 'Experience', href: '#experience' },
    { name: 'Platform', href: '#technology' },
    { name: 'Packages', href: '#pricing' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center">
          
          {/* Minimal Wordmark */}
          <div className="flex items-center">
            <a href="#" className="font-serif text-xl tracking-wider text-ivory uppercase">
              Monarch <span className="font-sans text-xs font-light text-accent tracking-[0.3em] ml-2 block sm:inline">Pavilion</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[11px] uppercase tracking-widest font-sans text-muted hover:text-ivory transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button 
              onClick={onBookNow}
              className="bg-ivory text-background px-6 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-medium hover:bg-accent transition-colors duration-300"
            >
              Check Availability
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ivory hover:text-accent transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-surface/95 backdrop-blur-lg border-b border-white/5 left-0 top-full"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-widest font-sans text-muted hover:text-ivory transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookNow();
                  }}
                  className="w-full bg-ivory text-background px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
