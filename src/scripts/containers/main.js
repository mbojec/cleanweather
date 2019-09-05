require('../../resources/style/main.scss');
import React from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Switch} from 'react-router-dom';
import Forecast from "../components/forecast";
import {NotFound} from "./";

const Main = () => {
  return(
    <div>
      <Switch>
        <Route exact path={'/'} component={Forecast}/>
        <Route exact path={'/search'} component={Forecast}/>
        <Route path={'/'} component={NotFound}/>
      </Switch>
    </div>
  )
};

export {Main}