const form = document.querySelector("#form_head");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const sendButton = document.querySelector("#checkout__cta");

sendButton.addEventListener("submit", function () {
  if (checkLenght(nameInput, 4) && validateEmail(emailInput)) {
    sendButton.removeAttribute = "disabled";
  } else {
    sendButton.setAttribute = "disabled";
  }
});

function checkLenght(value, len) {
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

validateEmail(emailInput);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    form.submit();
  }
});
