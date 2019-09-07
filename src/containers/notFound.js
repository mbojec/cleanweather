import React from "react";

const NotFound = () => {
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
};

export {NotFound}