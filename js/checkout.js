import { setCartImg } from "../js/nav/navigation.js";

const checkoutCart = document.querySelector(".checkout");
const sumTotal = document.querySelector("#addedTotal");

function loadCartItemAndDisplay() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let rowNumber = 2;
  let totalPrice = 0;

  if (cart && cart.length > 0) {
    checkoutCart.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i]);
      let item = cart[i];

      checkoutCart.innerHTML += `<div style="grid-row: ${rowNumber}; grid-column: 2 / -2;">
                                    <div class="product">
                                        <img src=${item.image} alt="Product image" />
                                    </div>
                                    <div class="itemandprice">
                                        <p>${item.name}</p>
                                        <button id="removeBtn" data-index="${i}">Remove</button>
                                        <p>$ ${item.price}</p>
                                    </div>
                                    <div class="sumtext">
                                    </div>`;
      rowNumber++;

      totalPrice += parseFloat(item.price);
      console.log(totalPrice);
    }
    let removeBtns = document.querySelectorAll("#removeBtn");

    for (let i = 0; i < removeBtns.length; i++) {
      removeBtns[i].addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let itemIndex = i;
        cart.splice(itemIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCartItemAndDisplay();
      });
    }
  } else {
    checkoutCart.innerHTML = `<div class="cart">
                                <p>item</p>
                              </div>
                              <div class="emptytext">
                                <p>You have no items in your shopping cart</p>
                              </div>
                              </div>
                              <div class="removeBtn">
                              </div>`;
  }

  sumTotal.innerHTML = `$${totalPrice.toFixed(2)}`;
  setCartImg();
}

loadCartItemAndDisplay();

// CHECKOUTFORM //

const form = document.querySelector(".checkoutform");
const nameForm = document.querySelector("#name");
const emailForm = document.querySelector("#email");
const addressForm = document.querySelector("#address");
const postalForm = document.querySelector("#postal");
const zipForm = document.querySelector("#zip");
const creditcardForm = document.querySelector("#creditcard");
const expireForm = document.querySelector("#expire");
const cvvForm = document.querySelector("#cvv");
const transformBtn = document.querySelector("#checkout__cta_back");

function validateForm() {
  nameForm.addEventListener("input", function () {
    if (checkLength(nameForm.value, 3)) {
      console.log("name ok");
      nameForm.style.backgroundColor = "lightgreen";
    }
  });

  emailForm.addEventListener("input", function () {
    if (validateEmail(emailForm.value)) {
      console.log("email ok");
      emailForm.style.backgroundColor = "lightgreen";
    }
  });

  addressForm.addEventListener("input", function () {
    if (checkLength(addressForm.value, 4)) {
      console.log("address ok");
      addressForm.style.backgroundColor = "lightgreen";
    }
  });
  postalForm.addEventListener("input", function () {
    if (checkLength(postalForm.value, 0)) {
      console.log("post ok");
      postalForm.style.backgroundColor = "lightgreen";
    }
  });

  zipForm.addEventListener("input", function () {
    if (checkLength(zipForm.value, 3)) {
      console.log("zip ok");
      zipForm.style.backgroundColor = "lightgreen";
    }
  });

  creditcardForm.addEventListener("input", function () {
    if (checkLength(creditcardForm.value, 7)) {
      console.log("creditcard ok");
      creditcardForm.style.backgroundColor = "lightgreen";
    }
  });

  expireForm.addEventListener("input", function () {
    if (checkLength(expireForm.value, 4)) {
      console.log("expire ok");
      expireForm.style.backgroundColor = "lightgreen";
    }
  });

  cvvForm.addEventListener("input", function () {
    if (checkLength(cvvForm.value, 2)) {
      console.log("cvv ok");
      cvvForm.style.backgroundColor = "lightgreen";
    }
  });
}
validateForm();

function checkLength(value, len) {
  if (value.length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    checkLength(nameForm.value, 3) &&
    validateEmail(emailForm.value) &&
    checkLength(addressForm.value, 4) &&
    checkLength(postalForm.value, 0) &&
    checkLength(zipForm.value, 3) &&
    checkLength(creditcardForm.value, 7) &&
    checkLength(expireForm.value, 4) &&
    checkLength(cvvForm.value, 2)
  ) {
    form.innerHTML = `<div>
    <h3>Thank you for using our shop. Your order has been recieved and will be processed shortly. A confirmation is on its way to the provided email address</h3>
</div>`;
    localStorage.removeItem("cart");
    loadCartItemAndDisplay();
    checkoutCart.innerHTML = `<div class="cart">
                                    <p>item</p>
                                </div>
                                <div class="emptytext">
                                    <p style="text-transform: uppercase;">Your order has been recieved</p>
                                </div>
                                </div>
                                <div class="removeBtn">
                                </div>`;

    transformBtn.innerHTML = `Go Home`;
    // submitBtn.addEventListener("click", function () {
    //   console.log("Thank you for using our shop");

    //   form.innerHTML = `<div>
    //                         <h3>Thank you for using our shop. Your order has been recieved and will be processed shortly.</h3>
    //                     </div>`;
    // });
  } else {
    console.log("Please finish form");
  }
});
