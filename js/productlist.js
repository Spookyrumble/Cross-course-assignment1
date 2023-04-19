import { setCartImg } from "./navigation.js";

const filter = JSON.parse(localStorage.getItem("filter"));
console.log("API tag filter:", filter);

function setClassActive(filterName) {
  if (filterName == "men") {
    forHer.classList.remove("active");
  }
  if (filterName == "women") {
    forHim.classList.remove("active");
  }
}
setClassActive(filter);

// GENERATES THE PRODUCTS FROM LOCALLY STORED FILTER (MENS/WOMENS) AND LOCALLY STORED ARRAY //

const url =
  "https://codewithspooks.com/rainydaysproducts/wp-json/wc/store/products";

async function getsTheProducts() {
  const response = await fetch(url);
  const products = await response.json();
  return products;
}

let idCounter = 0;

function renderProduct(product) {
  const container = document.querySelector(".products-container");
  const h1 = document.querySelector("h1");
  const loadingProductAnimation = document.querySelector("#loader");
  const apifilter = product.tags[0].name;

  if (filter == apifilter) {
    loadingProductAnimation.innerHTML = "";

    h1.innerHTML = "jackets for" + " " + apifilter;
    container.innerHTML += `<div class="card">
                              <div class="card__image">
                                  <a href="detail.html?id=${product.id}">
                                  <img
                                      class="sailor"
                                      src="${product.images[0].src}"
                                      alt="${product.images[0].alt}"
                                  />
                                  </a>
                              </div>
                              <div class="nameprice">
                                  <h2>${product.name}</h2>
                                  <h3>${product.price_html}</h3>
                              </div>
                              <div class="product-cta">
                                  <a id="addCart${product.id}" >Add to cart</a>
                                  <a id="buyNow${product.id}" href="../checkout.html" >Buy Now</a>
                              </div>
                            </div>`;
  }
}

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    renderProduct(product);
  }
}

async function main() {
  const products = await getsTheProducts();
  renderProducts(products);
}
main();

// async function fetchProducts() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i]);

//       let jacket = data[i];
//       // console.log(jacket.jacketId);

//       const container = document.querySelector(".products-container");
//       const h1 = document.querySelector("h1");

//       if (jacket.tags[0].name === searchValue) {
//         h1.innerHTML = "jackets for" + " " + searchValue;
//         container.innerHTML += `<div class="card">
//                                 <div class="card__image">
//                                     <a href="detail.html?id=${jacket.id}">
//                                     <img
//                                         class="sailor"
//                                         src="${jacket.images[0].src}"
//                                         alt="${jacket.images[0].alt}"
//                                     />
//                                     </a>
//                                 </div>
//                                 <div class="nameprice">
//                                     <h2>${jacket.name}</h2>
//                                     <h3>${jacket.price_html}</h3>
//                                 </div>
//                                 <div class="product-cta">
//                                     <a id="addCart${i}" data-jacket='${jacket.id}'>Add to cart</a>
//                                     <a id="buyNow${i}" href="../checkout.html" data-jacket='${jacket.id}'>Buy Now</a>
//                                 </div>
//                                 </div>`;
//         arr.push(`addCart${i}`);
//         arr2.push(`buyNow${i}`);

//       }
//     }
//   } catch (error) {
//     console.log(error, "Fetch borken. Please fix me..");
//   }
// }

// fetchProducts();

// GRABS CART FROM STORAGE. PUSHES CHANGES AND STORES NEW CART //
// function addToCartListener() {
//   arr.forEach((element) => {
//     const addToCart = document.querySelector(`#${element}`);
//     addToCart.addEventListener("click", function (event) {
//       event.preventDefault();
//       const jacketId = addToCart.dataset.product;
//       const jacket = data.find((el) => {
//         return el.jacketId == jacketId;
//       });
//       const cartDetails = {
//         jacketId: `${jacket.id}`,
//         image: `${jacket.images[0].src}`,
//         caption: `${jacket.images[0].alt}`,
//         price: `${jacket.prices.price}`,
//         name: `${jacket.name}`,
//         details: `${jacket.description}`,
//       };
//       console.log("cart saved to storage");
//       let newCart = JSON.parse(localStorage.getItem("cart")) || [];
//       newCart.push(cartDetails);
//       localStorage.setItem("cart", JSON.stringify(newCart));
//       addToCart.innerHTML = "ITEM ADDED";
//       addToCart.style.backgroundColor = "var(--lightblue)";
//       addToCart.style.color = "var(--darkblue)";
//     });
//   });
// }

// // GRABS CART FROM STORAGE. PUSHES CHANGES AND STORES NEW CART AND SENDS USER TO CHECKOUT //
// function buyNowListener() {
//   arr2.forEach((element) => {
//     const buyNow = document.querySelector(`#${element}`);
//     buyNow.addEventListener("click", function (event) {
//       const jacketId = buyNow.dataset.product;
//       const jacket = data.find((el) => {
//         return el.jacketId == jacketId;
//       });
//       const cartDetails = {
//         jacketId: `${jacket.id}`,
//         image: `${jacket.images[0].src}`,
//         caption: `${jacket.images[0].alt}`,
//         price: `${jacket.prices.price}`,
//         name: `${jacket.name}`,
//         details: `${jacket.description}`,
//       };
//       console.log("cart saved to storage");
//       let newCart = JSON.parse(localStorage.getItem("cart")) || [];
//       newCart.push(cartDetails);
//       localStorage.setItem("cart", JSON.stringify(newCart));
//       setCartImg();
//     });
//   });
// }
