require('../../resources/style/main.scss');
import React, {Component} from "react";
import {MainMap} from "../components/map";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Navigation} from "../components/navigation";

class Main extends Component{

  render() {
    return(
      <div>
        <Navigation/>
        <div className={'main'}>
          <div className={'row'}>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}></div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}></div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}></div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}></div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}></div>
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
              <div className={'card'}></div>
            </div>
            <div className={'col-xs-12 col-md-6 col-lg-4'}>
              <div className={'card'}>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {Main}