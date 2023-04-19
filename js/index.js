import setCartImg from ".navigation.js/";

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

const container = document.querySelector(".singleContainer");

const baseUrl =
  "https://www.codewithspooks.com/rainydaysproducts/wp-json/wc/store/products";

const featured = "?featured=true";

async function fetchFeatured() {
  const response = await fetch(baseUrl + featured);
  const data = await response.json();
  return data;
}

// const featureCont = document.querySelector("singleContainer");

function renderOnSale(data) {
  for (let i = 0; i < data.length; i++) {
    const onSaleProduct = data[i];
    console.log(onSaleProduct);

    const img = onSaleProduct.images[0].thumbnail;
    const imgAlt = onSaleProduct.images[0].alt;
    const prodName = onSaleProduct.name;
    const price = onSaleProduct.price_html;

    container.innerHTML += `<div class="featuredShowcase">
                                  <h2 class="highligthText" style="font-size: 1rem; padding: 2px;">on sale right now</h2>
                                  <p>${prodName}</p>
                                  <p style="letter-spacing: 0px; margin-top: -10px;">${price}</p>
                              <div class="imgCont">
                                  <img src="${img}" alt="${imgAlt}">
                              </div>
                              <div class="saleBtnCont">
                                  <a id="buyNow${onSaleProduct.id}" class="saleBtn" href="../checkout.html?id=${onSaleProduct.id}">Buy Now</a>
                              </div>
                            </div>
                              `;

    const buyNow = document.querySelector(`#buyNow${onSaleProduct.id}`);

    container.addEventListener("click", function () {
      const cartDetails = {
        jacketId: `${onSaleProduct.id}`,
        image: `${onSaleProduct.image[0].src}`,
        caption: `${onSaleProduct.images[0].alt}`,
        price: `${onSaleProduct.prices.price}`,
        name: `${prodName}`,
        details: `${onSaleProduct.description}`,
      };
      console.log("cart saved to storage");
      let newCart = JSON.parse(localStorage.getItem("cart")) || [];
      newCart.push(cartDetails);
      localStorage.setItem("cart", JSON.stringify(newCart));
    });
  }
}

async function main() {
  const onSaleProduct = await fetchFeatured();
  renderOnSale(onSaleProduct);
}

main();
