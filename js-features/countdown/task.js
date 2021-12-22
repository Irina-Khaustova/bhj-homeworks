const timerDisplay = document.getElementById("timer");
const decrease = function() {
  timerDisplay.textContent -= 1;
    if (timerDisplay.textContent < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(countdown);
    }
};

timerDisplay.textContent = '00:00:59';
let timerValue = (timerDisplay.textContent.split(':').pop() - 1)*1000;

const decrease1 = function() {

  let timer1 = new Date(timerValue);
  hours = timer1.getUTCHours();
  minutes = timer1.getUTCMinutes();
  seconds = timer1.getUTCSeconds();
  timerValue -= 1000;
  timerDisplay.textContent = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  if (timerValue < 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(countdown);
  }
}

const countdown = setInterval(decrease1, 1000);