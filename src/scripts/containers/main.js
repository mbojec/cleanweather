require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Forecast from "../components/forecast";
import {NotFound} from "./notFound";

class Main extends Component{

  render() {
    return(
      <div>
        <Switch>
          <Route exact path={'/'} component={Forecast}/>
          <Route exact path={'/search'} component={Forecast}/>
          <Route path={'/'} component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default Main