const home = document.querySelector("#home");
const forHer = document.querySelector("#forHer");
const forHim = document.querySelector("#forHim");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const cartImg = document.querySelector(".cart-img");
const trashCan = document.querySelector("#trashcan");

forHim.addEventListener("click", function () {
  const men = "men";
  localStorage.setItem("filter", JSON.stringify(men));
});

forHer.addEventListener("click", function () {
  const women = "women";
  localStorage.setItem("filter", JSON.stringify(women));
});

cartImg.addEventListener("click", function () {
  document.location.href = "../checkout.html";
});

export function setCartImg() {
  let storage = localStorage.getItem("cart");

  if (storage && JSON.parse(storage).length > 0) {
    cartImg.src = "../../images/Cart_item.png";
  } else {
    cartImg.src = "../../images/Cart.png";
  }
}
// setCartImg();

// window.addEventListener("storage", function () {
//   // Call the setCartImg function to update the cart image based on the updated cart data in the storage
//   setCartImg();
// });
