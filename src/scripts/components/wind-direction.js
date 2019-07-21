require('../../resources/style/main.scss');
import React, {Component} from "react";

class WindDirection extends Component{

  render() {
    return(
      <div id="compass">
        <span>N</span>
        <span>E</span>
        <span>S</span>
        <span>W</span>
        <div id="pointer"></div>
      </div>
    )
  }
}

export {WindDirection}