/* eslint-disable */
import "bootstrap";
import "./style.css";

let body = document.body;
body.style.backgroundColor = "green";

let divCard = document.querySelector("#card");
divCard.classList.add("card-background");

let topSymbol = document.createElement("div");
topSymbol.classList.add("top-symbol");
topSymbol.setAttribute("id", "topSymbol");
divCard.appendChild(topSymbol);
topSymbol.textContent = " ♥ ";
