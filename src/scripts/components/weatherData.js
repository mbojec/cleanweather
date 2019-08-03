require('../../resources/style/main.scss');
import React, {Component} from "react";
import Sunset from "./sunset";
import Sunrise from "./sunrise";
import Moonphase from "./moonphase";

class WeatherData extends Component{

  render() {
    const styleList = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0.8rem 1.6rem',
      height: '100%'
    };

    const styleItem = {
      width: '100%',
      flexGrow: 1
    };

    return(
      <>
        <div style={styleList}>
          <div style={styleItem}><Sunrise value={this.props.sunriseValue}/></div>
          <div style={styleItem}><Sunset value={this.props.sunsetValue}/></div>
          <div style={styleItem}><Moonphase/></div>
        </div>
      </>
    )
  }
}

export default WeatherData