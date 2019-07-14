require('../resources/style/main.scss');
import React, {Component} from "react";
import {Logo} from '../resources/svg/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component{

  constructor(props) {
    super(props);
    this.state = {
      menu_class: 'nav-bar__dropdown__list--hidden',
      menu_selected: 'clock'
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === 'nav-bar__dropdown__list--hidden') {
      this.setState({
        menu_class: 'nav-bar__dropdown__list--show',
      })
    } else {
      this.setState({
        menu_class: 'nav-bar__dropdown__list--hidden',
      })
    }
  };

  setDropDownMenuIconSelected = (name) => {
    this.setState({
      menu_class: 'nav-bar__dropdown__list--hidden',
      menu_selected: name,
    })
  };

  setMenuIconSelected = (name) => {
    this.setState({
      menu_selected: name,
    })
  };

  render() {

    return (
      <div className={'wrapper'}>
        <div className={'nav-bar'}>
          <div className={'nav-bar__dropdown__icon'} onClick={event => this.setToggleTopMenuClass()}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={'nav-bar__brand'}>
            <Logo/>
          </div>
          <div className={`nav-bar__icon nav-bar__icon--clock ${this.state.menu_selected === 'clock'? "nav-bar__icon--selected": "nav-bar__icon--unselected"}`} onClick={event => this.setMenuIconSelected('clock')}>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className={`nav-bar__icon nav-bar__icon--day ${this.state.menu_selected === 'day'? "nav-bar__icon--selected": "nav-bar__icon--unselected"}`} onClick={event => this.setMenuIconSelected('day')}>
            <FontAwesomeIcon icon={faCalendarDay} />
          </div>
          <div className={`nav-bar__icon nav-bar__icon--week ${this.state.menu_selected === 'week'? "nav-bar__icon--selected": "nav-bar__icon--unselected"}`} onClick={event => this.setMenuIconSelected('week')}>
            <FontAwesomeIcon icon={faCalendarWeek}/>
          </div>
          <div className={`nav-bar__icon__search ${this.state.menu_selected === 'search'? "nav-bar__icon__search--selected": "nav-bar__icon__search--unselected"}`} onClick={event => this.setMenuIconSelected('search')}>
            <FontAwesomeIcon icon={faSearchLocation} />
          </div>
          <div className={`nav-bar__dropdown__list ${this.state.menu_class}`}>
            <div className={`nav-bar__dropdown__list__item ${this.state.menu_selected === 'clock'? "nav-bar__dropdown__list__item--selected": "nav-bar__dropdown__list__item--unselected"}`}>
              <FontAwesomeIcon icon={faClock} />
              <div onClick={event => this.setDropDownMenuIconSelected('clock')}>{'Aktualna'}</div>
            </div>
            <div className={`nav-bar__dropdown__list__item ${this.state.menu_selected === 'day'? "nav-bar__dropdown__list__item--selected": "nav-bar__dropdown__list__item--unselected"}`}>
              <FontAwesomeIcon icon={faCalendarDay} />
              <div onClick={event => this.setDropDownMenuIconSelected('day')}>{'24h'}</div>
            </div>
            <div className={`nav-bar__dropdown__list__item ${this.state.menu_selected === 'week'? "nav-bar__dropdown__list__item--selected": "nav-bar__dropdown__list__item--unselected"}`}>
              <FontAwesomeIcon icon={faCalendarWeek} />
              <div onClick={event => this.setDropDownMenuIconSelected('week')}>{'Tygodniowa'}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {Navigation}

