import "./styles.css";
import { checkInput, changeScale } from "./scripts/check.js";
import { displayDays } from "./scripts/display-data.js";
import { getScale } from "./scripts/get-scripts.js";

const form = document.querySelector("form");
const input = document.querySelector("input#location");
const searchBtn = document.getElementById("search-btn");
const changeScaleBtn = document.getElementById("change-scale");
// when form is submitted, call checkInput
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

// call checkInput when input has an input
input.addEventListener("input", () => checkInput());

searchBtn.addEventListener("click", () => {
  // if checkInput is true, call displayDays
  if (checkInput()) {
    displayDays(getScale());
  }
});

changeScaleBtn.addEventListener("click", () => changeScale());
