const mensButton = document.querySelector(".cta-small");

mensButton.addEventListener("click", function () {
  const men = "men";
  localStorage.setItem("filter", JSON.stringify(men));
});

const womensButton = document.querySelector(".cta");

womensButton.addEventListener("click", function () {
  const women = "women";
  localStorage.setItem("filter", JSON.stringify(women));
});
