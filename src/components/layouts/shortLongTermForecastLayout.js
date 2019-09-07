import React, {Component} from "react";
import PropTypes from "prop-types";
import 'mapbox-gl/dist/mapbox-gl.css';
import {TemperatureChart, WindChart, HumidityPrecipCloudChart, PressureChart} from "../charts";
import {WeatherDescLongShortTermList} from "../lists";
import {compose} from "recompose";
import {withRedux} from "../../redux/wrapper";
import {withRouter} from "react-router";

class ShortLongTermForecastLayout extends Component{

  render() {
    return(
      <>
        <div className={'row--scrollable'}><WeatherDescLongShortTermList value={this.props.screenView === 'shortTerm'? this.props.hourForecast : this.props.dailyForecast } daily={this.props.screenView !== 'shortTerm'}/></div>
        <div className={'row'}>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <TemperatureChart value={this.props.screenView === 'shortTerm'? this.props.hourForecast : this.props.dailyForecast } screen={this.props.screenView}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <WindChart value={this.props.screenView === 'shortTerm'? this.props.hourForecast : this.props.dailyForecast }/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <HumidityPrecipCloudChart value={this.props.screenView === 'shortTerm'? this.props.hourForecast : this.props.dailyForecast }/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <PressureChart value={this.props.screenView === 'shortTerm'? this.props.hourForecast : this.props.dailyForecast }/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

ShortLongTermForecastLayout.propTypes = {
  screenView: PropTypes.string,
  hourForecast: PropTypes.array,
  dailyForecast: PropTypes.array
};

const ShortLongTermForecastLayoutHoc = compose(withRedux, withRouter)(ShortLongTermForecastLayout);
export {ShortLongTermForecastLayoutHoc as ShortLongTermForecastLayout}
