require('../../resources/style/main.scss');
import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Ciśnienie',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1024, 1100, 1012, 1019, 1015, 1021, 1080]
    },
    {
      label: 'Wilgotnosc',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,19,0.4)',
      borderColor: 'rgba(75,192,19,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,19,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,19,1)',
      pointHoverBorderColor: 'rgba(220,220,22,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [24, 10, 12, 19, 15, 21, 10]
    },
  ]
};

class Pressure extends Component{

  render() {
    return (
      <Line data={data} options={{ maintainAspectRatio: false }} />
    );
  }

}

export {Pressure}