require('../../resources/style/main.scss');
import React, {Component} from "react";
import MainMap from "./map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {TemperatureGauge} from "./temperature-gauge";
import {PressureGauge} from "./pressure-gauge";
import {UvGauge} from "./uv-gauge";
import {HumidityPrecipCloudGauge} from "./humidity-precip-cloud-gauge";
import {WindGauge} from "./wind-gauge";
import {WindDirectionGauge} from "./wind-direction-gauge";
import WeatherData from "./weather-data"
import {WeatherDesc} from "./weather-desc";

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
              <WeatherDesc value={this.state.forecast.currently.summary} timeZone = {this.state.forecast.timezone} weatherIcon={this.state.forecast.currently.icon}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <TemperatureGauge value={Math.round(this.state.forecast.currently.temperature)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <PressureGauge value={Math.round(this.state.forecast.currently.pressure)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <UvGauge value={this.state.forecast.currently.uvIndex}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <HumidityPrecipCloudGauge cloud_value={Math.round((this.state.forecast.currently.cloudCover * 100))} precip_value={Math.round((this.state.forecast.currently.precipProbability * 100))} humidity_value={Math.round((this.state.forecast.currently.humidity * 100))}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <WindGauge windSpeedValue={this.state.forecast.currently.windSpeed} windGustValue={this.state.forecast.currently.windGust}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <MainMap longitude={this.state.forecast.longitude} latitude={this.state.forecast.latitude}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {<WeatherData sunriseValue={this.state.forecast.daily.data[0].sunriseTime * 1000} sunsetValue={this.state.forecast.daily.data[0].sunsetTime * 1000}/>}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <WindDirectionGauge value={this.state.forecast.currently.windBearing}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForecastLayout