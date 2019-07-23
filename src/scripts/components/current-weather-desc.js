require('../../resources/style/main.scss');
import React, {Component} from "react";


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
          </div>
        </div>
      </>
    )
  }
}

export {CurrentWeatherDesc}