import { getLocationData } from "./get-scripts.js";
import { format } from "date-fns";
import {
  createElem,
  createDateDiv,
  createIconImg,
  createTemperatureDiv,
  createMaxTempDiv,
  createMinTempDiv,
  createSunriseDiv,
  createSunsetDiv,
} from "./create-elements.js";

const displayWeatherDiv = document.querySelector("div.display-weather");

// function for displaying the full weather information of a day
function displayFullDay(day) {
  // if there is already a full-day div, remove it
  if (document.body.querySelector("div.full-day-div")) {
    document.body.removeChild(document.querySelector("div.full-day-div"));
  }

  // create a div to keep all the info in
  const dayDiv = createElem("div", "full-day-div", "");
  const dateDiv = createDateDiv(day.datetime);
  // make .date's (in dateDiv) textContent to display the day of the month and full name of the month
  dateDiv.querySelector("p.date").textContent = format(
    day.datetime.split("-"),
    "d MMMM",
  );

  // div to keep the temperature div and icon image
  const tempAndIconDiv = createElem("div", "temp-and-icon", "");
  const iconImg = createIconImg(day.icon);
  iconImg.then((response) => {
    // append both temperatureDiv and the response to tempAndIconDiv
    tempAndIconDiv.append(createTemperatureDiv(day.temp), response);
  });

  // div to keep the min temp div , max temp div, sunrise div and sunset div
  const tempsAndSunTimesDiv = createElem("div", "temperatures-and-suntimes");

  // div to keep the min temp and max temp divs
  const temperaturesDiv = createElem("div", "temperatures", "");
  temperaturesDiv.append(
    createMaxTempDiv(day.tempmax),
    createMinTempDiv(day.tempmin),
  );

  // div to keep the sunrise and sunset divs
  const sunTimesDiv = createElem("div", "sun-times", "");
  sunTimesDiv.append(
    createSunriseDiv(day.sunrise),
    createSunsetDiv(day.sunset),
  );

  tempsAndSunTimesDiv.append(temperaturesDiv, sunTimesDiv);

  const description = createElem("p", "description", day.description); // the day's description

  dayDiv.append(dateDiv, tempAndIconDiv, tempsAndSunTimesDiv, description);
  document.body.append(dayDiv);
}

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
  dayDiv.addEventListener("click", () => displayFullDay(day));
  return dayDiv;
}

// function for displaying all days
function displayDays() {
  // if displayWeatherDiv is not empty, reset it's textContent
  if (displayWeatherDiv.textContent !== "") {
    displayWeatherDiv.textContent = "";
  }

  const days = getLocationData();
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
