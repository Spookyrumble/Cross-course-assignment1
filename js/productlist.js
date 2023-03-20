const container = document.querySelector(".products-container");
const h1 = document.querySelector("h1");

const searchValue = JSON.parse(localStorage.getItem("filter"));

const data = JSON.parse(localStorage.getItem("products"));

console.log(searchValue + "s" + " " + "jackets");

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);

  let jacket = data[i];
  console.log(jacket.jacketId);

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
                                <a id="addCart">Add to cart</a>
                                <a href="../checkout.html">Buy Now</a>
                            </div>
                            </div>`;

    const addToCart = document.querySelector("#addCart");

    addToCart.addEventListener("click", function () {
      const cartDetails = [
        {
          image: `${jacket.image.src}`,
          caption: `${jacket.image.caption}`,
          price: `${jacket.price}`,
          name: `${jacket.name}`,
          details: `${jacket.detailText}`,
        },
        console.log("cart saved to storage"),
      ];

      localStorage.setItem("cart", JSON.stringify(cartDetails));
    });
  }
}
