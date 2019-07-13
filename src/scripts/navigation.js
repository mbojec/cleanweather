require('../resources/style/main.scss');
import React, {Component} from "react";
import {Logo} from '../resources/svg/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component{

  render() {

    return (
      <div className={'wrapper'}>
        <div className={'nav-bar'}>
          <div className={'nav-bar__brand'}>
            <Logo/>
          </div>
          <div className={'nav-bar__search'}>
            <FontAwesomeIcon icon={faSearchLocation} />
          </div>
        </div>
      </div>
    )
  }
}

export {Navigation}

