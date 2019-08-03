require('../../resources/style/main.scss');
import React, {Component} from "react";
import ReactDOM from "react-dom";

class NotFound extends Component{

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return(
      <div style={style} className={'main'}>
        <div className={'not-found'}>Page not found</div>
      </div>
    )
  }
}

export {NotFound}