const initialState = {
  queryPosition:{},
  forecast: {},
  currentForecast: {},
  hourForecast: [],
  dailyForecast: []
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

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'ADD_FORECAST':
      return {
        ...state,
        forecast: action.value,
        currentForecast: action.value.data.currently,
        hourForecast: hourForecast(action.value.data.hourly.data),
        dailyForecast: dailyForecast(action.value.data.daily.data)
      };
    case 'ADD_POSITION':
      return {
        ...state,
        queryPosition: action.value
      };
  }
  return state;
};

export default reducer;