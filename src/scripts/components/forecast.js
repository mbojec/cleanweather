require('../../resources/style/main.scss');
import React, {Component} from "react";
import {MainMap} from "../components/map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {CurrentWeatherDesc} from "../components/current-weather-desc";
import {Temperature} from "../components/temperature";
import {WindSpeed} from "../components/wind-speed";
import {Temperature2} from "../components/temperature2";
import {Compass} from "../components/compas";
import {SolidGauge} from "../components/solid-gauge";
import {Pressure} from "../components/pressure";
import {Uv} from "../components/uv";
import {Sunrise} from "../components/sunrise";
import {Sunset} from "../components/sunset";
import {Moonphase} from "../components/moonphase";

class CurrentWeather extends Component{

  constructor(props) {
    super(props);
    this.state = {
      uvValue: 0,
      tempValue: 0,
      pressureValue: 0,
      solidValue: 0,
      wind: 0
    };
  }

  getForecast(){

    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6e2c02f548604e02d65da8602f3c0c6e/51.128951699999995,16.9871287`,)
      .then(res => res.json())
      .then(data => this.updateState(data));

  }

  componentDidMount() {
    this.getForecast();
  }

  updateState(data){
    console.log(data);
    this.setState({uvValue: 8, tempValue: 28, pressureValue: 1100, solidValue: 80, wind: 20})
  }

  render() {
    return(
      <div>
        <div className={'main'}>
          <div className={'row'}>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card card__data'}>
                <div className={'card__data__label'}>Current forecast</div>
                <div className={'card__data__content'}>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <div className={'card__data__label'}>Temperature</div>
                  <div className={'card__data__content'}>
                    <Temperature2 value={this.state.tempValue}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <div className={'card__data__label'}>Pressure</div>
                  <div className={'card__data__content'}>
                    <Pressure value={this.state.pressureValue}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <div className={'card__data__label'}>Uv index</div>
                  <div className={'card__data__content'}>
                    <Uv value={this.state.uvValue}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <div className={'card__data__labels'}>
                    <div>Humidity</div>
                    <div>Cloud Cover</div>
                    <div>Precip probalbility</div>
                  </div>
                  <div className={'card__data__content'}>
                    <SolidGauge value={this.state.solidValue}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <div className={'card__data__labels'}>
                    <div>Wind speed</div>
                    <div>Wind gust</div>
                  </div>
                  <div className={'card__data__content'}>
                    <WindSpeed value={this.state.wind}  value2={this.state.wind}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <MainMap/>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card__data__list'}>
                  <div className={'card__data__list__item'}><Sunrise/></div>
                  <div className={'card__data__list__item'}><Sunset/></div>
                  <div className={'card__data__list__item'}><Moonphase/></div>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <div className={'card__data__label'}>Wind direction</div>
                  <div className={'card__data__content'}>
                    <Compass value={this.state.wind}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {CurrentWeather}