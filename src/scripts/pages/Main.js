require('../../resources/style/main.scss');
import React, {Component} from "react";
import {MainMap} from "../components/map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Navigation} from "../components/navigation";
import {CurrentWeatherDesc} from "../components/current-weather-desc";
import {TodayWeatherDesc} from "../components/today-weather-desc";
import {Temperature} from "../components/temperature";
import {CloudCover} from "../components/cloud-cover";
import {WindSpeed} from "../components/wind-speed";
import {Pressure} from "../components/pressure";
import {WindDirection} from "../components/wind-direction";
import {Precitipation} from "../components/precitipation";

class Main extends Component{

  render() {
    return(
      <div>
        <Navigation/>
        <div className={'main'}>
          <div className={'row'}>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card card__data'}>
                <CurrentWeatherDesc/>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <Temperature/>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <WindSpeed/>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <CloudCover/>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <Pressure/>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}></div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <MainMap/>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <Precitipation/>
                </div>
              </div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>
                <div className={'card card__data'}>
                  <WindDirection/>
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