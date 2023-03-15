const jacketDetails = JSON.parse(localStorage.getItem("products"));

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);
console.log(jacketDetails);

function pullDataFromStorage() {
  for (let i = 0; i < jacketDetails.length; i++) {
    if (jacketDetails[i].jacketId === `${id}`) {
      console.log(jacketDetails[i]);

      return jacketDetails[i];
    }
  }
}
pullDataFromStorage();
// const item = pullDataFromStorage(jacketDetails, id);

// console.log(item);
