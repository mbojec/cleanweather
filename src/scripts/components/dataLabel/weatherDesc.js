import PropTypes from "prop-types";

require('../../../resources/style/main.scss');
import React, {Component} from "react";
import { Wind, Sleet, NightCloudy, ClearNight, Hail, Fog, DayCloudy, ClearDay, Cloudy, Rain, Snow, Thunderstorm} from '../../../resources/svg'

class WeatherDesc extends Component{

  static getIcon(weatherIcon){
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
      fontSize: '18px',
      paddingLeft: 0
    };

    const iconStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      fontSize: '150px'
    };

    return (
      <>
        <div className={'card card__data'}>
          <div className={'card__data__labels'}>
            <div>Current Forecast</div>
          </div>
          <div className={'card__data__content row'}>
            <div style={weatherDescStyle} className={'col-xs-6'}>{this.props.value}</div>
            <div style={iconStyle} className={'col-xs-12'}>{WeatherDesc.getIcon(this.props.weatherIcon)}</div>
          </div>
        </div>
      </>
    )
  }
}

WeatherDesc.propTypes = {
  value: PropTypes.string,
  weatherIcon: PropTypes.string
};

export {WeatherDesc}