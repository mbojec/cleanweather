require('../resources/style/main.scss');
import React, {Component} from "react";
import {TemperatureBar} from '../resources/svg/temperatureBar'
import {Map} from "./map";
import 'mapbox-gl/dist/mapbox-gl.css';

class CurrentWeather extends Component{

  constructor(props) {
    super(props);
    this.state = {
      display_selected: 'overall',
      temperature: 20,
      temperature_value: 0
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if(this.state.temperature_value !== this.state.temperature){
        this.setState(() => ({
          temperature_value: this.state.temperature_value + 1,
        }));
      } else {
        clearInterval(this.intervalId);
      }
    }, 50);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setDisplayOptionSelected = (name) => {
    this.setState({
      display_selected: name,
    })
  };

  render() {
    return(
      <>
        <div className={'current__button col-xs-12'}>
            <div className={'row current__button__group'}>
              <div className={'col-xs-2 col-sm-3'}/>
              <button className={`col-xs-4 col-sm-3 current__button__group__button current__button__group__button--master ${this.state.display_selected === 'overall'? "current__button__group__button--selected": "current__button__group__button--unselected"}`} onClick={event => this.setDisplayOptionSelected('overall')}>Overall</button>
              <button className={`col-xs-4 col-sm-3 current__button__group__button current__button__group__button--detail ${this.state.display_selected === 'detail'? "current__button__group__button--selected": "current__button__group__button--unselected"}`} onClick={event => this.setDisplayOptionSelected('detail')}>Detail</button>
              <div className={'col-xs-2 col-sm-3'}/>
            </div>
        </div>
        <div className={'current__master col-xs-12 col-md-4 col-xl-3'}>
          <div className={'row'}>
            <div className={'col-xs-12 temperature'}>
              <TemperatureBar/>
              <p className={'temperature__value'}>{this.state.temperature_value + String.fromCharCode(176) + 'C'}</p>
            </div>
          </div>
        </div>
        <div className={'col-xs-12 col-md-7 col-xl-7'}>
        </div>
      </>
    )
  }
}

export {CurrentWeather}