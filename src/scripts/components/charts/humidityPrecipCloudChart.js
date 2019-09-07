import PropTypes from "prop-types";

require('../../../resources/style/main.scss');
import React, {Component} from "react";
import {XYChart} from "./xychart";

class HumidityPrecipCloudChart extends Component{

  createCloudData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: (array[i].cloudCover * 100), unit: `%`})
    }
    return dataArray;
  }

  createPrecipData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: (array[i].precipProbability * 100), unit: `%`})
    }
    return dataArray;
  }

  createHumidityData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: (array[i].humidity * 100), fillOpacity: array[i].humidity, unit: `%`});
    }
    return dataArray;
  }

  render() {

    let precipCloudLineSeries = [
      {
        name: 'Precip probability',
        data: this.createPrecipData(this.props.value),
      },
      {
        name: 'Cloud cover',
        data: this.createCloudData(this.props.value),
      }
    ];

    let humidityColumnSeries = [
      {
        name: 'Humidity',
        data: this.createHumidityData(this.props.value),
      }
    ];

    let colorArray = ["#007bff", "#ffc107", "#6c757d"];

    return (
      <>
        <div className={'card__data'}>
          <div className={'card__data__labels'}>
            <div>Humidity</div>
            <div>Cloud Cover</div>
            <div>Precip probalbility</div>
          </div>
          <div className={'card__data__content'}>
            <XYChart valueAxisMin={0} valueAxisMax={100} divId={'humidity-precip-cloud'} valueAxisDesc={`Probability (%)`} lineSeries={2} lineSeriesArray={precipCloudLineSeries} columnSeries={1} columnSeriesArray={humidityColumnSeries} colorArray={colorArray}/>
          </div>
        </div>
      </>
    );
  }
}

HumidityPrecipCloudChart.propTypes = {
  value: PropTypes.array
};

export {HumidityPrecipCloudChart}