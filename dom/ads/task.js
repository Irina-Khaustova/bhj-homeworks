const rotators = Array.from(document.querySelectorAll(".rotator"));

rotators.forEach(element => {
  let timer = 0;
  const rotatorCases = Array.from(element.querySelectorAll(".rotator__case"));

  rotatorCases.forEach(elem => {

      elem.style.color = elem.dataset.color; 
  });
 
  let indexActiveCase = rotatorCases.indexOf(element.querySelector(".rotator__case_active"));
  let activeCase = element.querySelector(".rotator__case_active");
 
  let endlessChanger = setTimeout(function changer() {
  
    activeCase.classList.remove('rotator__case_active');
    if (indexActiveCase === rotatorCases.length - 1) {
      indexActiveCase = 0;
    }
    else {
      indexActiveCase++;
    };

    activeCase = rotatorCases[indexActiveCase];
    activeCase.classList.add('rotator__case_active');
    timer = activeCase.dataset.speed;
    endlessChanger = setTimeout(changer, timer)
 }, timer)
})
