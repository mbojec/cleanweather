require('../../resources/style/main.scss');
import React, {Component} from "react";
import {Pie} from 'react-chartjs-2';

const data = {
  labels: [
    '',
    'Clouds',
  ],
  datasets: [{
    data: [20, 80],
    backgroundColor: [
      'transparent',
      '000000',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
    ]
  }]
};

class CloudCover extends Component{

  render() {
    return (
      <Pie data={data} options={{ maintainAspectRatio: false }} />
    );
  }

}

export {CloudCover}