// ADDS LISTNERS TO THE INDEX MAIN BUTTONS PASSING THE FILTER VALUE THROUGH LOCAL STORAGE TO USE ON PRODUCT PAGE

const forHer = document.querySelector("#forHer");
const forHim = document.querySelector("#forHim");
const cartImg = document.querySelector(".cart-img");

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
  setCartImg();
});
