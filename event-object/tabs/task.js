const tabs = Array.from(document.querySelectorAll(".tabs"));

tabs.forEach(element => {
    const tabMenu = Array.from(element.querySelectorAll(".tab"));
    const tabContent = Array.from(element.querySelectorAll(".tab__content"))

    tabMenu.forEach(elem => {
      elem.onclick = function () {
        element.querySelector(".tab__content_active").classList.remove("tab__content_active");
        element.querySelector(".tab_active").classList.remove("tab_active");
        console.log(element.querySelector(".tab__content_active"));
        elem.classList.add("tab_active");
        const indexActiveTab = tabMenu.indexOf(elem);
        console.log(indexActiveTab)
        tabContent[indexActiveTab].classList.add("tab__content_active");
      }
    })
})