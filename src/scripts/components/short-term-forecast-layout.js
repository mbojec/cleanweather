require('../../resources/style/main.scss');
import React, {Component} from "react";
import MainMap from "./map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Temperature} from "./temperature";
import {WindShortTerm} from "./wind-short-term";
import {HumidityPrecipCloudShortTerm} from './humidity-precip-cloud-short-term'
import {PressureShortTerm} from "./pressure-short-term";

class ShortTermForecastLayout extends Component{

  constructor(props) {
    super(props);
    this.state = {
      forecast: this.props.forecast
    };
    console.log(this.state.forecast.hourly.data)
  }

  hourForecast(array){
    let shortTermForecastArray = [];
    for(let i = 0; i < 12; i++){
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
              <Temperature value={this.hourForecast(this.state.forecast.hourly.data)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <WindShortTerm value={this.hourForecast(this.state.forecast.hourly.data)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <HumidityPrecipCloudShortTerm value={this.hourForecast(this.state.forecast.hourly.data)}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--short-term'}>
              <PressureShortTerm value={this.hourForecast(this.state.forecast.hourly.data)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShortTermForecastLayout