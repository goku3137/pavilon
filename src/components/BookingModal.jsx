import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';

const TIME_SLOTS = [
  { id: 'day', label: 'Day Slot', time: '10:00 AM – 2:00 PM', defaultBooked: false },
  { id: 'evening', label: 'Evening Slot', time: '5:00 PM – 9:00 PM', defaultBooked: false },
];

export default function BookingModal({ isOpen, onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookings, setBookings] = useState({});
  const [paymentStep, setPaymentStep] = useState(false);

  useEffect(() => {
    // Load bookings from localStorage
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
    // Don't allow selecting dates in the past
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
    
    // Simulate Razorpay Payment Flow
    // In a real app, you would load Razorpay script and open checkout here.
    const isSuccess = window.confirm(`Simulate Razorpay Payment for ${selectedDate} (${selectedSlot.label})?\nClick OK to simulate successful payment.`);
    
    if (isSuccess) {
      // Save booking
      const newBookings = { ...bookings };
      if (!newBookings[selectedDate]) newBookings[selectedDate] = [];
      newBookings[selectedDate].push(selectedSlot.id);
      
      localStorage.setItem('monarchBookings', JSON.stringify(newBookings));
      setBookings(newBookings);
      
      alert('Payment Successful! Redirecting to WhatsApp for confirmation.');
      
      // WhatsApp redirect
      const message = `I want to book Monarch Pavilion on ${selectedDate} for the ${selectedSlot.label} slot.`;
      window.open(`https://wa.me/919895205469?text=${encodeURIComponent(message)}`, '_blank');
      onClose();
    }
  };

  const renderCalendar = () => {
    const days = [];
    const today = new Date();
    today.setHours(0,0,0,0);

    // Empty cells for alignment
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Days of month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isPast = checkDate < today;
      const fullyBooked = isDayFullyBooked(dateStr);
      const isSelected = selectedDate === dateStr;
      
      let btnClass = "h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors ";
      if (isPast) {
        btnClass += "text-gray-300 cursor-not-allowed";
      } else if (fullyBooked) {
        btnClass += "bg-red-100 text-red-500 line-through cursor-not-allowed";
      } else if (isSelected) {
        btnClass += "bg-primary text-white shadow-md";
      } else {
        btnClass += "hover:bg-primary/10 cursor-pointer";
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
        <div className="flex justify-between items-center mb-4 px-2">
          <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded-full"><ChevronLeft size={20} /></button>
          <span className="font-semibold text-lg">
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </span>
          <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded-full"><ChevronRight size={20} /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mb-2 text-xs text-gray-500 font-medium">
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
      <div className="mt-6 border-t pt-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-800"><Clock size={18} /> Select Time Slot for {selectedDate}</h3>
        <div className="space-y-3">
          {TIME_SLOTS.map((slot) => {
            const isBooked = slot.defaultBooked || (bookings[selectedDate] && bookings[selectedDate].includes(slot.id));
            const isSelected = selectedSlot?.id === slot.id;
            
            return (
              <div 
                key={slot.id}
                onClick={() => handleSlotClick(slot)}
                className={`p-3 rounded-lg border-2 flex justify-between items-center transition-all ${
                  isBooked 
                    ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed' 
                    : isSelected 
                      ? 'border-primary bg-primary/5 cursor-pointer shadow-sm'
                      : 'border-gray-200 hover:border-primary/50 cursor-pointer'
                }`}
              >
                <div>
                  <div className="font-medium text-gray-900">{slot.label}</div>
                  <div className="text-sm text-gray-500">{slot.time}</div>
                </div>
                {isBooked && <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">Booked</span>}
                {!isBooked && isSelected && <span className="text-xs bg-primary text-white px-2 py-1 rounded-full font-medium">Selected</span>}
                {!isBooked && !isSelected && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Available</span>}
              </div>
            );
          })}
        </div>
        <p className="text-sm text-center text-gray-500 mt-4 italic">
          * If you want to customize your booking, please <a href="#contact" onClick={onClose} className="text-primary font-medium hover:underline">contact us directly</a>.
        </p>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>
        
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CalendarIcon className="text-primary" /> Check Availability
          </h2>
          
          {renderCalendar()}
          {renderTimeSlots()}
          
          {selectedDate && selectedSlot && (
            <div className="mt-6 pt-4 border-t">
              <button 
                onClick={handleProceed}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1"
              >
                Proceed to Book ({selectedSlot.label})
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">
                You will be redirected to WhatsApp for final confirmation after payment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
