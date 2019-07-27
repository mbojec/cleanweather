require('../../resources/style/main.scss');
import React, {Component} from "react";
import MainMap from "./map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Temperature2} from "./temperature2";
import {Pressure} from "./pressure";
import {Uv} from "./uv";
import {SolidGauge} from "./solid-gauge";
import {WindSpeed} from "./wind-speed";
import {Compass} from "./compas";
import Data from "./data"
import {CurrentWeatherDesc} from "./current-weather-desc";

class ForecastLayout extends Component{

  constructor(props) {
    super(props);
    this.state = {
      forecast: this.props.forecast
    };
    console.log(this.state.forecast)
  }

  render() {
    return(
      <div className={'main'}>
        <div className={'row'}>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <CurrentWeatherDesc value={this.state.forecast.currently.summary} timeZone = {this.state.forecast.timezone} weatherIcon={this.state.forecast.currently.icon}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <Temperature2 value={Math.round(this.state.forecast.currently.temperature)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <Pressure value={Math.round(this.state.forecast.currently.pressure)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <Uv value={this.state.forecast.currently.uvIndex}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <SolidGauge cloud_value={Math.round((this.state.forecast.currently.cloudCover * 100))} precip_value={Math.round((this.state.forecast.currently.precipProbability * 100))} humidity_value={Math.round((this.state.forecast.currently.humidity * 100))}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <WindSpeed windSpeedValue={this.state.forecast.currently.windSpeed}  windGustValue={this.state.forecast.currently.windGust}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <MainMap longitude={this.state.forecast.longitude} latitude={this.state.forecast.latitude}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {<Data sunriseValue={this.state.forecast.daily.data[0].sunriseTime * 1000} sunsetValue={this.state.forecast.daily.data[0].sunsetTime * 1000}/>}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                  <Compass value={this.state.forecast.currently.windBearing}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForecastLayout