require('../resources/style/main.scss');
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Navigation} from './navigation'
import {Master} from './master'

class App extends Component {render() {
  return (
    <div className={'main'}>
      <div className={'row'}>
        <div className={'col-xs-12 col-md-1'}>
          <Navigation/>
        </div>
        <div className={'col-xs-12 col-md-4 col-xl-3'}>
          <Master/>
        </div>
      </div>
    </div>
  )}}

ReactDOM.render(<App/>, document.getElementById("app"));