/* let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping"); */
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

/* openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
}); */

let products = [
  {
    id: 1,
    name: "L&L",
    image: "lobsteeer.png",
    price: 25,
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    image: "lobster_thermidor_nagy.jpg",
    price: 25,
  },
  {
    id: 3,
    name: "Lobster Salad",
    image: "lobster_salad.PNG",
    price: 20,
  },
  {
    id: 4,
    name: "Lobster Newberg",
    image: "lobster_newberg.jpg",
    price: 15,
  },
  {
    id: 5,
    name: "Lobster Mac & Cheese",
    image: "lobster_mac.jpg",
    price: 15,
  },
  {
    id: 6,
    name: "Lobster Tail la Baked",
    image: "lobster_tail_2.PNG",
    price: 18.5,
  },
  {
    id: 7,
    name: "Lobster Scampi",
    image: "lobster_scampi.webp",
    price: 18,
  },
  {
    id: 8,
    name: "Lobster Bisque",
    image: "lobster_bique.jpg",
    price: 10,
  },
  {
    id: 9,
    name: "Lobster Roll",
    image: "lobster_roll.jpg",
    price: 6,
  },
  {
    id: 10,
    name: "Lobster 4 Kid's ",
    image: "lobster_roll.webp",
    price: 5,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="src/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}$</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="src/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
