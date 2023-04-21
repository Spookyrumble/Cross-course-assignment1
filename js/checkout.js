const checkoutCart = document.querySelector(".checkout");
const sumTotal = document.querySelector("#addedTotal");
const sumText = document.querySelector(".sumtext");

// GRABS CART FROM LOCAL STORAGE AND DISPLAYS ITEMS IN CART
function loadCartItemAndDisplay() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  let rowNumber = 2;
  let totalPrice = 0;

  if (cart && cart.length > 0) {
    checkoutCart.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i]);
      let item = cart[i];

      const price = parseFloat(item.price / 100);

      checkoutCart.innerHTML += `<div style="grid-row: ${rowNumber}; grid-column: 2 / -2;">
                                    <div class="product">
                                        <img src=${item.image} alt="Product image" />
                                    </div>
                                    <div class="itemandprice">
                                        <p>${item.name}</p>
                                        <button id="removeBtn" data-index="${i}">Remove</button>
                                        <p>$ ${price}</p>
                                    </div>
                                    <div class="sumtext">
                                    </div>`;
      rowNumber++;

      totalPrice += price;
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

  sumTotal.innerHTML = `$ ${totalPrice.toFixed(2)}`;
  setCartImg();
}

loadCartItemAndDisplay();

// CHECKOUTFORM VALIDATION FOR EACH INPUT. ALSO FORMATS CREDIT CARD NUMBERS + EXPIRE DATE + CVV.

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
    let input = creditcardForm.value.replace(/\D/g, "");

    let formattedInput = "";
    for (let i = 0; i < input.length && i < 16; i++) {
      if (i % 4 === 0 && i > 0) {
        formattedInput += " ";
      }
      formattedInput += input[i];
    }
    creditcardForm.value = formattedInput;
    if (input.length === 16) {
      console.log("creditcard ok");
      creditcardForm.style.backgroundColor = "lightgreen";
    }
  });

  expireForm.addEventListener("input", function () {
    let input = expireForm.value.replace(/\D/g, "");

    if (input.length > 4) {
      input = input.slice(0, 4);
    }

    if (input.length > 2) {
      input = input.slice(0, 2) + "/" + input.slice(2);
    }

    expireForm.value = input;

    if (/^\d{2}\/\d{2}$/.test(input)) {
      console.log("expire ok");
      expireForm.style.backgroundColor = "lightgreen";
    } else {
      expireForm.style.backgroundColor = "";
    }
  });

  cvvForm.addEventListener("input", function () {
    let input = cvvForm.value.replace(/\D/g, "");
    if (input.length > 3) {
      input = input[0] + input[1] + input[2];
    }
    cvvForm.value = input;

    if (checkLength(input, 2)) {
      console.log("cvv ok");
      cvvForm.style.backgroundColor = "lightgreen";
    } else {
      cvvForm.style.backgroundColor = "";
    }
  });
}
validateForm();

// CHECK LENGTH FUNCTION
function checkLength(value, len) {
  if (value.length > len) {
    return true;
  } else {
    return false;
  }
}

// EMAIL FORMAT FUNCTION
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// CHECKS IF EVERYTHING IS OK FOR SUBMISSION FUNCTION
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
    checkoutCart.style.backgroundColor = "lightgreen";
    sumText.style.backgroundColor = "lightgreen";
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
  } else {
    console.log("Please finish form");
  }
});
