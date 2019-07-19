require('../../resources/style/main.scss');
import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation} from "@fortawesome/free-solid-svg-icons";

class Navigation extends Component{

  render() {
    return (
      <>
        <div className={'navigation__app-bar__title'}>
          Clear Weather
        </div>
        <div className={'navigation__app-bar__navigation'}>
          <div className={'navigation__app-bar__flat-icon'}>
            <FontAwesomeIcon icon={faLocationArrow}/>
          </div>
          <form className={'navigation__app-bar__navigation__search-form'}>
            <input/>
          </form>
          <div className={'navigation__app-bar__flat-icon'}>
            <FontAwesomeIcon icon={faSearchLocation}/>
          </div>
        </div>
      </>
    )
  }
}

export {Navigation}

