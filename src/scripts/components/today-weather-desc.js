require('../../resources/style/main.scss');
import React, {Component} from "react";


class TodayWeatherDesc extends Component{

  render() {
    return (
      <>
        <div className={'card__data__label'}>Today's forecast</div>
        <div className={'card__data__content'}>
          <div className={'card__data__content__weather-desc'}>Possible drizzle in the morning.</div>
        </div>
      </>
    )
  }
}

export {TodayWeatherDesc}