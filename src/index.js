import "./styles.css";
import { checkInput } from "./scripts/check.js";
import {displayDays} from "./scripts/display-data.js"

const form = document.querySelector("form");
const input = document.querySelector("input#location");
const searchBtn = document.getElementById("search-btn");

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
    displayDays("metric"); // display days in metric system for now
  }
})