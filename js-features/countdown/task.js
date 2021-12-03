const timerValue = document.getElementById("timer");
const decrease = function() {
    timerValue.textContent -= 1;
    if (timerValue.textContent < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(countdown);
    }
};
//const countdown = setInterval(decrease, 1000);
//countdown;
let fgh = (timerValue.textContent)*1000


const decrease1 = function() {

  let timer1 = new Date(fgh);
  hours = timer1.getUTSHours();
  minutes = timer1.getUTSMinutes();
  seconds = timer1.getSeconds();
  fgh -= 1000;
  timerValue.textContent = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  if (fgh < 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(countdown);
  }
}

const countdown = setInterval(decrease1, 1000);