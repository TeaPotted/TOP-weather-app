const input = document.querySelector("input#town");
// function for checking validity of input#town
function checkInput() {
  switch (true) {
    // if input is empty, create and report a custom validity
    case input.validity.valueMissing:
      input.setCustomValidity("You need to enter a town!");
      input.reportValidity();
      break;

    default:
      input.setCustomValidity("");
      return true;
  }
}

export { checkInput };
