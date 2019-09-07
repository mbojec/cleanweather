import PropTypes from "prop-types";
require('../../../resources/style/main.scss');
import React, {Component} from "react";
import { Wind, Sleet, NightCloudy, ClearNight, Hail, Fog, DayCloudy, ClearDay, Cloudy, Rain, Snow, Thunderstorm} from '../../../resources/svg'

class WeatherDescLongShortTermItem extends Component{

  getIcon(weatherIcon){
    switch (weatherIcon) {
      case 'clear-day':
        return <ClearDay/>;
      case 'clear-night':
        return <ClearNight/>;
      case 'partly-cloudy-day':
        return <DayCloudy/>;
      case 'partly-cloudy-night':
        return <NightCloudy/>;
      case 'rain':
        return <Rain/>;
      case 'snow':
        return <Snow/>;
      case 'sleet':
        return <Sleet/>;
      case 'wind':
        return <Wind/>;
      case 'fog':
        return <Fog/>;
      case 'cloudy':
        return <Cloudy/>;
      case 'hail':
        return <Hail/>;
      case 'thunderstorm':
        return <Thunderstorm/>;
      default: return <ClearDay/>;
    }
  }

  render() {

    const weatherDescStyle = {
      color: 'white',
      fontSize: '15px',
      paddingLeft: 0
    };

    const timeStampStyle = {
      marginTop: '1.6rem',
      color: 'white',
      fontSize: '15px',
      paddingLeft: 0
    };

    const iconStyle = {
      margin:'0.8rem 1.6rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      fontSize: '80px',
      height:'50%'
    };

    let date = new Date(this.props.time);

    return(
      <div className={'card--flat'}>
        <div style={timeStampStyle}>{this.props.daily? date.toLocaleDateString(['en-US'], {day: '2-digit', weekday:'short',month: 'short'}) : date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}</div>
        <div style={iconStyle}>{this.getIcon(this.props.weatherIcon)}</div>
        <div style={weatherDescStyle}>{this.props.value}</div>
      </div>
    )
  }
}

WeatherDescLongShortTermItem.propTypes = {
  weatherIcon: PropTypes.string,
  daily: PropTypes.bool,
  value: PropTypes.string,
  time: PropTypes.string
};

export {WeatherDescLongShortTermItem}