let clickerCount = document.getElementById("clicker__counter");
let cookieImg = document.getElementById("cookie");
let date1 = new Date();
let speed;

let parent = document.querySelector(".clicker");
let elem1 = document.querySelector(".clicker__status");
let elem2 = document.getElementById("clicker__counter");
let clone1 = elem1.cloneNode();
let clone2 = elem2.cloneNode();

parent.appendChild(clone1);
clone1.appendChild(clone2);
//let clickerSpeed = clone.querySelector("#clicker__counter")
clone2.id = "clicker__speed";
clone1.textContent = "Скорость клика"
clone2.textContent = 0;
console.log(clone1, clone2);

cookieImg.onclick = function() {
  date2 = new Date();
  speed = (1/(date2 - date1)*1000).toFixed(2);
  clickerCount.textContent++ ;
  clone2.textContent++;
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
