document.getElementById("modal_main").classList.add("modal_active");
let arr = Array.from(document.querySelectorAll('div .modal__close'));
console.log(document.querySelectorAll('.modal__close'))
arr.forEach(element => {
  element.onclick = function() {
    element.closest(".modal_active").classList.remove("modal_active");
    console.log(element, element.closest('.modal_active'))
  }
});
document.querySelector('.show-success').onclick = function() {
  document.querySelector(".modal_active").classList.remove("modal_active")
  document.getElementById("modal_success").classList.add("modal_active");
}