require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ForecastLayout from './forecast-layout'
import ShortLongTermForecastLayout from './short-long-term-forecast-layout'
import { connect } from 'react-redux';

class Forecast extends Component{

  getForecast(queryPosition){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6e2c02f548604e02d65da8602f3c0c6e/${queryPosition.latitude},${queryPosition.longitude}?units=si`,)
      .then(data => {
        this.props.onAddForecast(data);
        this.props.onAddQueryPosition(queryPosition);
      });
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

  hourForecast(array){
    let shortTermForecastArray = [];
    for(let i = 0; i < 12; i++){
      shortTermForecastArray.push(array[i]);
    }
    return shortTermForecastArray;
  }

  dailyForecast(array){
    let shortTermForecastArray = [];
    for(let i = 0; i < array.length; i++){
      shortTermForecastArray.push(array[i]);
    }
    return shortTermForecastArray;
  }

  render() {
    let forecastLayout = null;
    if(this.props.forecast.data !== undefined && this.props.forecast.status === 200){
      if(this.props.screenView === 'current'){
        forecastLayout = <div key={`current ${this.props.forecast.data.longitude}`}><ForecastLayout forecast={this.props.forecast.data}/></div> //dlaczego trzeba uzyc key ?
      } else if(this.props.screenView === 'shortTerm'){
        forecastLayout = <div key={`shortTerm ${this.props.forecast.data.longitude}`}><ShortLongTermForecastLayout forecast={this.hourForecast(this.props.forecast.data.hourly.data)} daily={false}/></div> //dlaczego trzeba uzyc key ?
      } else if(this.props.screenView === 'longTerm'){
        forecastLayout = <div key={`longTerm ${this.props.forecast.data.longitude}`}><ShortLongTermForecastLayout forecast={this.dailyForecast(this.props.forecast.data.daily.data)} daily={true}/></div> //dlaczego trzeba uzyc key ?
      } else {
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

const mapStateToProps = state => {
  return {
    forecast: state.forecast.forecast,
    queryPosition: state.forecast.queryPosition,
    screenView: state.navigation.stateView,
    searchQuery: state.navigation.searchQuery,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddForecast: (forecast) => dispatch({type: 'ADD_FORECAST', value: forecast}),
    onAddQueryPosition: (position) => dispatch({type: 'ADD_POSITION', value: position}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Forecast))