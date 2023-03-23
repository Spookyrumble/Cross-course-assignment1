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

// trashCan.addEventListener("click", function () {
//   localStorage.removeItem("cart");
// });
