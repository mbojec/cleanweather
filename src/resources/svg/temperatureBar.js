require('../style/main.scss');
import React from "react";

const TemperatureBar = () => (
  <svg width={154} height={154} className={'temperature__graph'}>

    <path className={'path'}
      d="M141.707 114.945C128.677 137.117 104.577 152 77 152c-41.421 0-75-33.579-75-75S35.579 2 77 2s75 33.579 75 75"
      stroke="#007BFF"
      strokeWidth={3.75}
      fill="none"
      fillRule="evenodd"
      strokeDasharray="450 450"
      strokeLinecap="round"
    />
  </svg>
);

export {TemperatureBar}
