// import { jackets } from "./data/products";

// console.log(jackets);

const data = JSON.parse(localStorage.getItem("products"));

console.log(data);

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}
