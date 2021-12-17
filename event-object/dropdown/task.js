const selectValue = Array.from(document.querySelectorAll(".dropdown"));

selectValue.forEach(element => {
  const selectedItem = element.querySelector(".dropdown__value"); 
  const dropdownItems = Array.from(element.querySelectorAll(".dropdown__item"));

    console.log(dropdownItems)
   // console.log(elem.querySelector(".dropdown__link"))
//}
  selectedItem.onclick = function() {
        const list = element.querySelector(".dropdown__list");
        console.log(list)
        if (list.classList.contains("dropdown__list_active")) {
            list.classList.remove("dropdown__list_active");
            console.log(element.classList.contains("dropdown__list_active"))
          } else {
            list.classList.add("dropdown__list_active")
          } 
          return false;
    }

dropdownItems.forEach(element => {
    element.onclick = function() {
        //return false;
    const newValue = element.querySelector(".dropdown__link").textContent;
    selectedItem.textContent = newValue;
    document.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
    console.log(selectedItem.textContent)
    console.log(element.querySelector(".dropdown__link").textContent)
    return false;
    }
});

});



