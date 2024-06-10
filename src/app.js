/* eslint-disable */
import "bootstrap";
import "./style.css";

let body = document.body;
body.style.backgroundColor = "green";

let divCard = document.querySelector("#card");
divCard.classList.add("card-background");

let allSymbols = ["♦", "♥", "♠", "♣"];
let symbolSelector = Math.floor(Math.random() * allSymbols.length);

let allnumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A"];
let numberSelector = Math.floor(Math.random() * allnumbers.length);

let topSymbol = document.createElement("div");
topSymbol.classList.add("top-symbol");
topSymbol.setAttribute("id", "topSymbol");
divCard.appendChild(topSymbol);
topSymbol.textContent = allSymbols[symbolSelector];

let number = document.createElement("div");
number.classList.add("numbers");
number.setAttribute("id", "number");
divCard.appendChild(number);
number.textContent = allnumbers[numberSelector];

let buttomSymbol = document.createElement("div");
buttomSymbol.classList.add("buttom-symbol");
buttomSymbol.setAttribute("id", "buttomSymbol");
divCard.appendChild(buttomSymbol);
buttomSymbol.textContent = allSymbols[symbolSelector];
