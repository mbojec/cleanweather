require('../../resources/style/main.scss');
import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faSearchLocation} from "@fortawesome/free-solid-svg-icons";
import {getCurrentLocation} from '../utils/location'
import {getPlaceLatLng} from "../utils/geolocation";

class Navigation extends Component{

  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      queryArray: []
    }
  }

  handleChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    this.displayList(e.target.value)
  }

  displayList(query){
    getPlaceLatLng(query);
    this.getPlaceLatLng(query)

  }

  getPlaceLatLng(query) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1IjoibWJvamVjIiwiYSI6ImNqcmxwdWN2NDAwNmk0M3Nid2k2MWlwZXUifQ.mNFwxA0Zu5cA7HmHvlwBCg&cachebuster=1563562981406&autocomplete=true&types=place&locality&postcode&district&country&region&limit=10`)
      .then(res => res.json())
      .then(data => this.setState({queryArray: data.features}));
  }

  displayLocation = () => {
    getCurrentLocation();
  };

  setOpacity(index){
    return (1.0 - ((index +1) * 0.05))
  }

  render() {
    return (
      <>
        <div className={'navigation__app-bar row'}>
          <p className={'col-sm-4 navigation__app-bar__title'}>Clear Weather</p>
          <p className={'col-xs-2 navigation__app-bar__title--short'}>CW</p>
          <div className={'col-xs-8 col-sm-6 col-md-5 col-lg-4 navigation__app-bar__search-field'}>
            <div className={'navigation__app-bar__search-field__icon'}>
              <FontAwesomeIcon icon={faSearchLocation}/>
            </div>
            <form className={'navigation__app-bar__search-field__form'}>
              <input placeholder={'Znajdź miejscowość'} type="text" autoComplete="off" name='searchQuery' value={this.state.searchQuery} onChange={e => this.handleChange(e)}/>
              <ul className={'navigation__app-bar__search-field__query-list'}>
                {this.state.queryArray && this.state.queryArray.length !==0 && this.state.queryArray.map((singleElement, index) => <li key={index} style={{opacity: this.setOpacity(index)}}>{singleElement.place_name}</li>)}
              </ul>
            </form>
            <div className={'navigation__app-bar__search-field__icon__location'} onClick={event => this.displayLocation()}>
              <FontAwesomeIcon icon={faLocationArrow}/>
            </div>
          </div>
          <div className={'col-xs-2 col-md-3 col-lg-4'}/>
        </div>
      </>
    )
  }
}

export {Navigation}

