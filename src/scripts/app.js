require('../resources/style/main.scss');
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Navigation} from './navigation'

class App extends Component {render() {
  return (
    <div className={'main'}>
      <div className={'row'}>
        <div className={'col-xs-12 col-md-2 col-lg-1'}>
          <Navigation/>
        </div>
      </div>
    </div>
  )}}

ReactDOM.render(<App/>, document.getElementById("app"));