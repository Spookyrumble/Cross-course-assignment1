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

function renderProduct(product) {
  const container = document.querySelector(".products-container");
  const h1 = document.querySelector("h1");
  const loadingProductAnimation = document.querySelector("#loader");
  const apifilter = product.tags[0].name;

  if (filter == apifilter) {
    loadingProductAnimation.innerHTML = "";

    h1.innerHTML = "jackets for" + " " + apifilter;
    const div = document.createElement("div");
    div.classList.add("card");

    const divImage = document.createElement("div");
    divImage.classList.add("card__image");
    const link = document.createElement("a");
    link.setAttribute("href", `detail.html?id=${product.id}`);
    const img = document.createElement("img");
    img.classList.add("sailor");
    img.setAttribute("src", `${product.images[0].src}`);
    img.setAttribute("alt", `${product.images[0].alt}`);
    link.append(img);
    divImage.append(link);
    div.append(divImage);

    const divNamePrice = document.createElement("div");
    divNamePrice.classList.add("nameprice");
    const h2 = document.createElement("h2");
    h2.innerText = product.name;
    const h3 = document.createElement("h3");
    h3.innerHTML = product.price_html;
    divNamePrice.append(h2);
    divNamePrice.append(h3);
    div.append(divNamePrice);

    const divProductCta = document.createElement("div");
    divProductCta.classList.add("product-cta");
    const addToCart = document.createElement("a");
    addToCart.setAttribute("id", `addCart`);
    addToCart.innerText = "Add to cart";
    const buyNow = document.createElement("a");
    buyNow.setAttribute("id", `buyNow`);
    buyNow.setAttribute("href", "../checkout.html");
    buyNow.innerText = "Buy Now";
    divProductCta.append(addToCart);
    divProductCta.append(buyNow);
    div.append(divProductCta);

    container.append(div);

    addToCart.addEventListener("click", function () {
      const cartDetails = {
        jacketId: `${product.id}`,
        image: `${product.images[0].src}`,
        caption: `${product.images[0].src}`,
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

    buyNow.addEventListener("click", function () {
      const cartDetails = {
        jacketId: `${product.id}`,
        image: `${product.images[0].src}`,
        caption: `${product.images[0].src}`,
        price: `${product.prices.price}`,
        name: `${product.name}`,
        details: `${product.description}`,
      };
      console.log("cart saved to storage");
      let newCart = JSON.parse(localStorage.getItem("cart")) || [];
      newCart.push(cartDetails);
      localStorage.setItem("cart", JSON.stringify(newCart));
    });
  }
}

// function renderProduct(product) {
//   const container = document.querySelector(".products-container");
//   const h1 = document.querySelector("h1");
//   const loadingProductAnimation = document.querySelector("#loader");
//   const apifilter = product.tags[0].name;

//   if (filter == apifilter) {
//     loadingProductAnimation.innerHTML = "";

//     h1.innerHTML = "jackets for" + " " + apifilter;
//     container.innerHTML += `<div class="card">
//                               <div class="card__image">
//                                   <a href="detail.html?id=${product.id}">
//                                   <img
//                                       class="sailor"
//                                       src="${product.images[0].src}"
//                                       alt="${product.images[0].alt}"
//                                   />
//                                   </a>
//                               </div>
//                               <div class="nameprice">
//                                   <h2>${product.name}</h2>
//                                   <h3>${product.price_html}</h3>
//                               </div>
//                               <div class="product-cta">
//                                   <a id="addCart${idCounter}" >Add to cart</a>
//                                   <a id="buyNow${idCounter}" href="../checkout.html" >Buy Now</a>
//                               </div>
//                             </div>`;

//     const addToCart = document.querySelector(`#addCart${idCounter}`);
//     addToCart.addEventListener("click", function () {
//       const cartDetails = {
//         jacketId: `${product.id}`,
//         image: `${product.images[0].src}`,
//         caption: `${product.images[0].src}`,
//         price: `${product.prices.price}`,
//         name: `${product.name}`,
//         details: `${product.description}`,
//       };
//       console.log("cart saved to storage");
//       let newCart = JSON.parse(localStorage.getItem("cart")) || [];
//       newCart.push(cartDetails);
//       localStorage.setItem("cart", JSON.stringify(newCart));
//       addToCart.innerHTML = "ITEM ADDED";
//       addToCart.style.backgroundColor = "var(--lightblue)";
//       addToCart.style.color = "var(--darkblue)";
//     });

//     idCounter++;
//     console.log("Unique ID increment:", "addCart" + idCounter);
//   }
// }

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
