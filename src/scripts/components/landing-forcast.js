require('../../resources/style/main.scss');
import React, {Component} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ForecastLayout from './forecast-layout'

class LandingForecast extends Component{

  constructor(props) {
    super(props);
    this.state = {
      forecast: {}
    }
  }

  getForecast(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6e2c02f548604e02d65da8602f3c0c6e/51.12895169999,16.9871287?units=si`,)
      .then(data => this.setState({forecast: data}));
  }

  componentDidMount() {
    this.getForecast();
  }

  render() {
    let forecastLayout = null;
    if(this.state.forecast.status === 200){
      forecastLayout = <ForecastLayout forecast={this.state.forecast.data}/>
    }
    return(
      <div>
        {forecastLayout}
      </div>
    )
  }
}

export default withRouter(LandingForecast)