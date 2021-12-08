let slidersBox = document.querySelector(".slider__items");
let sliders = Array.from(document.querySelectorAll(".slider__item"));
let firstSlide = sliders[0];
let lastSlide = sliders[sliders.length - 1]
let navigation = document.querySelector(".slider__navigation")
console.log(sliders[sliders.length - 1])
navigation.querySelector(".slider__arrow_next").onclick = function() {
  let activeSlideNext = slidersBox.querySelector('.slider__item_active');
  console.log(activeSlideNext.nextElementSibling)
  if (activeSlideNext.nextElementSibling === null) {
    firstSlide.classList.add("slider__item_active");
    activeSlideNext.classList.remove("slider__item_active");
  } else {
    activeSlideNext.nextElementSibling.classList.add("slider__item_active")
    activeSlideNext.classList.remove("slider__item_active");
  }
}
navigation.querySelector(".slider__arrow_prev").onclick = function() {
  let activeSlidePrev = slidersBox.querySelector('.slider__item_active');
  console.log(activeSlidePrev.previousElementSibling)
  if (activeSlidePrev.previousElementSibling === null) {
    lastSlide.classList.add("slider__item_active");
    activeSlidePrev.classList.remove("slider__item_active");
  } else {
    activeSlidePrev.previousElementSibling.classList.add("slider__item_active")
    activeSlidePrev.classList.remove("slider__item_active");
  }
}