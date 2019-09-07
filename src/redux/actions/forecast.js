export const ADD_FORECAST = 'ADD_FORECAST';
export const ADD_POSITION = "ADD_POSITION";
import axios from 'axios';


export const addForecast = forecast => {
  return {
    type: ADD_FORECAST,
    payload: forecast
  };
};

export const addPosition = position => {
  return {
    type: ADD_POSITION,
    payload: position
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

export const fetchForecast = (queryPosition) => (dispatch) => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}/${queryPosition.latitude},${queryPosition.longitude}?units=si`,
    {headers: {"Content-Type": "application/json"}})
    .then(res => {
      dispatch(addForecast(res));
      dispatch(addPosition(queryPosition));
    })
    .catch((error) => {
      printError(error);
    });
};

