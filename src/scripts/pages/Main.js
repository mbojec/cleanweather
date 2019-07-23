require('../../resources/style/main.scss');
import React, {Component} from "react";
import {MainMap} from "../components/map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Navigation} from "../components/navigation";
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

class Main extends Component{

  getForecast(){

    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6e2c02f548604e02d65da8602f3c0c6e/51.128951699999995,16.9871287`,)
      .then(res => res.json())
      .then(data => console.log(data));
  }

  componentDidMount() {
    // this.getForecast();
  }

  render() {
    return(
      <div>
        <Navigation/>
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
                    <Temperature2/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <div className={'card__data__label'}>Pressure</div>
                  <div className={'card__data__content'}>
                    <Pressure/>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <div className={'card__data__label'}>Uv index</div>
                  <div className={'card__data__content'}>
                    <Uv/>
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
                    <SolidGauge/>
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
                    <WindSpeed/>
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
                    <Compass/>
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

export {Main}