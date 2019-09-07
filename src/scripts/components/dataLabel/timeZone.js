import React, {Component} from "react";
import PropTypes from "prop-types";

class TimeZone extends Component{

  render() {

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
        <div style={styleListItemLabel}>Time Zone</div>
        <div style={styleListItemIcon}/>
        <div style={styleListItemData}>{this.props.value}</div>
      </div>
    )
  }
}

TimeZone.propTypes = {
  value: PropTypes.string,
};

export {TimeZone}