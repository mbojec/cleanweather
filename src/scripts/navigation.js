require('../resources/style/main.scss');
import React, {Component} from "react";
import {Logo} from '../resources/svg/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

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
      <div className={'col-xs-12 col-md-1'}>
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
              <Link to={'/'}>.....</Link>
            </div>
            <div className={`nav-bar__icon nav-bar__icon--day ${this.state.menu_selected === 'day'? "nav-bar__icon--selected": "nav-bar__icon--unselected"}`} onClick={event => this.setMenuIconSelected('day')}>
              <FontAwesomeIcon icon={faCalendarDay} />
              <Link to={'/shortTerm'}>.....</Link>
            </div>
            <div className={`nav-bar__icon nav-bar__icon--week ${this.state.menu_selected === 'week'? "nav-bar__icon--selected": "nav-bar__icon--unselected"}`} onClick={event => this.setMenuIconSelected('week')}>
              <FontAwesomeIcon icon={faCalendarWeek}/>
              <Link to={'/longTerm'}>.....</Link>
            </div>
            <div className={`nav-bar__icon__search ${this.state.menu_selected === 'search'? "nav-bar__icon__search--selected": "nav-bar__icon__search--unselected"}`} onClick={event => this.setMenuIconSelected('search')}>
              <FontAwesomeIcon icon={faSearchLocation} />
              <Link to={'/search'}>.....</Link>
            </div>
            <div className={`nav-bar__dropdown__list ${this.state.menu_class}`}>
              <div onClick={event => this.setDropDownMenuIconSelected('clock')} className={`nav-bar__dropdown__list__item ${this.state.menu_selected === 'clock'? "nav-bar__dropdown__list__item--selected": "nav-bar__dropdown__list__item--unselected"}`}>
                <FontAwesomeIcon icon={faClock} />
                <Link to={'/'}>{'Aktualna'}</Link>
                {/*<div>{'Aktualna'}</div>*/}
              </div>
              <div onClick={event => this.setDropDownMenuIconSelected('day')} className={`nav-bar__dropdown__list__item ${this.state.menu_selected === 'day'? "nav-bar__dropdown__list__item--selected": "nav-bar__dropdown__list__item--unselected"}`}>
                <FontAwesomeIcon icon={faCalendarDay} />
                <Link to={'/shortTerm'}>{'24h'}</Link>
                {/*<div>{'24h'}</div>*/}
              </div>
              <div onClick={event => this.setDropDownMenuIconSelected('week')} className={`nav-bar__dropdown__list__item ${this.state.menu_selected === 'week'? "nav-bar__dropdown__list__item--selected": "nav-bar__dropdown__list__item--unselected"}`}>
                <FontAwesomeIcon icon={faCalendarWeek} />
                <Link to={'/longTerm'}>{'Tygodniowa'}</Link>
                {/*<div>{'Tygodniowa'}</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {Navigation}

