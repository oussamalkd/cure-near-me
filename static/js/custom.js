
//focus the first input which index is 0 on window load


function updateSlotDateTime() {
    const slots = document.querySelectorAll('.scrollContent');
  
    slots.forEach((slot, index) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + index); // Increment date for each slot
  
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
      const timeSlots = Math.floor(Math.random() * 20) + 1; // Random number of slots for demonstration
      const timeSlotsText = timeSlots === 1 ? '1 Slot' : `${timeSlots} Slots`;
  
      slot.querySelector('.date').textContent = formattedDate;
      slot.querySelector('.timeSlots').textContent = timeSlotsText;
    });
  }
  
  updateSlotDateTime();


  