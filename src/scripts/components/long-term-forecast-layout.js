require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Temperature} from "./temperature";
import {DailyTemperature} from "./dailyTemperature";
import {WindShortTerm} from "./wind-short-term";
import {HumidityPrecipCloudShortTerm} from './humidity-precip-cloud-short-term'
import {PressureShortTerm} from "./pressure-short-term";

class LongTermForecastLayout extends Component{

  constructor(props) {
    super(props);
    this.state = {
      forecast: this.props.forecast
    };
    console.log(this.state.forecast.daily.data)
  }

  dailyForecast(array){
    let shortTermForecastArray = [];
    for(let i = 0; i < array.length; i++){
      shortTermForecastArray.push(array[i]);
    }
    return shortTermForecastArray;
  }

  render() {
    return(
      <div className={'main'}>
        <div className={'row'}>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <DailyTemperature value={this.dailyForecast(this.state.forecast.daily.data)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <WindShortTerm value={this.dailyForecast(this.state.forecast.daily.data)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <HumidityPrecipCloudShortTerm value={this.dailyForecast(this.state.forecast.daily.data)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <PressureShortTerm value={this.dailyForecast(this.state.forecast.daily.data)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LongTermForecastLayout