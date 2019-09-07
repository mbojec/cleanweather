import React, {Component} from "react";
import PropTypes from "prop-types";
import {WeatherDescLongShortTermItem} from "./index";

class WeatherDescLongShortTermList extends Component{

  render() {
    return(
      <>{this.props.value.map((singleForecast) => <WeatherDescLongShortTermItem key={(singleForecast.time * 1000)} time={(singleForecast.time * 1000)} value={singleForecast.summary} weatherIcon={singleForecast.icon} daily={this.props.daily}/>)}</>
    )
  }
}

WeatherDescLongShortTermList.propTypes = {
  value: PropTypes.array,
  daily: PropTypes.bool
};

export{WeatherDescLongShortTermList}