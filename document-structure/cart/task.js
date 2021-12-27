const quantityControl = Array.from(document.querySelectorAll(".product__quantity-control"));
const quantityControlincs = Array.from(document.querySelectorAll("product__quantity-control_inc"));
const carts = Array.from(document.querySelectorAll(".product__add"));

quantityControl.forEach((elem) => {

  const product = elem.closest(".product");

    elem.onclick = function () {

        if (elem.classList.contains("product__quantity-control_dec")) {
            if (product.querySelector(".product__quantity-value").textContent >= 1) {
          product.querySelector(".product__quantity-value").textContent -= 1;
            }
        }
        else if (elem.classList.contains("product__quantity-control_inc")) {
          product.querySelector(".product__quantity-value").textContent += 1;
        }
    }
})

function createCart(a) {

  const newCart = document.createElement('div');
  newCart.classList.add("cart__product");
  newCart.dataset.id = a.dataset.id;
  const newCartImage = document.createElement('img');
  newCartImage.classList.add("cart__product-image");
  newCartImage.src = a.querySelector(".product__image").src;
  const newCartCount = document.createElement('div');
  newCartCount.classList.add("cart__product-count");
  newCartCount.textContent = a.querySelector(".product__quantity-value").textContent;
  newCart.appendChild(newCartImage);
  newCart.appendChild(newCartCount);
  document.querySelector(".cart__products").appendChild(newCart)
  console.log(document.querySelector(".cart__products"))
}


carts.forEach (element => {

  const product = element.closest(".product")
  console.log(product)

  element.onclick = function () {

    let cartProduct = Array.from(document.querySelectorAll(".cart__product"));
    console.log(cartProduct)
    //console.log(cartProduct[0].dataset.id)
    console.log(product.dataset.id)
    const findCart = cartProduct.findIndex(elem2 => {
 
    elem2.dataset.id == product.dataset.id
    })
    console.log(findCart)
    if (findCart === -1) {
    
      console.log(cartProduct)
      return createCart(product)
    }
    else {
        cartProduct[findCart].querySelector(".cart__product-count").textContent = productCart.querySelector(".product__quantity-value").textContent;
    }
console.log()

  }
})
