let countHit = 0;
let countMiss = 0;
let holes = Array.from(document.querySelectorAll(".hole"));
holes.forEach(element => {
  element.onclick = function() {
    if (element.className.includes( 'hole_has-mole' )) {
      document.getElementById("dead").textContent++;
      countHit++;
    }
    else {
      document.getElementById("lost").textContent++;
      countMiss++;
    }
    if (countHit === 5) {
      countMiss = 0;
      countHit = 0;
      document.getElementById("dead").textContent = 0;
      document.getElementById("lost").textContent = 0;
      return alert('Вы выиграли!');
    }
    if (countMiss === 10) {
      countMiss = 0;
      countHit = 0; 
      document.getElementById("dead").textContent = 0;
      document.getElementById("lost").textContent = 0;
      return alert('Вы проиграли!')
    }
    }
});
    
