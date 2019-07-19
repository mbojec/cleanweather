import {getForecast} from "./forecast";
import {getPlaceLatLng} from "./geolocation";

function getCurrentLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }

  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    getForecast();
    getPlaceLatLng();
  }
}

export {getCurrentLocation}