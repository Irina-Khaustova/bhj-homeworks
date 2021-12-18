const fontsizes = Array.from(document.querySelectorAll(".font-size"));
const colorText = Array.from(document.querySelector(".book__control_color").querySelectorAll(".color"));
const colorBackground = Array.from(document.querySelector(".book__control_background").querySelectorAll(".color"));
const book = document.getElementById("book");
console.log(colorText)

fontsizes.forEach( (elem => {
    elem.onclick = function () {
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
        console.log(elem.classList)
    elem.classList.add("font-size_active");
    if (elem.classList.contains("font-size_small")) {
        book.classList.add("book_fs-small");
        return false;
    }
    if (elem.classList.contains("font-size_big")) {
       book.classList.add("book_fs-big");
        console.log(elem.closest("book"))
        return false;
    };
};
}));

colorText.forEach( element => {
  element.onclick = function () {
    document.querySelector(".color_active").classList.remove("color_active");
    console.log(element.classList)
    element.classList.add("color_active");
    book.style.color = element.dataset.textColor;
    console.log(element.dataset.textColor)
    console.log(book.style.color)
    return false;
};
});

colorBackground.forEach( element1 => {
  element1.onclick = function () {
    document.querySelector(".color_active").classList.remove("color_active");
    console.log(element1.classList)
    element1.classList.add("color_active");
    book.style.backgroundColor = element1.dataset.bgColor;
    console.log(element1.dataset.bgColor)
    console.log(book.style.backgroundColor)
    return false;
  };
});
