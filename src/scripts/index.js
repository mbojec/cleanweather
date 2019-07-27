require('../resources/style/main.scss');
import React from "react";
import ReactDOM from "react-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './reducers/root'

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("app"));