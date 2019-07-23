import React, {Component} from "react";

class Moonphase extends Component{

  render() {
    return(
      <div className={'card__data__list__item__container'}>
        <div className={'card__data__list__item__label'}>Moon phase</div>
        <div className={'card__data__list__item__icon--moon'}></div>
      </div>
    )
  }
}

export {Moonphase}