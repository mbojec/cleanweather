require('../resources/style/main.scss');
import React, {Component} from "react";
import ReactDOM from "react-dom";

class ShortTermForecast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display_selected: 'overall'
    }
  }

  setDisplayOptionSelected = (name) => {
    this.setState({
      display_selected: name,
    })
  };

  render() {
    return (
      <>
        <div className={'short-term__button col-xs-12'}>
          <div className={'row short-term__button__group'}>
            <div className={'col-xs-2 col-sm-3'}/>
            <button className={`col-xs-4 col-sm-3 short-term__button__group__button short-term__button__group__button--master ${this.state.display_selected === 'overall' ? "short-term__button__group__button--selected" : "short-term__button__group__button--unselected"}`} onClick={event => this.setDisplayOptionSelected('overall')}>Overall
            </button>
            <button className={`col-xs-4 col-sm-3 short-term__button__group__button short-term__button__group__button--detail ${this.state.display_selected === 'detail' ? "short-term__button__group__button--selected" : "short-term__button__group__button--unselected"}`} onClick={event => this.setDisplayOptionSelected('detail')}>Detail
            </button>
            <div className={'col-xs-2 col-sm-3'}/>
          </div>
        </div>
        <div className={'short-term__master col-xs-12 col-md-4 col-xl-3'}>
          <div className={'decoration--top'}/>
          <div className={'row'}>
            <div className={'short-term__location col-xs-12'}>
              <div>Master</div>
            </div>
          </div>
          <div className={'decoration--bottom'}/>
        </div>
        <div className={'col-xs-12 col-md-7 col-xl-7'}>
          <h2>Detail</h2>
        </div>
      </>
    )
  }
}

export {ShortTermForecast}