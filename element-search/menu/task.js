let arr = Array.from(document.querySelectorAll(".menu__link"));
arr.forEach(element => {
    console.log(element.nextElementSibling)
    element.onclick = function() {
      if (document.querySelector(".menu_active") !== null) {
        document.querySelector(".menu_active").classList.remove("menu_active")
      };
      if (element.nextElementSibling.classList.contains("menu")) {
        element.nextElementSibling.classList.add('menu_active');
        return false;
      };
    };
});