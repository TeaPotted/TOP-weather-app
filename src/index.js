import "./styles.css";
import { checkInput } from "./scripts/check.js";

const form = document.querySelector("form");
const input = document.querySelector("input#location");

// when form is submitted, call checkInput
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

// call checkInput when input has an input
input.addEventListener("input", () => checkInput());
