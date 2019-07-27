require('../../resources/style/main.scss');
import React, {Component} from "react";
import ClearDayIcon from '../../resources/svg/icon-day-clear'
import ClearNightIcon from '../../resources/svg/icon-night-clear'
import CloudyDayIcon from '../../resources/svg/icon-day-partly-clody'
import CloudyNightIcon from '../../resources/svg/icon-night-partly-cloudy'
import CloudyIcon from '../../resources/svg/icon-cloudy'
import RainIcon from '../../resources/svg/icon-rain'
import WindIcon from '../../resources/svg/icon-wind'
import ThunderstormIcon from '../../resources/svg/icon-thunderstorm'
import SleetIcon from '../../resources/svg/icon-sleet'
import FogIcon from '../../resources/svg/icon-fog'
import SnowIcon from '../../resources/svg/icon-snow'
import HailIcon from '../../resources/svg/icon-hail'


class CurrentWeatherDesc extends Component{

  getIcon(weatherIcon){
    // console.log('weather desc' + weatherDesc);
    switch (weatherIcon) {
      case 'clear-day':
        return <ClearDayIcon/>;
      case 'clear-night':
        return <ClearNightIcon/>;
      case 'partly-cloudy-day':
        return <CloudyDayIcon/>;
      case 'partly-cloudy-night':
        return <CloudyNightIcon/>;
      case 'rain':
        return <RainIcon/>;
      case 'snow':
        return <SnowIcon/>;
      case 'sleet':
        return <SleetIcon/>;
      case 'wind':
        return <WindIcon/>;
      case 'fog':
        return <FogIcon/>;
      case 'cloudy':
        return <CloudyIcon/>;
      case 'hail':
        return <HailIcon/>;
      case 'thunderstorm':
        return <ThunderstormIcon/>;
      default: return <ClearDayIcon/>;
    }
  }

  render() {

    const weatherDescStyle = {
      color: 'white',
      fontSize: '18px',
      paddingLeft: 0
    };

    const timeZoneStyle = {
      textAlign: 'end',
      ...weatherDescStyle
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
            <div>Time Zone</div>
          </div>
          <div className={'card__data__content row'}>
            <div style={weatherDescStyle} className={'col-xs-6'}>{this.props.value}</div>
            <div style={timeZoneStyle} className={'col-xs-6'}>{this.props.timeZone}</div>
            <div style={iconStyle} className={'col-xs-12'}>{this.getIcon(this.props.weatherIcon)}</div>
          </div>
        </div>
      </>
    )
  }
}

export {CurrentWeatherDesc}