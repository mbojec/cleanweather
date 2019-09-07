import PropTypes from "prop-types";
require('../../../resources/style/main.scss');
import React, {Component} from "react";

class Sunrise extends Component{



  render() {
    let date = new Date(this.props.value);

    const styleContainer={
      display: 'flex',
      flexWrap: 'nowrap',
      height: '100%'
    };
    const styleListItemLabel = {
      flexGrow: 1,
      fontSize: '24px',
      color: '#C7C7C7',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    };
    const styleListItemIcon = {
      flexGrow: 1
    };
    const styleListItemData = {
      ...styleListItemLabel,
      color: 'white',
      justifyContent: 'flex-end',

    };

    return(
      <div style={styleContainer}>
        <div style={styleListItemLabel}>Sunrise</div>
        <div style={styleListItemIcon}/>
        <div style={styleListItemData}>{`${date.getHours()<10? '0'+date.getHours():date.getHours()}:${date.getMinutes() < 10? '0'+date.getMinutes():date.getMinutes()}`}</div>
      </div>
    )
  }
}

Sunrise.propTypes = {
  value: PropTypes.number
};

export {Sunrise}