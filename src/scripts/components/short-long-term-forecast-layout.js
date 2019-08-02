import {connect} from "react-redux";

require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import {TemperatureChart} from "./temperature-chart";
import {WindChart} from "./wind-chart";
import {HumidityPrecipCloudChart} from './humidity-precip-cloud-chart'
import {PressureChart} from "./pressure-chart";
import {TemperatureLongTermCharts} from "./temperature-long-term-charts";
import {WeatherDescLongShortTermList} from "./weather-desc-long-short-term-list";

class ShortLongTermForecastLayout extends Component{

  render() {
    return(
      <>
        <div className={'row--scrollable'}><WeatherDescLongShortTermList value={this.props.daily ? this.props.dailyForecast : this.props.hourForecast} daily={this.props.daily}/></div>
        <div className={'row'}>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              {this.props.daily ? <TemperatureLongTermCharts value={this.props.dailyForecast}/> :<TemperatureChart value={this.props.hourForecast}/>}
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <WindChart value={this.props.daily ? this.props.dailyForecast : this.props.hourForecast}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <HumidityPrecipCloudChart value={this.props.daily ? this.props.dailyForecast : this.props.hourForecast}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <PressureChart value={this.props.daily ? this.props.dailyForecast : this.props.hourForecast}/>
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
    hourForecast: state.forecast.hourForecast,
    dailyForecast: state.forecast.dailyForecast
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddForecast: (forecast) => dispatch({type: 'ADD_FORECAST', value: forecast}),
    onAddQueryPosition: (position) => dispatch({type: 'ADD_POSITION', value: position}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (ShortLongTermForecastLayout)