const imga = document.querySelector("#imga");
const input = document.querySelector("#user-imga");
input.addEventListener("change", () => {
  imga.src = URL.createObjectURL(input.files[0]);
});
function openaccount() {
  var acctouns = document.getElementById("form-account");
  acctouns.classList.add("hile");
}
var Closepay = document.querySelector(".js-close");
Closepay.addEventListener("click", function () {
  payform.style.display = "none";
  bankcard.style.display = "none";
});
var payform = document.getElementById("pay");
const btnpay = document.querySelector(".btn");
btnpay.addEventListener("click", () => {
  payform.style.display = "flex";
});
var addpay = document.querySelector(".btn");
// var Save = document.querySelector("#btn-pay");
// Save.addEventListener("click", function () {

// });
//////////////////////////////////////////
var payfo = document.getElementById("pay-user");
var account = document.getElementById("form-account");
const btnform = document.getElementById("btnpay");
const btnacc = document.getElementById("btnacc");

btnform.addEventListener("click", function () {
  account.style.display = "none";
  payfo.style.display = "block";
});
btnacc.addEventListener("click", function () {
  payfo.style.display = "none";
  account.style.display = "block";
});
var bankcard = document.getElementById("bankcard");
addpay.addEventListener("click", function () {
  bankcard.style.display = "block";
});
///////////////////////////////////////
function erroracc() {
  let inputacc = document.querySelectorAll(".input-acc");
  console.log(inputacc)
  for (let i = 0; i < inputacc.length; i++) {
    if (inputacc[i].value === "") {
      inputacc[i].parentElement.querySelector(".error-message").innerText =
        "Please enter you " + inputacc[i].id;
    } else {
      inputacc[i].parentElement.querySelector(".error-message").innerText = "";
    }
  }
}
//////////////////////////
function validateInput() {
  let fromelement = document.querySelector("#pay-form");
  let inputeleminet = document.querySelectorAll(".pay-input");
  console.log(inputeleminet);
  for (let i = 0; i < inputeleminet.length; i++) {
    if (inputeleminet[i].value === "") {
      inputeleminet[i].parentElement.querySelector(".error-message").innerText =
        "Please enter you " + inputeleminet[i].id;
    } else {
      inputeleminet[i].parentElement.querySelector(".error-message").innerText =
        "";
      payform.style.display = "none";
      addpay.style.display = "none";
    }
  }
}
function addnew() {
  validateInput();
  let fromelement = document.querySelector("#pay-form");
  let errorelement = document.querySelectorAll(".error-message");
  let arrerrorelement = [];
  for (let i = 0; i < errorelement.length; i++) {
    arrerrorelement.push(errorelement[i].innerText);
  }
  let checkerror = arrerrorelement.every((value) => value === "");
  //kieem tra toan bo arrerrorelemnt va value nhan ve bang ""
  if (checkerror) {
    let number = document.querySelector(".range-number").value;
    let Name = document.querySelector(".range-name").value;
    let datebank = document.querySelector(".range-date").value;
    let people = document.querySelector(".range-people").value;

    let listbank = localStorage.getItem("listbank")
      ? JSON.parse(localStorage.getItem("listbank"))
      : [];
    listbank.push({
      number: number,
      Name: Name,
      Datebank: datebank,
      People: people,
    });
    localStorage.setItem("listbank", JSON.stringify(listbank));
    renderbank();
  }
}
function renderbank() {
  let listbank = localStorage.getItem("listbank")
    ? JSON.parse(localStorage.getItem("listbank"))
    : [];
  let bank =
    "<tr><><th>+${Name}</th><th>banknumber</th><th>datebank</th><th>namepeopel</th></tr>";
  listbank.map((value, index) => {
    bank +=
      "<tr><td>" +
      value.number +
      "</td><td>" +
      value.Name +
      "</td><><td>" +
      value.Datebank +
      "</td><td>" +
      value.People +
      "</td></tr>";
  });
  document.getElementById("table").innerHTML = bank;
}

//////////////////////////////////////////////////////////////////
var number = document.querySelector(".range-number");
var Name = document.querySelector(".range-name");
var datebank = document.querySelector(".range-date");
var people = document.querySelector(".range-people");

var outputname = document.querySelector(".valuenamebank");
var outputNumber = document.querySelector(".valuebanknumber");
var outdate = document.querySelector(".valuedate");
var outputpeople = document.querySelector(".valuepeople");

outputname.innerHTML = Name.value;

Name.oninput = function () {
  outputname.innerHTML = this.value;
};

outputNumber.innerHTML = number.value;

number.oninput = function () {
  outputNumber.innerHTML = this.value;
};

outdate.innerHTML = date.value;

datebank.oninput = function () {
  outdate.innerHTML = this.value;
};

outputpeople.innerHTML = people.value;

people.oninput = function () {
  outputpeople.innerHTML = this.value;
};
