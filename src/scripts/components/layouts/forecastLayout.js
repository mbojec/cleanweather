import {withRouter} from "react-router";
require('../../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import {TemperatureGauge, PressureGauge, HumidityPrecipCloudGauge, UvGauge, WindDirectionGauge, WindGauge} from "../gauges";
import {WeatherData, MainMap, WeatherDesc} from "../dataLabel"
import {compose} from "recompose";
import {withRedux} from "../../redux/wrapper";
import PropTypes from "prop-types";

class ForecastLayout extends Component{


  render() {
    return(
      <>
        <div className={'row'}>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <WeatherDesc value={this.props.currentForecast.summary} weatherIcon={this.props.currentForecast.icon}/>
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
              {<WeatherData sunriseValue={this.props.forecast.data.daily.data[0].sunriseTime * 1000} sunsetValue={this.props.forecast.data.daily.data[0].sunsetTime * 1000} timeZone = {this.props.forecast.data.timezone}/>}
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

ForecastLayout.propTypes = {
  currentForecast: PropTypes.object,
  forecast: PropTypes.object,
};

const ForecastLayoutHoc = compose(withRedux, withRouter)(ForecastLayout);
export {ForecastLayoutHoc as ForecastLayout}
