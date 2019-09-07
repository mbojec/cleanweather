import { combineReducers } from "redux";
import {forecast} from "./forecast";
import {navigation} from "./navigation";

export default combineReducers({
  forecast,
  navigation
});