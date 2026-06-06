const location = document.getElementById("location"); // get the input#location element

// function for fetching town data
function getLocationData(scale) {
  // fetch town data
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.value}?unitGroup=${scale}&include=days&key=P49UUD9RB3YB5FDWBCBR2GAH9`,
  )
    .then((response) => {
      //check the http response code and if it isn't ok then return the error
      if (!response.ok) {
        return response.text();
      }

      return response.json(); //parse the result as JSON
    })
    .then((response) => {
      return response;
    })
    .catch((errorResponse) => {
      return errorResponse.message;
    });
}

// function that returns either "metric" or "us" based on #scale
function getScale() {
  const scale = document.querySelector("#scale");
  // if scale's textContent is "°C" return "metric" else return "us"
  return scale.textContent === "°C" ? "metric" : "us";
}

export { getLocationData, getScale };
