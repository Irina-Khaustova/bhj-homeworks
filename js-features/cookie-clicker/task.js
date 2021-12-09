let clickerCount = document.getElementById("clicker__counter");
let cookieImg = document.getElementById("cookie");
let date1 = new Date();
let speed;

let parent = document.querySelector(".clicker");
let div = document.createElement('div');
div.className = "clicker__status";
div.innerHTML = "Скорость клика <span>0</span>";
let elem = document.getElementById("cookie");
elem.before(div)
div.querySelector('span').id = "clicker__speed" 
let clickerSpeed = document.getElementById("clicker__speed");
console.log(div);

cookieImg.onclick = function() {
  date2 = new Date();
  speed = (1/(date2 - date1)*1000).toFixed(2);
  clickerCount.textContent++ ;
  clickerSpeed.textContent = speed;
  if (cookieImg.width === 200) {
    cookieImg.width = 250;
  }
  else {
    cookieImg.width = 200;
  }
  date1 = date2;
  console.log(speed)
};
//console.log(speed)
