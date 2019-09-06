import { ADD_FORECAST, ADD_POSITION, SHOW_CURRENT_FORECAST, SHOW_DAILY_FORECAST, SHOW_HOUR_FORECAST } from "../actions/forecast";

const initialState = {
  queryPosition:{},
  forecast: {},
  currentForecast: {},
  hourForecast: [],
  dailyForecast: [],
  displayForecast: {}
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
        displayForecast: action.payload.data.currently,
      };
    case ADD_POSITION:
      return {
        ...state,
        queryPosition: action.payload
      };
    case SHOW_CURRENT_FORECAST:
      return {
        ...state,
        displayForecast: state.currentForecast
      };
    case SHOW_HOUR_FORECAST:
      return {
        ...state,
        displayForecast: state.hourForecast
      };
    case SHOW_DAILY_FORECAST:
      return {
        ...state,
        displayForecast: state.dailyForecast
      };
    default:
      return state;
  }
};

export {forecast};