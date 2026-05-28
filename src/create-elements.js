import { format } from "date-fns";

// function for creating an element
function createElem(elem, cls, textContent) {
  const el = document.createElement(elem);
  // only add a class if cls has a value
  cls ? el.classList.add(cls) : null;
  el.textContent = textContent;
  return el;
}

// function that creates a div that holds elements for the day's date and date
function createDateDiv(date) {
  // div to keep the day and date p elements
  const div = createElem("div", "dateDiv", "");
  const day = createElem("p", "day", format(date.split("-"), "EEEE")); // day's textContent will be full day name eg: "Monday"
  const dateP = createElem("p", "date", format(date.split("-"), "d MMM")); // dateP's textContent will be [day Month] eg: "6 Jan"
  div.append(day, dateP);
  return div;
}

export { createElem, createDateDiv };
