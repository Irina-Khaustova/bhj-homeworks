let arr = Array.from(document.querySelectorAll(".menu__link"));
arr.forEach(element => {
    console.log(element.nextElementSibling)
    element.onclick = function() { 
      if (element.nextElementSibling) {

        if (element.nextElementSibling.classList.contains("menu_active")) {
          element.nextElementSibling.classList.remove('menu_active');
          return false;
      }

      else if (document.querySelector(".menu_active") !== null) {
         document.querySelector(".menu_active").classList.remove("menu_active")
       }
        element.nextElementSibling.classList.add('menu_active');
        return false;
      }
      else if (document.querySelector(".menu_active") !== null) {
        document.querySelector(".menu_active").classList.remove("menu_active")
      }
    }  
});
