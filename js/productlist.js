// SETS THE HIGHLIGHT ON NAVIGATION THAT SHOWS WHAT PAGE THE USER IS ON //
const filter = JSON.parse(localStorage.getItem("filter"));
console.log(filter);

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
const arr = [];

const searchValue = JSON.parse(localStorage.getItem("filter"));

const data = JSON.parse(localStorage.getItem("products"));

console.log(searchValue + "s" + " " + "jackets");

function renderProducts() {
  const container = document.querySelector(".products-container");
  const h1 = document.querySelector("h1");

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);

    let jacket = data[i];
    // console.log(jacket.jacketId);

    if (jacket.model === searchValue) {
      h1.innerHTML = "jackets for" + " " + searchValue;
      container.innerHTML += `<div class="card">
                                      <div class="sizeboxes">
                                          <input type="checkbox" name="c1small" id="c1small" />
                                          <label for="c1small" class="labelbox" id="l1small">s</label>
                                          <input type="checkbox" name="M" id="c1medium" />
                                          <label for="c1medium" class="labelbox" id="l1medium">m</label>
                                          <input type="checkbox" name="L" id="c1large" />
                                          <label for="c1large" class="labelbox" id="l1large">l</label>
                                      </div>
                              <div class="card__image">
                                  <a href="detail.html?id=${jacket.jacketId}">
                                  <img
                                      class="sailor"
                                      src="${jacket.image.src}"
                                      alt="${jacket.image.caption}"
                                  />
                                  </a>
                              </div>
                              <div class="nameprice">
                                  <h2>${jacket.name}</h2>
                                  <h3>$ ${jacket.price}</h3>
                              </div>
                              <div class="product-cta">
                                  <a id="addCart${i}" data-jacket='${jacket.jacketId}'>Add to cart</a>
                                  <a href="../checkout.html">Buy Now</a>
                              </div>
                              </div>`;
      arr.push(`addCart${i}`);
    }
  }
}

// GRABS CART FROM STORAGE. PUSHES CHANGES AND STORES NEW CART //
function addToCartListener() {
  arr.forEach((element) => {
    const addToCart = document.querySelector(`#${element}`);
    addToCart.addEventListener("click", function (event) {
      const jacketId = addToCart.dataset.jacket;
      const jacket = data.find((el) => {
        return el.jacketId == jacketId;
      });
      const cartDetails = {
        image: `${jacket.image.src}`,
        caption: `${jacket.image.caption}`,
        price: `${jacket.price}`,
        name: `${jacket.name}`,
        details: `${jacket.detailText}`,
      };
      console.log("cart saved to storage");
      let newCart = JSON.parse(localStorage.getItem("cart")) || [];
      newCart.push(cartDetails);

      localStorage.setItem("cart", JSON.stringify(newCart));
    });
  });
}

renderProducts();
addToCartListener();
console.log(arr);
