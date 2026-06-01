const town = document.getElementById("town"); // get the input#town element

// function for fetching town data
function getTownData() {
  // fetch town data
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${town.value}?unitGroup=metric&include=days&key=P49UUD9RB3YB5FDWBCBR2GAH9`,
  )
    .then((response) => {
      //check the http response code and if it isn't ok then throw the response as an error
      if (!response.ok) {
        throw response;
      }

      return response.json(); //parse the result as JSON
    })
    .then((response) => {
      return response;
    })
    .catch((errorResponse) => {
      if (errorResponse.text) {
        //additional error information
        errorResponse.text().then((errorMessage) => {
          //errorMessage now returns the response body which includes the full error message
          return errorMessage;
        });
      } else {
        //no additional error information
        return errorResponse;
      }
    });
}

export { getTownData };
