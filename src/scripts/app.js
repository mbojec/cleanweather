require('../resources/style/main.scss');
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Navigation} from './navigation'
import {CurrentWeather} from './currentWeather'
import {ShortTermForecast} from './shortTermForecast'
import {LongTermForecast} from './longTermForecast'
import {Search} from './search'
import {NotFound} from './notFound'
import {Map} from "./map";
import 'mapbox-gl/dist/mapbox-gl.css';

import {HashRouter, Route, Switch} from 'react-router-dom';

class App extends Component {render() {
  return (
    <div className={'app'}>
      <div className={'map'}>
        <Map/>
      </div>
      <HashRouter>
        <div className={'main'}>
          <div className={'row'}>
            <Navigation/>
            <Switch>
              <Route exact path='/' component={CurrentWeather} />
              <Route exact path='/shortTerm' component={ShortTermForecast} />
              <Route exact path='/longTerm' component={LongTermForecast} />
              <Route exact path='/search' component={Search} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </div>
  )}}

ReactDOM.render(<App/>, document.getElementById("app"));