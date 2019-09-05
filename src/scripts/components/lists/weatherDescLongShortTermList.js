require('../../../resources/style/main.scss');
import React, {Component} from "react";
import {WeatherDescLongShortTermItem} from "./";

class WeatherDescLongShortTermList extends Component{

  render() {
    return(
      <>{this.props.value.map((singleForecast) => <WeatherDescLongShortTermItem key={(singleForecast.time * 1000)} time={(singleForecast.time * 1000)} value={singleForecast.summary} weatherIcon={singleForecast.icon} daily={this.props.daily}/>)}</>
    )
  }

}

export{WeatherDescLongShortTermList}