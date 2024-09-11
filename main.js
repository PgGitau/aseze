(function() {
    "use strict";

    function startTimer(targetDate) {
        const timerElement = document.getElementById('timer');
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');   
    
    
        const intervalId = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = targetDate - currentTime;
    
            if (timeDifference <= 0) {
                clearInterval(intervalId);
                timerElement.textContent = 'Time is up! The event is ongoing';
                timerElement.classList.add('timer-finished');
                return;
            }
    
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));   
    
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);   
    
    
            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        }, 1000);   
    
    }
    
    // Set the target date (replace with your desired date)
    const targetDate = new Date('2025-10-23 00:00:00'); // October 23rd, 2025, 12:00 AM
    
    // Start the timer
    startTimer(targetDate);

     // initiate pure counter
  new PureCounter();


  // Function to observe the elements
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once element is visible
        }
    });
});

// Selecting all elements with 'animate-on-scroll' class
const scrollElements = document.querySelectorAll('.animate-on-scroll');

// Observing each element
scrollElements.forEach(el => {
    observer.observe(el);
});
  
  })()