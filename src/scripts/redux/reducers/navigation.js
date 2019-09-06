import {CLEAN_QUERY, OPEN_CLOSE_DRAWER, CHANGE_QUERY, CHANGE_SEARCH_QUERY, CHANGE_VIEW} from "../actions/navigation";

const initialState = {
  searchQuery: 'Wrocław, Dolnośląskie, Poland',
  queryArray: [],
  stateView: 'current',
  drawerIsOpen: false
};

const navigation = (state = initialState, action) => {
  switch ( action.type ) {
    case CHANGE_VIEW:
      return {
        ...state,
        stateView: action.payload
      };
    case CHANGE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    case CHANGE_QUERY:
      return {
        ...state,
        queryArray: action.payload
      };
    case CLEAN_QUERY:
      return {
        ...state,
        queryArray: []
      };
    case OPEN_CLOSE_DRAWER:
      return {
        ...state,
        drawerIsOpen: action.payload
      };
    default:
      return state;
  }
};

export {navigation};