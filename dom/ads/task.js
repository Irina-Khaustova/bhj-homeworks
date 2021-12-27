const rotators = Array.from(document.querySelectorAll(".rotator"));
let timer = 0;

rotators.forEach(element => {
  //let timer = 0;
  const rotatorCases = Array.from(element.querySelectorAll(".rotator__case"));
 
  let indexActiveCase = rotatorCases.indexOf(element.querySelector(".rotator__case_active"));
  let activeCase = element.querySelector(".rotator__case_active");
 
  const changer = function () {
  
    activeCase.classList.remove('rotator__case_active');
    if (indexActiveCase === rotatorCases.length - 1) {
      indexActiveCase = 0;
    }
    else {
      indexActiveCase++;
    };

    activeCase = rotatorCases[indexActiveCase];
    activeCase.classList.add('rotator__case_active');
    
    rotatorCases.forEach(elem => {
      timer = elem.dataset.speed;
      console.log(elem.dataset.speed)
      elem.style.color = elem.dataset.color; 
  });

  };
  console.log(timer)
  const endlessСhanger = setInterval (changer, timer);
});
