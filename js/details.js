import { setCartImg } from "../js/navigation.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const url =
  "https://codewithspooks.com/rainydaysproducts/wp-json/wc/store/products/";

async function getsProductById() {
  const response = await fetch(url + id);

  const product = await response.json();

  return product;
}

function renderProduct(product) {
  const container = document.querySelector(".detailsContainer");
  const loadingProductAnimation = document.querySelector("#loader");

  loadingProductAnimation.innerHTML = "";

  container.innerHTML = `<img id="imgContainer"
                                  class="jacket-detail"
                                  src="${product.images[1].src}"
                                  alt="${product.images[0].alt}"
                                />
                                <section class="contact contact_detail">
                                  <div class="wrapper">
                                      <div class="detail__price">
                                          <p>${product.price_html}</p>
                                      </div>
                                      <div class="contact-text">
                                          <h1>${product.name}</h1>
                                          <p>${product.description}
                                          </p>
                                      </div>
                                  </div>
                                </section>
                                <section class="index__cta">
                                    <a id="addCart" class="cta" >Add to cart</a>
                                    <a id="buyBtn" class="cta" href="../checkout.html">Buy Now</a>
                                    <a id="bckbtn" class="cta-small">Go Back</a>
                                </section>`;

  const addToCart = document.querySelector("#addCart");
  const buyButn = document.querySelector("#buyBtn");
  const backButton = document.querySelector("#bckbtn");

  backButton.addEventListener("click", function () {
    history.back();
  });

  addToCart.addEventListener("click", function () {
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
    addToCart.innerHTML = "ITEM ADDED";
    addToCart.style.backgroundColor = "var(--lightblue)";
    addToCart.style.color = "var(--darkblue)";
  });

  buyButn.addEventListener("click", function () {
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
    buyButn.innerHTML = "ITEM ADDED";
    buyButn.style.backgroundColor = "var(--lightblue)";
    buyButn.style.color = "var(--darkblue)";
  });
}

async function main() {
  const product = await getsProductById();
  renderProduct(product);
}
main();
