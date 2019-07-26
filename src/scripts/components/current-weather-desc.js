require('../../resources/style/main.scss');
import React, {Component} from "react";


class CurrentWeatherDesc extends Component{


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
          </div>
        </div>
      </>
    )
  }
}

export {CurrentWeatherDesc}