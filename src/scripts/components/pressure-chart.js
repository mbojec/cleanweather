require('../../resources/style/main.scss');
import React, {Component} from "react";
import {XYChart} from "./xychart";


class PressureChart extends Component{

  createData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].pressure})
    }
    return dataArray;
  }

  render() {
    let pressureLineSeries = [
      {
        name: 'PressureGauge',
        data: this.createData(this.props.value),
      }
    ];

    return (
      <>
        <div className={'card__data'}>
          <div className={'card__data__label'}>Pressure</div>
          <div className={'card__data__content'}>
            <XYChart divId={'pressure'} valueAxisDesc={`Pressure (hPa)`} lineSeries={1} lineSeriesArray={pressureLineSeries}/>
          </div>
        </div>
      </>
    );
  }

}

export {PressureChart}