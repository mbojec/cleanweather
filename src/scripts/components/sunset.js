import React, {Component} from "react";

class Sunset extends Component{

  render() {
    return(
      <div className={'card__data__list__item__container'}>
        <div className={'card__data__list__item__label'}>Sunset</div>
        <div className={'card__data__list__item__icon'}></div>
        <div className={'card__data__list__item__data'}>21:45</div>
      </div>
    )
  }
}

export {Sunset}