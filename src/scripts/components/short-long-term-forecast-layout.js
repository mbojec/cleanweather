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
        <div className={'row--scrollable'}><WeatherDescLongShortTermList value={this.props.forecast} daily={this.props.screenView !== 'shortTerm'}/></div>
        <div className={'row'}>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <TemperatureChart value={this.props.forecast } screen={this.props.screenView}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <WindChart value={this.props.forecast }/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <HumidityPrecipCloudChart value={this.props.forecast }/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <PressureChart value={this.props.forecast }/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    forecast: state.forecast.displayForecast,
    screenView: state.navigation.stateView,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddForecast: (forecast) => dispatch({type: 'ADD_FORECAST', value: forecast}),
    onAddQueryPosition: (position) => dispatch({type: 'ADD_POSITION', value: position}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (ShortLongTermForecastLayout)