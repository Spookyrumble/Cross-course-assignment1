// GRABS THE ID FROM THE URL AND LOGS IT
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log("Product ID:" + " " + id);

// FETCHES THE URL + ID

const url =
  "https://codewithspooks.com/rainydaysproducts/wp-json/wc/store/products/";

async function getsProductById() {
  const response = await fetch(url + id);

  const product = await response.json();

  return product;
}

// CREATES AND DISPLAY THE PRODUCTS
function renderProduct(product) {
  const loadingProductAnimation = document.querySelector("#loader");
  loadingProductAnimation.innerHTML = "";

  const container = document.querySelector(".detailsContainer");

  const image = document.createElement("img");
  image.classList.add("jacket-detail");
  image.setAttribute("id", "imgContainer");
  image.setAttribute("src", `${product.images[1].src}`);
  image.setAttribute("alt", `${product.images[0].alt}`);
  container.append(image);

  const section = document.createElement("section");
  section.classList.add("contact", "contact_detail");
  container.append(section);

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  section.append(wrapper);

  const priceContainer = document.createElement("div");
  priceContainer.classList.add("detail__price");
  const priceHtml = document.createElement("p");
  priceHtml.innerHTML = product.price_html;
  wrapper.append(priceContainer);
  priceContainer.append(priceHtml);

  const details = document.createElement("div");
  details.classList.add("contact-text");
  const nameText = document.createElement("h1");
  nameText.innerHTML = product.name;
  const description = document.createElement("p");
  description.innerHTML = product.description;
  wrapper.append(details);
  details.append(nameText);
  details.append(description);

  const ctaSection = document.createElement("section");
  ctaSection.classList.add("index__cta");
  const addCart = document.createElement("a");
  addCart.classList.add("cta");
  addCart.innerText = "Add to cart";
  const buyBtn = document.createElement("a");
  buyBtn.classList.add("cta");
  buyBtn.href = "/checkout.html";
  buyBtn.innerText = "Buy Now";
  const bckbtn = document.createElement("a");
  bckbtn.classList.add("cta-small");
  bckbtn.innerText = "Go Back";
  container.append(ctaSection);
  ctaSection.append(addCart);
  ctaSection.append(buyBtn);
  ctaSection.append(bckbtn);

  bckbtn.addEventListener("click", function () {
    history.back();
  });

  addCart.addEventListener("click", function () {
    const cartDetails = {
      jacketId: `${product.id}`,
      image: `${product.images[0].src}`,
      caption: `${product.images[0].alt}`,
      price: `${product.prices.price}`,
      name: `${product.name}`,
      details: `${product.description}`,
    };
    console.log("cart saved to storage");
    let newCart = JSON.parse(localStorage.getItem("cart")) || [];
    newCart.push(cartDetails);
    localStorage.setItem("cart", JSON.stringify(newCart));
    addCart.innerHTML = "ITEM ADDED";
    addCart.style.backgroundColor = "var(--lightblue)";
    addCart.style.color = "var(--darkblue)";
  });

  buyBtn.addEventListener("click", function () {
    const cartDetails = {
      jacketId: `${product.id}`,
      image: `${product.images[0].src}`,
      caption: `${product.images[0].alt}`,
      price: `${product.prices.price}`,
      name: `${product.name}`,
      details: `${product.description}`,
    };
    console.log("cart saved to storage");
    let newCart = JSON.parse(localStorage.getItem("cart")) || [];
    newCart.push(cartDetails);
    localStorage.setItem("cart", JSON.stringify(newCart));
    buyBtn.innerHTML = "ITEM ADDED";
    buyBtn.style.backgroundColor = "var(--lightblue)";
    buyBtn.style.color = "var(--darkblue)";
  });
}

// AWAITS THE FETCH AND PASSES THE DATA TO THE DISPLAY FUNCTION
async function main() {
  const product = await getsProductById();
  renderProduct(product);
}
main();
