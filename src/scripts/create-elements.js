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

// function that creates an img and set's it src to the day's icon
function createIconImg(icon) {
  // import the icon's image
  return import(`../images/${icon}.png`)
    .then((response) => {
      // create an img element and use the imported image as the src
      const iconImg = document.createElement("img");
      iconImg.setAttribute("src", response.default); // set the src to response's default property as that is where the url is stored
      iconImg.alt = icon;
      return iconImg;
    })
    .catch((error) => {
      console.error(error);
    });
}

// function for displaying the temperature and it's measurement scale
function createTemperatureDiv(temp) {
  // div to keep paragraphs of the temperature and the measurement scale
  const div = createElem("div", "tempDiv", "");
  const temperature = createElem("p", "temperature", temp);
  const scale = createElem("p", "scale", "°C");
  div.append(temperature, scale);
  return div;
}

// function for creating a div for tempmax
function createMaxTempDiv(maxTemp) {
  // div to keep all the p elements for the "high" text, max temperature and scale
  const div = createElem("div", "temp-max-div", "");
  const highP = createElem("p", "high", "High");

  // keep the temperature and measurement scale in a div
  const tempDiv = createElem("div", "tempDiv", "");
  const temperature = createElem("p", "temperature", maxTemp);
  const scale = createElem("p", "scale", "°C");

  tempDiv.append(temperature, scale)
  div.append(highP, tempDiv);
  return div;
};

// function for creating a div for tempmin
function createMinTempDiv(minTemp) {
  // div to keep all the p elements for the "low" text, min temperature and scale
  const div = createElem("div", "temp-min-div", "");
  const lowP = createElem("p", "low", "Low");

  // keep the temperature and measurement scale in a div
  const tempDiv = createElem("div", "tempDiv", "");
  const temperature = createElem("p", "temperature", minTemp);
  const scale = createElem("p", "scale", "°C");

  tempDiv.append(temperature, scale)
  div.append(lowP, tempDiv);
  return div;
};

export { createElem, createDateDiv, createIconImg, createTemperatureDiv, createMaxTempDiv, createMinTempDiv };
