require('../../resources/style/main.scss');
import React, {Component} from "react";
import ReactSpeedometer from "react-d3-speedometer"


class CurrentWeatherDesc extends Component{


  render() {

    return (
      <>
        <div className={'card__data__label'}>Current forecast</div>
        <div className={'card__data__content'}>
          <div className={'row'}>
            <div className={'col-xs-12 card__data__content__weather-desc'}>Partly Cloudy</div>
          </div>
          <div className={'row'}>
            {/*<div className={'col-xs-6'}>*/}
            {/*  <ReactSpeedometer*/}
            {/*    width={150}*/}
            {/*    height={150}*/}
            {/*    minValue={-50}*/}
            {/*    maxValue={50}*/}
            {/*    value={23}*/}
            {/*    needleColor="black"*/}
            {/*    startColor="blue"*/}
            {/*    segments={10}*/}
            {/*    endColor="red"*/}
            {/*    needleTransitionDuration={2000}/>*/}
            {/*</div>*/}
            {/*<div className={'col-xs-6'}>*/}
            {/*  <ReactSpeedometer*/}
            {/*    width={150}*/}
            {/*    height={150}*/}
            {/*    minValue={-50}*/}
            {/*    maxValue={50}*/}
            {/*    value={23}*/}
            {/*    needleColor="black"*/}
            {/*    startColor="blue"*/}
            {/*    segments={10}*/}
            {/*    endColor="red"*/}
            {/*    needleTransitionDuration={2000}/>*/}
            {/*</div>*/}
          </div>
        </div>
      </>
    )
  }
}

export {CurrentWeatherDesc}