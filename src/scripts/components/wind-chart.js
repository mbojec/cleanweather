require('../../resources/style/main.scss');
import React, {Component} from "react";
import {XYChart} from "./xychart";

class WindChart extends Component{

  createWindSpeedData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].windSpeed, unit: `m/s`})
    }
    return dataArray;
  }

  createWindGustData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].windGust, unit: `m/s`})
    }
    return dataArray;
  }

  render() {
    let windLineSeries = [
      {
        name: 'Wind speed',
        data: this.createWindSpeedData(this.props.value),
      },
      {
        name: 'Wind gust',
        data: this.createWindGustData(this.props.value),
      }
    ];

    let colorArray = ['#20c997', "#17a2b8"];

    return (
      <>
        <div className={'card__data'}>
          <div className={'card__data__label'}>Wind</div>
          <div className={'card__data__content'}>
            <XYChart divId={'wind'} valueAxisDesc={`Speed (m/s)`} lineSeries={2} lineSeriesArray={windLineSeries} colorArray={colorArray}/>
          </div>
        </div>
      </>
    );
  }

}

export {WindChart}