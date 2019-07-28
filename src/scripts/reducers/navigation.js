const initialState = {
  searchQuery: 'Wrocław, Dolnośląskie, Poland',
  queryArray: [],
  stateView: 'current',
  drawerIsOpen: false
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'CHANGE_VIEW':
      return {
        ...state,
        stateView: action.value
      };
    case 'CHANGE_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.value
      };
    case 'CHANGE_QUERY':
      return {
        ...state,
        queryArray: action.value
      };
    case 'CLEAN_QUERY':
      return {
        ...state,
        queryArray: []
      };
    case 'OPEN/CLOSE_DRAWER':
      return {
        ...state,
        drawerIsOpen: action.value
      }
  }
  return state;
};

export default reducer;