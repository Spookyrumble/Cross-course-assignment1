const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const jacketData = JSON.parse(localStorage.getItem("products"));

const imgContainer = document.querySelector(".detailsContainer");
const container = document.querySelector(".contact_detail");
// const addToCart = document.querySelector("#addCart");

const dataFilter = jacketData.filter(function (jacketData) {
  return jacketData.jacketId == id;
});
console.table(dataFilter);

for (let i = 0; i < dataFilter.length; i++) {
  let item = dataFilter[i];

  imgContainer.innerHTML = `<img
                                id="imgContainer"
                                class="jacket-detail"
                                src="${item.image.src2}"
                                alt="${item.image.caption}"
                            />
                            <section class="contact contact_detail">
                                <div class="wrapper">
                                <div id="detail__sizeboxes" class="sizeboxes">
                                    <input type="checkbox" name="c1small" id="c1small" />
                                    <label for="c1small" class="labelbox" id="l1small">s</label>
                                    <input type="checkbox" name="M" id="c1medium" />
                                    <label for="c1medium" class="labelbox" id="l1medium">m</label>
                                    <input type="checkbox" name="L" id="c1large" />
                                    <label for="c1large" class="labelbox" id="l1large">l</label>
                                </div>
                                <div class="detail__price">
                                    <p>$ ${item.price}</p>
                                </div>
                                </div>
                                    <h1 class="contact-text">${item.name}</h1>
                                <p class="contact-text">${item.detailText}
                                </p>
                                </section>
                                <section class="index__cta">
                                    <a id="addCart" class="cta" href="#">Add to cart</a>
                                    <a class="cta" href="../checkout.html">Buy Now</a>
                                    <a class="cta-small" href="#">Go Back</a>
                                </section>`;

  const addToCart = document.querySelector("#addCart");

  addToCart.addEventListener("click", function () {
    const cartDetails = [
      {
        image: `${item.image.src}`,
        caption: `${item.image.caption}`,
        price: `${item.price}`,
        name: `${item.name}`,
        details: `${item.detailText}`,
      },
      console.log("cart saved to storage"),
    ];

    localStorage.setItem("cart", JSON.stringify(cartDetails));
  });
}

const backButton = document.querySelector(".cta-small");

backButton.addEventListener("click", function () {
  history.back();
});
