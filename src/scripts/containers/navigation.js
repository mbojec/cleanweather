require('../../resources/style/main.scss');
import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router-dom';
import {compose} from "recompose";
import {withRedux} from "../redux/wrapper";


class Navigation extends Component{

  handleChange(e){
    e.preventDefault();
    this.props.onChangeCityName(e.target.value);
    this.displayList(e.target.value)
  }

  displayList(query){
    if(query.length > 0){
      this.props.onFetchSearchQuery(query);
    }
  }

  navigateToCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.history.push({pathname:'/search',search: `?lat=${position.coords.latitude}&lng=${position.coords.longitude}`});
        this.props.onFetchCityName({latitude: position.coords.latitude, longitude: position.coords.longitude});
      },
      (error) => {
        console.error(JSON.stringify(error))
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  };

  navigateToQueryLocation(cityName,position){
    this.props.onChangeView('current');
    this.props.onChangeCityName(cityName);
    this.props.onCleanQueryArray();
    this.props.history.push({pathname:'/search',search: `?lat=${position[1]}&lng=${position[0]}`})
  }

  componentDidMount() {
    if(this.props.history.location.pathname === '/search'){
      const query = new URLSearchParams(this.props.history.location.search);
      let queryParams = [];
      for (let param of query.entries()) {
        queryParams.push(param)
      }
      let queryPosition = {
        latitude: queryParams[0][1],
        longitude:queryParams[1][1]
      };
      this.props.onFetchCityName(queryPosition);
    }
  }

  render() {
    return (
      <>
        <div className={'navigation__app-bar row'}>
          <div className={'navigation__app-bar__hamburger-icon col-xs-1 col-sm-1'} onClick={() => this.props.onChangeDrawerState(!this.props.drawerIsOpen)}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
          <p className={'col-xs-10 col-sm-4 col-md-3 navigation__app-bar__title'}>Clean Weather</p>
          <div className={'col-xs-12 col-sm-7 col-md-5 col-lg-6 navigation__app-bar__search'}>
            <div className={'navigation__app-bar__search-field'}>
              <div className={'navigation__app-bar__search-field__icon'}>
                <FontAwesomeIcon icon={faSearchLocation}/>
              </div>
              <form className={'navigation__app-bar__search-field__form'} onSubmit={e => { e.preventDefault();}}>
                <input placeholder={'Znajdź miejscowość'} type="text" autoComplete="off" name='searchQuery' value={this.props.cityName} onChange={e => this.handleChange(e)}/>
                <ul className={'navigation__app-bar__search-field__query-list'}>
                  {this.props.queryArray && this.props.queryArray.length !==0 && this.props.queryArray.map((singleElement, index) => <li key={index} onClick={() => this.navigateToQueryLocation(singleElement.place_name,singleElement.center)}>{singleElement.place_name}</li>)}
                </ul>
              </form>
              <div className={'navigation__app-bar__search-field__icon__location'} onClick={() => this.navigateToCurrentLocation()}>
                <FontAwesomeIcon icon={faLocationArrow}/>
              </div>
            </div>
          </div>
          <div className={'col-md-4 col-lg-3 navigation__app-bar__buttons-panel'}>
            <div onClick={() => {this.props.onChangeView('current'); }} className={`navigation__app-bar__buttons-panel__button ${this.props.screenView === 'current'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>Current</div>
            <div onClick={() => {this.props.onChangeView('shortTerm'); }} className={`navigation__app-bar__buttons-panel__button ${this.props.screenView === 'shortTerm'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>12h</div>
            <div onClick={() => {this.props.onChangeView('longTerm'); }} className={`navigation__app-bar__buttons-panel__button ${this.props.screenView === 'longTerm'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>7 day's</div>
          </div>
          <div className={`navigation__app-bar__drawer ${this.props.drawerIsOpen? 'navigation__app-bar__drawer--show':'navigation__app-bar__drawer--hide'}`}>
            <div className={'navigation__app-bar__drawer__list'}>
              <div onClick={() => {this.props.onChangeView('current'); this.props.onChangeDrawerState(false)}}  className={`navigation__app-bar__drawer__item ${this.props.screenView === 'current'&&'navigation__app-bar__drawer__item--clicked'}`}>Current</div>
              <div onClick={() => {this.props.onChangeView('shortTerm'); this.props.onChangeDrawerState(false)}} className={`navigation__app-bar__drawer__item ${this.props.screenView === 'shortTerm'&&'navigation__app-bar__drawer__item--clicked'}`}>12h</div>
              <div onClick={() => {this.props.onChangeView('longTerm'); this.props.onChangeDrawerState(false)}} className={`navigation__app-bar__drawer__item ${this.props.screenView === 'longTerm'&&'navigation__app-bar__drawer__item--clicked'}`}>7 day's</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
const navigationHoc = compose(withRedux, withRouter)(Navigation);
export {navigationHoc as Navigation}

