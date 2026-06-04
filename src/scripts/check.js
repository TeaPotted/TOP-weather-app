const input = document.querySelector("input#location");
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

export { checkInput };
