import {connect} from "react-redux";

require('../../../resources/style/main.scss');
import React, {Component} from "react";
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
        <div className={'row--scrollable'}><WeatherDescLongShortTermList value={this.props.displayForecast} daily={this.props.screenView !== 'shortTerm'}/></div>
        <div className={'row'}>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <TemperatureChart value={this.props.displayForecast} screen={this.props.screenView}/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <WindChart value={this.props.displayForecast }/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <HumidityPrecipCloudChart value={this.props.displayForecast }/>
            </div>
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <div className={'card--large'}>
              <PressureChart value={this.props.displayForecast }/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     forecast: state.forecast.displayForecast,
//     screenView: state.navigation.stateView,
//   }
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddForecast: (forecast) => dispatch({type: 'ADD_FORECAST', value: forecast}),
//     onAddQueryPosition: (position) => dispatch({type: 'ADD_POSITION', value: position}),
//   }
// };

const ShortLongTermForecastLayoutHoc = compose(withRedux, withRouter)(ShortLongTermForecastLayout);
export {ShortLongTermForecastLayoutHoc as ShortLongTermForecastLayout}

// export default connect(mapStateToProps, mapDispatchToProps) (ShortLongTermForecastLayout)