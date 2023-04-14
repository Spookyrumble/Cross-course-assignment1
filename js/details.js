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

// const jacketData = JSON.parse(localStorage.getItem("products"));

// const imgContainer = document.querySelector(".detailsContainer");
// const container = document.querySelector(".contact_detail");
// const addToCart = document.querySelector("#addCart");

// const dataFilter = jacketData.filter(function (jacketData) {
//   return jacketData.jacketId == id;
// });
// console.table(dataFilter);

// async function renderJacketDetails() {
//   const response = await fetch(url);
//   const data = await response.json();

//   if (dataFilter) {
//   }
//   for (let i = 0; i < dataFilter.length; i++) {
//     let item = dataFilter[i];

//     imgContainer.innerHTML = `<img id="imgContainer" class="jacket-detail" src="${item.image.src2}" alt="${item.image.caption}"/>
//                               <section class="contact contact_detail">
//                                   <div class="wrapper">
//                                       <div id="detail__sizeboxes" class="sizeboxes">
//                                           <input type="checkbox" name="c1small" id="c1small" />
//                                           <label for="c1small" class="labelbox" id="l1small">s</label>
//                                           <input type="checkbox" name="M" id="c1medium" />
//                                           <label for="c1medium" class="labelbox" id="l1medium">m</label>
//                                           <input type="checkbox" name="L" id="c1large" />
//                                           <label for="c1large" class="labelbox" id="l1large">l</label>
//                                       </div>
//                                       <div class="detail__price">
//                                           <p>$ ${item.price}</p>
//                                       </div>
//                                   </div>
//                                       <h1 class="contact-text">${item.name}</h1>
//                                       <p class="contact-text">${item.detailText}</p>
//                               </section>
//                                 <section class="index__cta">
//                                     <a id="addCart" class="cta" href="#">Add to cart</a>
//                                     <a id="buyBtn" class="cta" href="../checkout.html">Buy Now</a>
//                                     <a class="cta-small" href="#">Go Back</a>
//                                 </section>`;
//   }
// }
//     const addToCart = document.querySelector("#addCart");

//     addToCart.addEventListener("click", function () {
//       const cartDetails = {
//         jacketId: `${item.jacketId}`,
//         image: `${item.image.src}`,
//         caption: `${item.image.caption}`,
//         price: `${item.price}`,
//         name: `${item.name}`,
//         details: `${item.detailText}`,
//       };
//       console.log("cart saved to storage");
//       let newCart = JSON.parse(localStorage.getItem("cart")) || [];
//       newCart.push(cartDetails);
//       localStorage.setItem("cart", JSON.stringify(newCart));
//       addToCart.innerHTML = "ITEM ADDED";
//       addToCart.style.backgroundColor = "var(--lightblue)";
//       addToCart.style.color = "var(--darkblue)";
//     });

//     const buyBtn = document.querySelector("#buyBtn");

//     buyBtn.addEventListener("click", function () {
//       const cartDetails = {
//         jacketId: `${item.jacketId}`,
//         image: `${item.image.src}`,
//         caption: `${item.image.caption}`,
//         price: `${item.price}`,
//         name: `${item.name}`,
//         details: `${item.detailText}`,
//       };
//       console.log("cart saved to storage");
//       let newCart = JSON.parse(localStorage.getItem("cart")) || [];
//       newCart.push(cartDetails);
//       localStorage.setItem("cart", JSON.stringify(newCart));
//       buyBtn.innerHTML = "ITEM ADDED";
//       buyBtn.style.backgroundColor = "var(--lightblue)";
//       buyBtn.style.color = "var(--darkblue)";
//     });
//   }
// }

// renderJacketDetails();

// const backButton = document.querySelector(".cta-small");
