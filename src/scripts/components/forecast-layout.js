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
import { connect } from 'react-redux';

class ForecastLayout extends Component{


  render() {
    console.log((this.props.forecast));
    return(
      <>
        <div className={'row'}>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <WeatherDesc value={this.props.currentForecast.summary} timeZone = {this.props.forecast.data.timezone} weatherIcon={this.props.currentForecast.icon}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <TemperatureGauge value={Math.round(this.props.currentForecast.temperature)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <PressureGauge value={Math.round(this.props.currentForecast.pressure)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <UvGauge value={this.props.currentForecast.uvIndex}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <HumidityPrecipCloudGauge cloud_value={Math.round((this.props.currentForecast.cloudCover * 100))} precip_value={Math.round((this.props.currentForecast.precipProbability * 100))} humidity_value={Math.round((this.props.currentForecast.humidity * 100))}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <WindGauge windSpeedValue={this.props.currentForecast.windSpeed} windGustValue={this.props.currentForecast.windGust}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <MainMap longitude={this.props.forecast.data.longitude} latitude={this.props.forecast.data.latitude}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {<WeatherData sunriseValue={this.props.forecast.data.daily.data[0].sunriseTime * 1000} sunsetValue={this.props.forecast.data.daily.data[0].sunsetTime * 1000}/>}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <WindDirectionGauge value={this.props.currentForecast.windBearing}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    forecast: state.forecast.forecast,
    currentForecast: state.forecast.currentForecast,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddForecast: (forecast) => dispatch({type: 'ADD_FORECAST', value: forecast}),
    onAddQueryPosition: (position) => dispatch({type: 'ADD_POSITION', value: position}),
  }
};


export default connect(mapStateToProps, mapDispatchToProps) (ForecastLayout)