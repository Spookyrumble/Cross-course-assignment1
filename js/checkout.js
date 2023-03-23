const checkoutform = document.querySelector(".checkoutform");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const addressInput = document.querySelector("#address");
const postalInput = document.querySelector("#postal");
const zipInput = document.querySelector("#zip");
const creditcardInput = document.querySelector("#creditcard");
const expireInput = document.querySelector("#expire");
const cvvInput = document.querySelector("#cvv");
const submitBtn = document.querySelector("#checkout__cta");
const checkoutCart = document.querySelector(".checkout");

// function loadCartItemAndDisplay() {
//   const cart = JSON.parse(localStorage.getItem("cart"));
//   checkoutCart.innerHTML = "";
//   for (let i = 0; i < cart.length; i++) {
//     console.log(cart[i]);
//     let item = cart[i];
//     let rowNumber = [i];
//     checkoutCart.innerHTML += ` <div style="grid-row: ${rowNumber} class="cart">
//                                     <p>item</p>
//                                 </div>
//                                 <div class="product">
//                                     <img
//                                     src=${item.image}
//                                     alt=${item.caption}
//                                     />
//                                 </div>
//                                 <div class="itemandprice">
//                                     <p>${item.name}</p>
//                                     <p id="size">Size: Large</p>
//                                     <p>$ ${item.price}</p>
//                                 </div>
//                                 <div class="shipping">
//                                     <p>Shipping</p>
//                                     <p>$ 2.99</p>
//                                 </div>
//                                 <div class="sumtext">
//                                     <p>Sum Total</p>
//                                     <p>$ ${(item.price * item.quantity).toFixed(
//                                       2
//                                     )}</p>
//                                 </div>`;
//     rowNumber++;
//   }
// }

function loadCartItemAndDisplay() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let rowNumber = 2; // Start the row number at 2 to skip the first row (which contains the column headers)

  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
    let item = cart[i];

    // Create a new grid row for each item
    checkoutCart.innerHTML += `<div style="grid-row: ${rowNumber}; grid-column: 2 / -1;">
                                    <div class="product">
                                      <img src=${
                                        item.image
                                      } alt="Product image" />
                                    </div>
                                    <div class="itemandprice">
                                      <p>${item.name}</p>
                                      <p id="size">Size: Large</p>
                                      <p>$ ${item.price}</p>
                                    </div>
                                    <div class="shipping">
                                      <p>Shipping</p>
                                      <p>$ 2.99</p>
                                    </div>
                                    <div class="sumtext">
                                      <p>Sum Total</p>
                                      <p>$ ${(
                                        item.price * item.quantity
                                      ).toFixed(2)}</p>
                                    </div>
                                  </div>`;
    rowNumber++; // Increment the row number for the next item
  }
}

loadCartItemAndDisplay();
