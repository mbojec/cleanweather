require('../../resources/style/main.scss');
import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {getCurrentLocation} from '../utils/location'

class Navigation extends Component{

  displayLocation = () => {
    getCurrentLocation();
  };

  render() {
    return (
      <>
        <div className={'navigation__app-bar row'}>
          <p className={'col-sm-4 navigation__app-bar__title'}>Clear Weather</p>
          <p className={'col-xs-4 navigation__app-bar__title--short'}>CW</p>
          <div className={'col-xs-8 col-sm-6 col-md-5 col-lg-4 navigation__app-bar__search-field'}>
            <div className={'navigation__app-bar__search-field__icon'}>
              <FontAwesomeIcon icon={faSearchLocation}/>
            </div>
            <form className={'navigation__app-bar__search-field__form'}>
              <input placeholder={'Znajdź miejscowość'}/>
            </form>
            <div className={'navigation__app-bar__search-field__icon__location'}>
              <FontAwesomeIcon icon={faLocationArrow}/>
            </div>
          </div>
          <div className={'col-sm-2 col-md-3 col-lg-4'}/>
        </div>
      </>
    )
  }
}

export {Navigation}

