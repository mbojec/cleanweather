import {withRouter} from "react-router";
require('../../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import {TemperatureGauge, PressureGauge, HumidityPrecipCloudGauge, UvGauge, WindDirectionGauge, WindGauge} from "../gauges";
import {WeatherData, MainMap, WeatherDesc} from "../dataLabel"
import {compose} from "recompose";
import {withRedux} from "../../redux/wrapper";

class ForecastLayout extends Component{


  render() {
    return(
      <>
        <div className={'row'}>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <WeatherDesc value={this.props.displayForecast.summary} weatherIcon={this.props.displayForecast.icon}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <TemperatureGauge value={Math.round(this.props.displayForecast.temperature)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <PressureGauge value={Math.round(this.props.displayForecast.pressure)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <UvGauge value={this.props.displayForecast.uvIndex}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <HumidityPrecipCloudGauge cloud_value={Math.round((this.props.displayForecast.cloudCover * 100))} precip_value={Math.round((this.props.displayForecast.precipProbability * 100))} humidity_value={Math.round((this.props.displayForecast.humidity * 100))}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
                <WindGauge windSpeedValue={this.props.displayForecast.windSpeed} windGustValue={this.props.displayForecast.windGust}/>
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
              <WindDirectionGauge value={this.props.displayForecast.windBearing}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     forecast: state.forecast.forecast,
//     currentForecast: state.forecast.displayForecast,
//   }
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddForecast: (forecast) => dispatch({type: 'ADD_FORECAST', value: forecast}),
//     onAddQueryPosition: (position) => dispatch({type: 'ADD_POSITION', value: position}),
//   }
// };

const ForecastLayoutHoc = compose(withRedux, withRouter)(ForecastLayout);
export {ForecastLayoutHoc as ForecastLayout}

// export default connect(mapStateToProps, mapDispatchToProps) (ForecastLayout)