require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ForecastLayout from './forecast-layout'

class Forecast extends Component{

  constructor(props) {
    super(props);
    this.state = {
      queryPosition:{},
      forecast: {}
    }
  }

  getForecast(queryPosition){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6e2c02f548604e02d65da8602f3c0c6e/${queryPosition.latitude},${queryPosition.longitude}`,)
      .then(data => this.setState({queryPosition: queryPosition,forecast: data}));
  }

  componentDidMount() {
      const query = new URLSearchParams(this.props.location.search);
      let queryParams = [];
      for (let param of query.entries()) {
        queryParams.push(param)
      }
      let queryPosition = {
        latitude: queryParams[0][1],
        longitude:queryParams[1][1]
      };
      this.getForecast(queryPosition);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const query = new URLSearchParams(this.props.location.search);
    let queryParams = [];
    for (let param of query.entries()) {
      queryParams.push(param)
    }
    let queryPosition = {
      latitude: queryParams[0][1],
      longitude:queryParams[1][1]
    };
    if(this.state.queryPosition.latitude !== queryPosition.latitude && this.state.queryPosition.longitude !== queryPosition.longitude){
      this.getForecast(queryPosition);
    }
  }

  render() {
    let forecastLayout = null;
    if(this.state.forecast.data !== undefined && this.state.forecast.status === 200){
      forecastLayout = <div key={this.state.forecast.data.longitude}><ForecastLayout forecast={this.state.forecast.data}/></div> //dlaczego trzeba uzyc key ?
    }
    return(
      <div>
        {forecastLayout}
      </div>
    )
  }
}

export default withRouter(Forecast)