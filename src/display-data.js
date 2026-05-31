import {
  createElem,
  createDateDiv,
  createIconImg,
  createTemperatureDiv,
  createMaxTempDiv,
  createMinTempDiv,
} from "./create-elements.js";

// function for displaying the information of a day
function displayDay(day) {
  const dayDiv = createElem("div", "day", "");
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
