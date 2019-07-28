require('../../resources/style/main.scss');
import React, {Component} from "react";
import {XYChart} from "./xychart";


class TemperatureChart extends Component{

  createData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].temperature})
    }
    return dataArray;
  }

  render() {
    let temperatureLineSeries = [
      {
        name: 'Temperature',
        data: this.createData(this.props.value),
      }
    ];

    let colorArray = ['#dc3545'];

    return (
      <>
        <div className={'card__data'}>
          <div className={'card__data__label'}>Temperature</div>
          <div className={'card__data__content'}>
            <XYChart divId={'temperature'} valueAxisDesc={`Temperature(${String.fromCharCode(176)}C)`} lineSeries={1} lineSeriesArray={temperatureLineSeries} colorArray={colorArray}/>
          </div>
        </div>
      </>
    );
  }

}

export {TemperatureChart}