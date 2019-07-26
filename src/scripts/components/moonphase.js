import React, {Component} from "react";

class Moonphase extends Component{

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
    const styleListItemIconMoon = {
      flexGrow: 2
    };


    return(
      <div style={styleContainer}>
        <div style={styleListItemLabel}>Moon phase</div>
        <div style={styleListItemIconMoon}></div>
      </div>
    )
  }
}

export default Moonphase