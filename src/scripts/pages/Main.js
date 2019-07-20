require('../../resources/style/main.scss');
import React, {Component} from "react";
import {MainMap} from "../components/map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Navigation} from "../components/navigation";

class Main extends Component{

  render() {
    return(
      <div>
        <Navigation/>
        <div className={'main'}>
        </div>
      </div>
    )
  }
}

export {Main}