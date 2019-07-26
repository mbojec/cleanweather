require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Forecast from "../components/forecast";
import LandingForecast from "../components/landing-forcast"

class Main extends Component{

  render() {
    return(
      <div>
        <Switch>
          <Route exact path={'/'} component={LandingForecast}/>
          <Route exact path={'/search'} component={Forecast}/>
        </Switch>
      </div>
    )
  }
}

export default Main