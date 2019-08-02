require('../../resources/style/main.scss');
import React, {Component} from "react";
import {XYChart} from "./xychart";


class TemperatureChart extends Component{

  createData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].temperature, unit: `${String.fromCharCode(176)}C`})
    }
    return dataArray;
  }

  createDayData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].temperatureHigh, unit: `${String.fromCharCode(176)}C`})
    }
    return dataArray;
  }

  createNightData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].temperatureLow, unit: `${String.fromCharCode(176)}C`})
    }
    return dataArray;
  }

  render() {
    let temperatureLineSeries;
    if(this.props.screen === 'shortTerm'){
      temperatureLineSeries = [
        {
          name: 'Temperature',
          data: this.createData(this.props.value),
        }
      ];
    } else {
      temperatureLineSeries = [
        {
          name: 'Day time temperature',
          data: this.createDayData(this.props.value),
        },
        {
          name: 'Night temperature',
          data: this.createNightData(this.props.value),
        }
      ];
    }
    let colorArray = ['#dc3545','#fd7e14'];

    return (
      <>
        <div className={'card__data'}>
          <div className={'card__data__label'}>Temperature</div>
          <div className={'card__data__content'}>
            <XYChart divId={'temperature'} valueAxisDesc={`Temperature(${String.fromCharCode(176)}C)`} lineSeries={this.props.screen === 'shortTerm'?1:2} lineSeriesArray={temperatureLineSeries} colorArray={colorArray}/>
          </div>
        </div>
      </>
    );
  }

}

export {TemperatureChart}