document.addEventListener('DOMContentLoaded', (event) => {
  const countDownDate = new Date("August 29, 2024 08:00:00").getTime();

  const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    
    const distance = countDownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "";
      document.getElementById("countdown-title").innerHTML = "";
    }
  }, 1000);
});
