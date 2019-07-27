require('../../resources/style/main.scss');
import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Navigation extends Component{

  constructor(props){
    super(props);
    this.state = {
      searchQuery: 'Wrocław, Dolnośląskie, Poland',
      queryArray: [],
      viewSelected: 'current'
    }
  }

  handleChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    this.displayList(e.target.value)
  }

  displayList(query){
    if(query.length > 0){
      fetch(`https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1IjoibWJvamVjIiwiYSI6ImNqcmxwdWN2NDAwNmk0M3Nid2k2MWlwZXUifQ.mNFwxA0Zu5cA7HmHvlwBCg&cachebuster=1563562981406&autocomplete=true&types=place&locality&postcode&district&country&region&limit=10`)
        .then(res => res.json())
        .then(data => this.setState({queryArray: data.features}));
    }
  }

  handleViewChange(view){
    this.setState({...this.state, viewSelected: view})
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
    this.setState({searchQuery: cityName,queryArray: []});
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
          <div className={'navigation__app-bar__hamburger-icon col-xs-1 col-sm-1'}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
          <p className={'col-xs-10 col-sm-4 col-md-3 navigation__app-bar__title'}>Clear Weather</p>
          <div className={'col-xs-12 col-sm-7 col-md-5 col-lg-6 navigation__app-bar__search'}>
            <div className={'navigation__app-bar__search-field'}>
              <div className={'navigation__app-bar__search-field__icon'}>
                <FontAwesomeIcon icon={faSearchLocation}/>
              </div>
              <form className={'navigation__app-bar__search-field__form'} onSubmit={e => { e.preventDefault();}}>
                <input placeholder={'Znajdź miejscowość'} type="text" autoComplete="off" name='searchQuery' value={this.state.searchQuery} onChange={e => this.handleChange(e)}/>
                <ul className={'navigation__app-bar__search-field__query-list'}>
                  {this.state.queryArray && this.state.queryArray.length !==0 && this.state.queryArray.map((singleElement, index) => <li key={index} onClick={event => this.navigateToQueryLocation(singleElement.place_name,singleElement.center)}>{singleElement.place_name}</li>)}
                </ul>
              </form>
              <div className={'navigation__app-bar__search-field__icon__location'} onClick={event => this.navigateToCurrentLocation()}>
                <FontAwesomeIcon icon={faLocationArrow}/>
              </div>
            </div>
          </div>
          <div className={'col-md-4 col-lg-3 navigation__app-bar__buttons-panel'}>
            <div onClick={event => this.handleViewChange('current')} className={`navigation__app-bar__buttons-panel__button ${this.state.viewSelected === 'current'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>Current</div>
            <div onClick={event => this.handleViewChange('shortTerm')} className={`navigation__app-bar__buttons-panel__button ${this.state.viewSelected === 'shortTerm'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>12h</div>
            <div onClick={event => this.handleViewChange('longTerm')} className={`navigation__app-bar__buttons-panel__button ${this.state.viewSelected === 'longTerm'&&'navigation__app-bar__buttons-panel__button--clicked'}`}>7 day's</div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Navigation)

