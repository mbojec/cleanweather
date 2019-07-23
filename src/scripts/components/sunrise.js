require('../../resources/style/main.scss');
import React, {Component} from "react";

class Sunrise extends Component{

  render() {
    return(
      <div className={'card__data__list__item__container'}>
        <div className={'card__data__list__item__label'}>Sunrise</div>
        <div className={'card__data__list__item__icon'}></div>
        <div className={'card__data__list__item__data'}>5:45</div>
      </div>
    )
  }
}

export {Sunrise}