require('../resources/style/main.scss');
import React from "react";
import ReactDOM from "react-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './app';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import navigationReducer from './reducers/navigation'
import forecastReducer from './reducers/forecast'

const rootReducer = combineReducers({
  navigation: navigationReducer,
  forecast: forecastReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("app"));