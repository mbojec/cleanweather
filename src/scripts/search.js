require('../resources/style/main.scss');
import React, {Component} from "react";
import ReactDOM from "react-dom";

class Search extends Component{

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
    return(
      <div className={'col-xs-12 col-md-4 col-xl-3'}>
        <div className={'master'}>
          <div className={'decoration--top'}/>
          <div className={'row master__button__group'}>
            <div className={'col-xs-2 col-sm-3'}/>
            <button className={`col-xs-4 col-sm-3 master__button__group__button master__button__group__button--master ${this.state.display_selected === 'overall'? "master__button__group__button--selected": "master__button__group__button--unselected"}`} onClick={event => this.setDisplayOptionSelected('overall')}>Overall</button>
            <button className={`col-xs-4 col-sm-3 master__button__group__button master__button__group__button--detail ${this.state.display_selected === 'detail'? "master__button__group__button--selected": "master__button__group__button--unselected"}`} onClick={event => this.setDisplayOptionSelected('detail')}>Detail</button>
            <div className={'col-xs-2 col-sm-3'}/>
          </div>
          <div className={'decoration--bottom'}/>
          <h2>Search</h2>
        </div>
      </div>
    )
  }
}

export {Search}