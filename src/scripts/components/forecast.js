require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {ForecastLayout, ShortLongTermForecastLayout} from './layouts'
// import ShortLongTermForecastLayout from './layouts/shortLongTermForecastLayout'
import { connect } from 'react-redux';
import {compose} from "recompose";
import {withRedux} from "../redux/wrapper";

class Forecast extends Component{

  getForecast(queryPosition){
    // axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}/${queryPosition.latitude},${queryPosition.longitude}?units=si`,)
    //   .then(data => {
    //     this.props.onAddForecast(data);
    //     this.props.onAddQueryPosition(queryPosition);
    //   });
    this.props.onFetchForecast(queryPosition);
  }



  componentDidMount() {
    let queryPosition;
    if(this.props.match.url === '/'){
      queryPosition = {
        latitude: 51.12895169999,
        longitude:16.9871287
      };
    } else {
      const query = new URLSearchParams(this.props.location.search);
      let queryParams = [];
      for (let param of query.entries()) {
        queryParams.push(param)
      }
      queryPosition = {
        latitude: queryParams[0][1],
        longitude:queryParams[1][1]
      };
    }
      this.getForecast(queryPosition);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let queryPosition;
    if(this.props.match.url === '/'){
      queryPosition = {
        latitude: 51.12895169999,
        longitude:16.9871287
      };
    } else {
      const query = new URLSearchParams(this.props.location.search);
      let queryParams = [];
      for (let param of query.entries()) {
        queryParams.push(param)
      }
      queryPosition = {
        latitude: queryParams[0][1],
        longitude:queryParams[1][1]
      };
    }
    if(this.props.queryPosition.latitude !== queryPosition.latitude && this.props.queryPosition.longitude !== queryPosition.longitude){
      this.getForecast(queryPosition);
    }
  }

  render() {
    let forecastLayout = null;
    if(this.props.forecast.data !== undefined && this.props.forecast.status === 200){
      if(this.props.screenView === 'current'){
        forecastLayout = <div key={`current ${this.props.forecast.data.longitude}`}><ForecastLayout/></div> //dlaczego trzeba uzyc key ?
      } else if(this.props.screenView === 'shortTerm' || this.props.screenView === 'longTerm'){
        forecastLayout = <div key={`shortTerm ${this.props.forecast.data.longitude}`}><ShortLongTermForecastLayout/></div> //dlaczego trzeba uzyc key ?
      }  else {
        forecastLayout = null;
      }
    }
    return(
      <div>
        {forecastLayout}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     forecast: state.forecast.forecast,
//     queryPosition: state.forecast.queryPosition,
//     screenView: state.navigation.stateView,
//     searchQuery: state.navigation.searchQuery,
//   }
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddForecast: (forecast) => dispatch({type: 'ADD_FORECAST', value: forecast}),
//     onAddQueryPosition: (position) => dispatch({type: 'ADD_POSITION', value: position}),
//   }
// };

const forecastHoc = compose(withRedux, withRouter)(Forecast);
export {forecastHoc as Forecast}
