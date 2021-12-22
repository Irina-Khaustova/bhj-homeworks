const allInterests = Array.from(document.querySelectorAll(".interest__check"));
console.log(allInterests)

allInterests.forEach( (elem) => {

  function checkedElement () {
   
    if (elem.parentElement.nextElementSibling.querySelectorAll(".interest__check")) {
      
      const child = Array.from(elem.parentElement.nextElementSibling.querySelectorAll(".interest__check"));
      console.log(elem.parentElement.nextElementSibling.querySelectorAll(".interest__check"))
  
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


