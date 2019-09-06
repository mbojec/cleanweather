// const initialState = {
//   queryPosition:{},
//   forecast: {},
//   currentForecast: {},
//   hourForecast: [],
//   dailyForecast: [],
//   displayForecast: {}
// };
//
// function hourForecast(array){
//   let shortTermForecastArray = [];
//   for(let i = 0; i < 12; i++){
//     shortTermForecastArray.push(array[i]);
//   }
//   return shortTermForecastArray;
// }
//
// function dailyForecast(array){
//   let shortTermForecastArray = [];
//   for(let i = 0; i < array.length; i++){
//     shortTermForecastArray.push(array[i]);
//   }
//   return shortTermForecastArray;
// }
//
// const reducer = ( state = initialState, action ) => {
//   switch ( action.type ) {
//     case 'ADD_FORECAST':
//       return {
//         ...state,
//         forecast: action.value,
//         currentForecast: action.value.data.currently,
//         hourForecast: hourForecast(action.value.data.hourly.data),
//         dailyForecast: dailyForecast(action.value.data.daily.data),
//         displayForecast: action.value.data.currently,
//       };
//     case 'ADD_POSITION':
//       return {
//         ...state,
//         queryPosition: action.value
//       };
//     case 'SHOW_CURRENT_FORECAST':
//       return {
//         ...state,
//         displayForecast: state.currentForecast
//       };
//     case 'SHOW_HOUR_FORECAST':
//       return {
//         ...state,
//         displayForecast: state.hourForecast
//       };
//     case 'SHOW_DAILY_FORECAST':
//       return {
//         ...state,
//         displayForecast: state.dailyForecast
//       };
//   }
//   return state;
// };
//
// export default reducer;