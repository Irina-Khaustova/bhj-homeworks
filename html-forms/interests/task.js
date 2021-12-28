const allInterests = Array.from(document.querySelectorAll(".interest__check"));
console.log(allInterests)

allInterests.forEach( (elem) => {

  function checkedElement () {
   
    if (elem.closest(".interests_active") === null) {
      
      const child = Array.from(elem.closest(".interest").querySelectorAll(".interest__check"));
  
      child.forEach( element => {
        if (elem.checked === true) {
          element.checked = true;
        } else {
          element.checked = false;
    }
  })
  }
}
elem.addEventListener ('click', checkedElement)
})