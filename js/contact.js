const form = document.querySelector("#form_head");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const sendButton = document.querySelector("#checkout__cta");
const inputs = document.querySelectorAll("label");

function validateForm() {
  nameInput.addEventListener("input", function () {
    if (checkLength(nameInput.value, 1)) {
      console.log("name ok");
      nameInput.style.backgroundColor = "lightgreen";
    }
  });

  emailInput.addEventListener("input", function () {
    if (validateEmail(emailInput.value)) {
      console.log("email ok");
      emailInput.style.backgroundColor = "lightgreen";
    }
  });

  subjectInput.addEventListener("input", function () {
    if (checkLength(subjectInput.value, 4)) {
      console.log("subject ok");
      subjectInput.style.backgroundColor = "lightgreen";
    }
  });

  messageInput.addEventListener("input", function () {
    if (checkLength(messageInput.value, 9)) {
      console.log("message ok");
      messageInput.style.backgroundColor = "lightgreen";
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
    checkLength(nameInput.value, 1) &&
    validateEmail(emailInput.value) &&
    checkLength(subjectInput.value, 4) &&
    checkLength(messageInput.value, 9)
  ) {
    form.innerHTML = `<div>
                        <h3 style="text-align: center;">Thank you! We will get back to you shortly.</h3>
                        <button id="successReturn" class="cta" style="padding: 5px; float: right;">Return</button>
                      </div>`;
    let btn = document.querySelector("#successReturn");

    btn.addEventListener("click", function () {
      location.reload();
    });
  } else {
    console.log("Please finish form");
  }
});
