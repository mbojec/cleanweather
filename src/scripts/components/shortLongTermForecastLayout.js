import {connect} from "react-redux";

require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import {TemperatureChart} from "./temperatureChart";
import {WindChart} from "./windChart";
import {HumidityPrecipCloudChart} from './humidityPrecipCloudChart'
import {PressureChart} from "./pressureChart";
import {TemperatureLongTermCharts} from "./temperatureLongTermCharts";
import {WeatherDescLongShortTermList} from "./weatherDescLongShortTermList";

class ShortLongTermForecastLayout extends Component{

  render() {
    return(
      <>
        <div className={'row--scrollable'}><WeatherDescLongShortTermList value={this.props.forecast} daily={this.props.screenView !== 'shortTerm'}/></div>
        <div className={'row'}>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <TemperatureChart value={this.props.forecast } screen={this.props.screenView}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <WindChart value={this.props.forecast }/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <HumidityPrecipCloudChart value={this.props.forecast }/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
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