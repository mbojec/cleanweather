import React, {Component} from "react";
import PropTypes from "prop-types";
import 'mapbox-gl/dist/mapbox-gl.css';
import { withRouter } from 'react-router-dom';
import {ForecastLayout, ShortLongTermForecastLayout} from './layouts'
import {compose} from "recompose";
import {withRedux} from "../redux/wrapper";

class Forecast extends Component{

  getForecast(queryPosition){
    this.props.onFetchForecast(queryPosition);
  }

  getQueryPosition(){
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
    return queryPosition;
  }

  componentDidMount() {
      this.getForecast(this.getQueryPosition());
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    let queryPosition = this.getQueryPosition();
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

Forecast.propTypes = {
  onFetchForecast: PropTypes.func,
  screenView: PropTypes.string,
  forecast: PropTypes.object,
  queryPosition: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

const forecastHoc = compose(withRedux, withRouter)(Forecast);
export {forecastHoc as Forecast}
