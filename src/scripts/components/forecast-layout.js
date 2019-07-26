require('../../resources/style/main.scss');
import React, {Component} from "react";
import MainMap from "./map";
import 'mapbox-gl/dist/mapbox-gl.css';

class ForecastLayout extends Component{

  constructor(props) {
    super(props);
    this.state = {
      forecast: this.props.forecast
    }
  }

  render() {
    return(
      <div className={'main'}>
        <div className={'row'}>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {/*<div className={'card card__data'}>*/}
              {/*<div className={'card__data__label'}>Current forecast</div>*/}
              {/*<div className={'card__data__content'}>*/}
              {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {/*<div className={'card card__data'}>*/}
              {/*<div className={'card__data__label'}>Temperature</div>*/}
              {/*<div className={'card__data__content'}>*/}
              {/*  <Temperature2 value={this.state.tempValue}/>*/}
              {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {/*<div className={'card card__data'}>*/}
              {/*  <div className={'card__data__label'}>Pressure</div>*/}
              {/*  <div className={'card__data__content'}>*/}
              {/*    <Pressure value={this.state.pressureValue}/>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {/*<div className={'card card__data'}>*/}
              {/*  <div className={'card__data__label'}>Uv index</div>*/}
              {/*  <div className={'card__data__content'}>*/}
              {/*    <Uv value={this.state.uvValue}/>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {/*<div className={'card card__data'}>*/}
              {/*<div className={'card__data__labels'}>*/}
              {/*  <div>Humidity</div>*/}
              {/*  <div>Cloud Cover</div>*/}
              {/*  <div>Precip probalbility</div>*/}
              {/*</div>*/}
              {/*<div className={'card__data__content'}>*/}
              {/*  <SolidGauge value={this.state.solidValue}/>*/}
              {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {/*<div className={'card card__data'}>*/}
              {/*<div className={'card__data__labels'}>*/}
              {/*  <div>Wind speed</div>*/}
              {/*  <div>Wind gust</div>*/}
              {/*</div>*/}
              {/*<div className={'card__data__content'}>*/}
              {/*  <WindSpeed value={this.state.wind}  value2={this.state.wind}/>*/}
              {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              <MainMap longitude={this.state.forecast.longitude} latitude={this.state.forecast.latitude}/>
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {/*<div className={'card__data__list'}>*/}
              {/*  <div className={'card__data__list__item'}><Sunrise/></div>*/}
              {/*  <div className={'card__data__list__item'}><Sunset/></div>*/}
              {/*  <div className={'card__data__list__item'}><Moonphase/></div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={'col-xs-12 col-md-6 col-lg-4'}>
            <div className={'card'}>
              {/*<div className={'card card__data'}>*/}
              {/*  <div className={'card__data__label'}>Wind direction</div>*/}
              {/*  <div className={'card__data__content'}>*/}
              {/*    <Compass value={this.state.wind}/>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForecastLayout