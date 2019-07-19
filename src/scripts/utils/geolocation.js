function getPlaceLatLng() {
  fetch(`https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/Wrocław.json?access_token=pk.eyJ1IjoibWJvamVjIiwiYSI6ImNqcmxwdWN2NDAwNmk0M3Nid2k2MWlwZXUifQ.mNFwxA0Zu5cA7HmHvlwBCg&cachebuster=1563562981406&autocomplete=true&types=place&locality&postcode&district&country&region&limit=10`)
    .then(res => res.json())
    .then(data => console.log(data.features[0]));
}

export {getPlaceLatLng}