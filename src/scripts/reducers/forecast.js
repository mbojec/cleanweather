const initialState = {
  queryPosition:{},
  forecast: {}
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'ADD_FORECAST':
      return {
        ...state,
        forecast: action.value
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