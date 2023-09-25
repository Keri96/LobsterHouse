let inputLoginUsername = document.querySelector(".login__input--user");
let inputLoginPin = document.querySelector(".login__input--pin");

const btnLogin = document.querySelector(".login__btn");

//Data

const account = {
  name: "test",
  password: "password",
};

let currentAccount;

inputLoginUsername = "";
inputLoginPin = "";

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("login");

  currentAccount = account.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (
    inputLoginUsername.value === account.name &&
    inputLoginPin.value === account.password
  ) {
    console.log("Login succesfull");
  }
});

console.log(account.password);
