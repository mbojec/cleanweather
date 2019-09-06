require('../../resources/style/main.scss');
import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {compose} from "recompose";
import {withRedux} from "../redux/wrapper";


class Navigation extends Component{

  handleChange(e){
    e.preventDefault();
    this.props.onChangeQueryArray(e.target.value);
    this.displayList(e.target.value)
  }

  displayList(query){
    if(query.length > 0){
      // fetch(`https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}&autocomplete=true&types=place&locality&postcode&district&country&region&limit=10`)
      //   .then(res => res.json())
      //   .then(data => this.props.onChangeQueryArray(data.features));
      this.props.onFetchSearchQuery(query);
    }
  }

  navigateToCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.history.push({pathname:'/search',search: `?lat=${position.coords.latitude}&lng=${position.coords.longitude}`})
      },
      (error) => {
        console.error(JSON.stringify(error))
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  };

  navigateToQueryLocation(cityName,position){
    this.props.onChangeView('current');
    this.props.onChangeQueryArray(cityName);
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
      // do reverse geocoding and update navbar
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
                <input placeholder={'Znajdź miejscowość'} type="text" autoComplete="off" name='searchQuery' value={this.props.searchQuery} onChange={e => this.handleChange(e)}/>
                <ul className={'navigation__app-bar__search-field__query-list'}>
                  {this.props.queryArray && this.props.queryArray.length !==0 && this.props.queryArray.map((singleElement, index) => <li key={index} onClick={() => this.navigateToQueryLocation(singleElement.place_name,singleElement.center)}>{singleElement.place_name}</li>)}
                </ul>
              </form>
              <div className={'navigation__app-bar__search-field__icon__location'} onClick={event => this.navigateToCurrentLocation()}>
                <FontAwesomeIcon icon={faLocationArrow}/>
              </div>
            </div>
          </div>
          <div className={'col-md-4 col-lg-3 navigation__app-bar__buttons-panel'}>
            <div onClick={() => {this.props.onChangeView('current'); this.props.onShowCurrentForecast(); }} className={`navigation__app-bar__buttons-panel__button ${this.props.screenView === 'current'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>Current</div>
            <div onClick={() => {this.props.onChangeView('shortTerm'); this.props.onShowHourForecast();}} className={`navigation__app-bar__buttons-panel__button ${this.props.screenView === 'shortTerm'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>12h</div>
            <div onClick={() => {this.props.onChangeView('longTerm'); this.props.onShowDailyForecast();}} className={`navigation__app-bar__buttons-panel__button ${this.props.screenView === 'longTerm'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>7 day's</div>
          </div>
          <div className={`navigation__app-bar__drawer ${this.props.drawerIsOpen? 'navigation__app-bar__drawer--show':'navigation__app-bar__drawer--hide'}`}>
            <div className={'navigation__app-bar__drawer__list'}>
              <div onClick={() => {this.props.onChangeView('current'); this.props.onShowCurrentForecast(); this.props.onChangeDrawerState(false)}}  className={`navigation__app-bar__drawer__item ${this.props.screenView === 'current'&&'navigation__app-bar__drawer__item--clicked'}`}>Current</div>
              <div onClick={() => {this.props.onChangeView('shortTerm'); this.props.onShowHourForecast(); this.props.onChangeDrawerState(false)}} className={`navigation__app-bar__drawer__item ${this.props.screenView === 'shortTerm'&&'navigation__app-bar__drawer__item--clicked'}`}>12h</div>
              <div onClick={() => {this.props.onChangeView('longTerm'); this.props.onShowDailyForecast(); this.props.onChangeDrawerState(false)}} className={`navigation__app-bar__drawer__item ${this.props.screenView === 'longTerm'&&'navigation__app-bar__drawer__item--clicked'}`}>7 day's</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     screenView: state.navigation.stateView,
//     searchQuery: state.navigation.searchQuery,
//     queryArray: state.navigation.queryArray,
//     drawerIsOpen: state.navigation.drawerIsOpen
//   }
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onChangeView: (screen) => dispatch({type: 'CHANGE_VIEW', value: screen}),
//     onChangeSearchQuery: (searchQuery) => dispatch({type: 'CHANGE_SEARCH_QUERY', value: searchQuery}),
//     onChangeQueryArray: (query) => dispatch({type: 'CHANGE_QUERY', value: query}),
//     onCleanQueryArray: () => dispatch({type: 'CLEAN_QUERY'}),
//     onChangeDrawerState: (state) => dispatch({type: 'OPEN/CLOSE_DRAWER', value: state}),
//     onShowCurrentForecast: () => dispatch({type:'SHOW_CURRENT_FORECAST'}),
//     onShowHourForecast: () => dispatch({type:'SHOW_HOUR_FORECAST'}),
//     onShowDailyForecast: () => dispatch({type:'SHOW_DAILY_FORECAST'}),
//   }
// };

// const wrappedComponent = connect(mapStateToProps, mapDispatchToProps) (withRouter(Navigation));
// export {wrappedComponent as Navigation}

const navigationHoc = compose(withRedux, withRouter)(Navigation);
export {navigationHoc as Navigation}

