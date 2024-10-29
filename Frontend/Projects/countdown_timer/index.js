let countdown;
let timeLeft = 0;

function startCountdown() {
  const secondsInput = document.getElementById('secondsinput').value;
  timeLeft = parseInt(secondsInput);


  document.getElementById("timer").textContent = `Time left: ${timeLeft}s`; // Initial display
  clearInterval(countdown);
  
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;
    
    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").textContent = "Time is up!";
    }
  }, 1000);
}
