const home = document.querySelector("#home");
const forHer = document.querySelector("#forHer");
const forHim = document.querySelector("#forHim");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

forHim.addEventListener("click", function () {
  const men = "men";
  localStorage.setItem("filter", JSON.stringify(men));
  forHim.classList.add("active");
});

forHer.addEventListener("click", function () {
  const women = "women";
  localStorage.setItem("filter", JSON.stringify(women));
  forHer.classList.add("active");
});
