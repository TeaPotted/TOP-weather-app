import { displayDays } from "./display-data.js";

const input = document.querySelector("input#location");
const scale = document.getElementById("scale");
const changeScaleBtn = document.getElementById("change-scale");

// function for checking validity of input#location
function checkInput() {
  switch (true) {
    // if input is empty, create and report a custom validity
    case input.validity.valueMissing:
      input.setCustomValidity("You need to enter a location!");
      input.reportValidity();
      break;

    default:
      input.setCustomValidity("");
      return true;
  }
}

// function for changing the measurement scale
function changeScale() {
  switch (scale.textContent) {
    // if scale's textContent is "°C", change it to use fahrenheit
    case "°C":
      scale.textContent = "°F";
      changeScaleBtn.textContent = "Change to °C";
      // if .location exists, display the days usining fahrenheit
      if (document.querySelector(".location")) {
        displayDays("us");
      }
      break;

    // if scale's textContent is "°F", change it to use celsius
    case "°F":
      scale.textContent = "°C";
      changeScaleBtn.textContent = "Change to °F";
      // if .location exists, display the days usining celsius
      if (document.querySelector(".location")) {
        displayDays("metric");
      }
      break;

    default:
      break;
  }
}

export { checkInput, changeScale };
