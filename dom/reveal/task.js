const blocks = Array.from(document.querySelectorAll(".reveal"));
//const blockCoordinates = .getBoundingClientRect().top;
const visibleArea = window.innerHeight;
//console.log(document.getBoundingClientRect().top);
console.log(blocks)

function isInViewport(elem) {
    console.log(elem.getBoundingClientRect().top);
    console.log(window.innerHeight);
  if (150 < elem.getBoundingClientRect().top && elem.getBoundingClientRect().top < (1.5 * window.innerHeight)) {
      console.log("да");
      return elem.classList.add("reveal_active");
  } else {
    return elem.classList.remove("reveal_active");
    console.log("нет");
  };
};

blocks.forEach((element) => {
    element.onscroll = isInViewport(element);
});

