require('../../resources/style/main.scss');
import React, {Component} from "react";
import {Map} from "../components/map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Navigation} from "../components/navigation";

class Main extends Component{

  render() {
    return(
      <>
        <Navigation/>

      </>
    )
  }
}

export {Main}