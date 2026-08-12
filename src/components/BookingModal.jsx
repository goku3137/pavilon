import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TIME_SLOTS = [
  { id: 'day', label: 'Day Slot', time: '10:00 AM – 2:00 PM', defaultBooked: false },
  { id: 'evening', label: 'Evening Slot', time: '5:00 PM – 9:00 PM', defaultBooked: false },
];

export default function BookingModal({ isOpen, onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookings, setBookings] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('monarchBookings');
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
    setSelectedSlot(null);
  };
  
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const isDayFullyBooked = (dayStr) => {
    const dayBookings = bookings[dayStr] || [];
    return dayBookings.includes('day') && dayBookings.includes('evening');
  };

  const handleDateClick = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const today = new Date();
    today.setHours(0,0,0,0);
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (selected < today || isDayFullyBooked(dateStr)) return;
    
    setSelectedDate(dateStr);
    setSelectedSlot(null);
  };

  const handleSlotClick = (slot) => {
    if (slot.defaultBooked || (bookings[selectedDate] && bookings[selectedDate].includes(slot.id))) return;
    setSelectedSlot(slot);
  };

  const handleProceed = () => {
    if (!selectedDate || !selectedSlot) return;
    
    const isSuccess = window.confirm(`Simulate Razorpay Payment for ${selectedDate} (${selectedSlot.label})?\nClick OK to simulate successful payment.`);
    
    if (isSuccess) {
      const newBookings = { ...bookings };
      if (!newBookings[selectedDate]) newBookings[selectedDate] = [];
      newBookings[selectedDate].push(selectedSlot.id);
      
      localStorage.setItem('monarchBookings', JSON.stringify(newBookings));
      setBookings(newBookings);
      
      alert('Payment Successful! Redirecting to WhatsApp for confirmation.');
      
      const message = `I want to book Monarch Pavilion on ${selectedDate} for the ${selectedSlot.label} slot.`;
      window.open(`https://wa.me/919895205469?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
    }
  };

  const renderCalendar = () => {
    const days = [];
    const today = new Date();
    today.setHours(0,0,0,0);

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isPast = checkDate < today;
      const fullyBooked = isDayFullyBooked(dateStr);
      const isSelected = selectedDate === dateStr;
      
      let btnClass = "h-10 w-10 rounded-full flex items-center justify-center text-sm font-sans transition-all duration-300 ";
      if (isPast) {
        btnClass += "text-white/20 cursor-not-allowed";
      } else if (fullyBooked) {
        btnClass += "bg-white/5 text-white/30 line-through cursor-not-allowed";
      } else if (isSelected) {
        btnClass += "bg-accent text-background font-medium";
      } else {
        btnClass += "text-ivory hover:bg-white/10 cursor-pointer";
      }

      days.push(
        <button 
          key={i} 
          onClick={() => handleDateClick(i)}
          disabled={isPast || fullyBooked}
          className={btnClass}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-6 px-2 text-ivory">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-white/5 rounded-full transition-colors"><ChevronLeft size={18} /></button>
          <span className="font-serif tracking-widest uppercase text-sm">
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </span>
          <button onClick={handleNextMonth} className="p-2 hover:bg-white/5 rounded-full transition-colors"><ChevronRight size={18} /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mb-4 text-[10px] tracking-widest text-muted uppercase font-sans">
          <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
        <div className="grid grid-cols-7 gap-1 place-items-center">
          {days}
        </div>
      </div>
    );
  };

  const renderTimeSlots = () => {
    if (!selectedDate) return null;
    
    return (
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        className="mt-8 border-t border-white/10 pt-6"
      >
        <h3 className="font-sans text-xs tracking-widest uppercase text-muted mb-4 flex items-center gap-2">
          <Clock size={14} /> Select Time Slot
        </h3>
        <div className="space-y-3">
          {TIME_SLOTS.map((slot) => {
            const isBooked = slot.defaultBooked || (bookings[selectedDate] && bookings[selectedDate].includes(slot.id));
            const isSelected = selectedSlot?.id === slot.id;
            
            return (
              <div 
                key={slot.id}
                onClick={() => handleSlotClick(slot)}
                className={`p-4 border flex justify-between items-center transition-all duration-300 ${
                  isBooked 
                    ? 'border-white/5 bg-white/5 opacity-50 cursor-not-allowed' 
                    : isSelected 
                      ? 'border-accent bg-accent/10 cursor-pointer'
                      : 'border-white/10 hover:border-accent/50 cursor-pointer'
                }`}
              >
                <div>
                  <div className="font-serif text-ivory tracking-wider text-sm mb-1">{slot.label}</div>
                  <div className="text-xs font-sans text-muted">{slot.time}</div>
                </div>
                {isBooked && <span className="text-[9px] uppercase tracking-widest bg-white/10 text-white/50 px-3 py-1 font-sans">Booked</span>}
                {!isBooked && isSelected && <span className="text-[9px] uppercase tracking-widest bg-accent text-background px-3 py-1 font-sans font-medium">Selected</span>}
                {!isBooked && !isSelected && <span className="text-[9px] uppercase tracking-widest border border-white/20 text-muted px-3 py-1 font-sans">Available</span>}
              </div>
            );
          })}
        </div>
        <p className="text-[10px] font-sans tracking-wide text-center text-muted mt-6">
          * If you want to customize your booking, please <button onClick={() => { onClose(); document.getElementById('location').scrollIntoView({ behavior: 'smooth' }); }} className="text-accent hover:text-ivory transition-colors border-b border-accent/30 pb-0.5">contact us directly</button>.
        </p>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface border border-white/10 w-full max-w-md max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-muted hover:text-ivory transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-serif text-ivory mb-8 flex items-center gap-3">
                <CalendarIcon className="text-accent" size={24} /> 
                <span className="tracking-wide">Availability</span>
              </h2>
              
              {renderCalendar()}
              {renderTimeSlots()}
              
              {selectedDate && selectedSlot && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <button 
                    onClick={handleProceed}
                    className="w-full bg-ivory hover:bg-accent text-background font-sans text-xs uppercase tracking-widest font-medium py-4 transition-colors duration-300"
                  >
                    Proceed to Book ({selectedSlot.label})
                  </button>
                  <p className="text-[10px] font-sans tracking-wide text-center text-muted mt-4">
                    You will be redirected to WhatsApp for final confirmation after payment.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
