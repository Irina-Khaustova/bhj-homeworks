let countHit = 0;
let countMiss = 0;
let holes = Array.from(document.querySelectorAll(".hole"));
holes.forEach(element => {
  element.onclick = function() {
    if (element.className.includes( 'hole_has-mole' )) {
      document.getElementById("dead").textContent++;
      countHit++;
      console.log()
    }
    else {
      document.getElementById("lost").textContent++;
      countMiss++;
    }
    if (countMiss === 10 || countHit === 5) {
      countMiss = 0;
      countHit = 0;
      document.getElementById("dead").textContent = 0;
      document.getElementById("lost").textContent = 0;
    }
    console.log(countHit, countMiss)
    }
});
    console.log(countHit, countMiss)
