import { getTownData } from "./get-scripts.js";
import {
  createElem,
  createDateDiv,
  createIconImg,
  createTemperatureDiv,
  createMaxTempDiv,
  createMinTempDiv,
} from "./create-elements.js";

const displayWeatherDiv = document.querySelector("div.display-weather");

// function for displaying the information of a day
function displayDay(day) {
  const dayDiv = createElem("div", "day-div", "");
  for (const info in day) {
    switch (info) {
      case "datetime":
        dayDiv.append(createDateDiv(day[info]));
        break;

      case "icon": {
        const iconImg = createIconImg(day[info]);
        iconImg.then((response) => {
          dayDiv.append(response);
        });
        break;
      }

      case "temp":
        dayDiv.append(createTemperatureDiv(day[info]));
        break;
      case "tempmin":
        dayDiv.append(createMinTempDiv(day[info]));
        break;

      case "tempmax":
        dayDiv.append(createMaxTempDiv(day[info]));
        break;

      default:
        break;
    }
  }
  return dayDiv;
}

// function for displaying all days
function displayDays() {
  // if displayWeatherDiv is not empty, reset it's textContent
  if (displayWeatherDiv.textContent !== "") {
    displayWeatherDiv.textContent = "";
  }
  
  const days = getTownData();
  days
    .then((response) => {
      // if there is no days property in response, throw the response and handle it in catch
      if (!response.days) throw response;

      // else, display each day
      for (const day of response.days) {
        displayWeatherDiv.append(displayDay(day));
      }
    })
    .catch((error) => {
      // display the error message
      displayWeatherDiv.append(createElem("p", "error", error));
    });
}

export { displayDays };
