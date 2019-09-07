import PropTypes from "prop-types";
import React, {Component} from "react";
import {Sunset, Sunrise, TimeZone} from "./index";

class WeatherData extends Component{

  render() {
    const styleList = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0.8rem 1.6rem',
      height: '100%'
    };

    const styleItem = {
      width: '100%',
      flexGrow: 1
    };

    return(
      <>
        <div style={styleList}>
          <div style={styleItem}><Sunrise value={this.props.sunriseValue}/></div>
          <div style={styleItem}><Sunset value={this.props.sunsetValue}/></div>
          <div style={styleItem}><TimeZone value={this.props.timeZone}/></div>
        </div>
      </>
    )
  }
}

WeatherData.propTypes = {
  sunsetValue: PropTypes.number,
  sunriseValue: PropTypes.number,
  timeZone: PropTypes.string
};

export {WeatherData}