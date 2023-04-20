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

// const container = document.querySelector(".singleContainer");

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

    const container = document.querySelector(".singleContainer");

    const featuredContainer = document.createElement("div");
    featuredContainer.classList.add("featuredShowcase");
    container.append(featuredContainer);

    const titleText = document.createElement("h2");
    titleText.classList.add("highlightText");
    titleText.style.fontSize = "1rem";
    titleText.style.padding = "2px";
    titleText.innerText = "featured products";
    featuredContainer.append(titleText);
    const nameText = document.createElement("p");
    nameText.innerText = prodName;
    featuredContainer.append(nameText);
    const priceHtml = document.createElement("p");
    priceHtml.innerHTML = price;
    priceHtml.style.letterSpacing = "0px";
    priceHtml.style.marginTop = "-10px";
    featuredContainer.append(priceHtml);

    const imgCont = document.createElement("div");
    imgCont.classList.add("imgCont");
    featuredContainer.append(imgCont);
    const image = document.createElement("img");
    image.setAttribute("src", img);
    image.setAttribute("alt", img);
    imgCont.append(image);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("saleBtnCont");
    featuredContainer.append(btnContainer);
    const btn = document.createElement("a");
    btn.classList.add("saleBtn");
    btn.setAttribute("href", `../checkout.html?id=${onSaleProduct.id}`);
    btn.innerText = "Buy Now";
    btnContainer.append(btn);

    container.append(featuredContainer);

    btn.addEventListener("click", function () {
      const cartDetails = {
        jacketId: `${onSaleProduct.id}`,
        image: `${onSaleProduct.images[0].src}`,
        caption: `${onSaleProduct.images[0].src}`,
        price: `${cs.price}`,
        name: `${onSaleProduct.name}`,
        details: `${onSaleProduct.description}`,
      };
      console.log("cart saved to storage");
      let newCart = JSON.parse(localStorage.getItem("cart")) || [];
      newCart.push(cartDetails);
      localStorage.setItem("cart", JSON.stringify(newCart));
      addToCart.innerHTML = "ITEM ADDED";
      addToCart.style.backgroundColor = "var(--lightblue)";
      addToCart.style.color = "var(--darkblue)";
    });
  }
}

async function main() {
  const onSaleProduct = await fetchFeatured();
  renderOnSale(onSaleProduct);
}

main();
