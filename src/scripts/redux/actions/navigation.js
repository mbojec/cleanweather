import axios from "axios";
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CHANGE_CITY_NAME = 'CHANGE_CITY_NAME';
export const CHANGE_QUERY = "CHANGE_QUERY";
export const CLEAN_QUERY = 'CLEAN_QUERY';
export const OPEN_CLOSE_DRAWER = 'OPEN_CLOSE_DRAWER';


export const changeView = screen => {
  return {
    type: CHANGE_VIEW,
    payload: screen
  };
};

export const changeCityName = cityName => {
  return {
    type: CHANGE_CITY_NAME,
    payload: cityName
  };
};

export const changeQuery = query => {
  return {
    type: CHANGE_QUERY,
    payload: query
  };
};

export const cleanQuery = () => {
  return {
    type: CLEAN_QUERY
  };
};

export const openCloseDrawer = state => {
  return {
    type: OPEN_CLOSE_DRAWER,
    payload: state
  };
};

const printError = (error)  => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
};

export const fetchCityName = (queryPosition) => (dispatch) => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/${queryPosition.longitude},${queryPosition.latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&autocomplete=true&types=place&locality&postcode&district&country&region&limit=10`,
    {headers: {"Content-Type": "application/json"}})
    .then(res => {
      dispatch(changeCityName(res.data.features[0].place_name));
    })
    .catch((error) => {
      printError(error);
    });
};

export const fetchSearchQuery = (query) => (dispatch) => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&autocomplete=true&types=place&locality&postcode&district&country&region&limit=10`,
    {headers: {"Content-Type": "application/json"}})
    .then(res => {
      dispatch(changeQuery(res.data.features));
    })
    .catch((error) => {
      printError(error);
    });
};