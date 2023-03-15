// import { jackets } from "./data/products";

// console.log(jackets);

const mensButton = document.querySelector(".cta-small");

mensButton.addEventListener("click", function () {
  // let searchString = new URLSearchParams(window.location.search);
  // searchString.set("?id=men");
  // location.href = window.location.pathname + "?" + searchString.toString();
  const men = "men";
  localStorage.setItem("filter", JSON.stringify(men));
});

const womensButton = document.querySelector(".cta");

womensButton.addEventListener("click", function () {
  // let searchString = new URLSearchParams(window.location.search);
  // searchString.set("?id=men");
  // location.href = window.location.pathname + "?" + searchString.toString();
  const women = "women";
  localStorage.setItem("filter", JSON.stringify(women));
});
