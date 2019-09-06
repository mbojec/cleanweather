import { ADD_FORECAST, ADD_POSITION } from "../actions/forecast";

const initialState = {
  queryPosition:{},
  forecast: {},
  currentForecast: {},
  hourForecast: [],
  dailyForecast: [],
};

function hourForecast(array){
  let shortTermForecastArray = [];
  for(let i = 0; i < 12; i++){
    shortTermForecastArray.push(array[i]);
  }
  return shortTermForecastArray;
}

function dailyForecast(array){
  let shortTermForecastArray = [];
  for(let i = 0; i < array.length; i++){
    shortTermForecastArray.push(array[i]);
  }
  return shortTermForecastArray;
}

const forecast = (state = initialState, action) => {
  switch ( action.type ) {
    case ADD_FORECAST:
      return {
        ...state,
        forecast: action.payload,
        currentForecast: action.payload.data.currently,
        hourForecast: hourForecast(action.payload.data.hourly.data),
        dailyForecast: dailyForecast(action.payload.data.daily.data),
      };
    case ADD_POSITION:
      return {
        ...state,
        queryPosition: action.payload
      };
    default:
      return state;
  }
};

export {forecast};