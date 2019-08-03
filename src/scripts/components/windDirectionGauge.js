require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

class WindDirectionGauge  extends Component{

  getDirectionString(degrees){
    if(degrees > 337 && degrees <359 || degrees >= 0 && degrees <23){
      return 'N';
    } else if (degrees > 22 && degrees <68){
      return 'NE';
    } else if (degrees > 67 && degrees <113){
      return 'E';
    } else if (degrees > 112 && degrees <158){
      return 'SE';
    } else if (degrees > 157 && degrees <203){
      return 'S';
    } else if (degrees > 202 && degrees <248){
      return 'SW';
    } else if (degrees > 247 && degrees <293){
      return 'W';
    } else if (degrees > 292 && degrees <328){
      return 'NW';
    } else {
      return 'N';
    }
  }

  componentDidMount() {

    am4core.useTheme(am4themes_dark);

    let chart = am4core.create("wind-direction", am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0;

    chart.startAngle = 0;
    chart.endAngle = 359;

    chart.data = [

      {
        "direction": "E",
      },
      {
        "direction": "SE",
      },
      {
        "direction": "S",
      },
      {
        "direction": "SW",
      },
      {
        "direction": "W",
      },
      {
        "direction": "NW",
      },
      {
        "direction": "N",
      },
      {
        "direction": "NE",
      },
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "direction";
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.radius = am4core.percent(90);

    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 359;
    axis.strictMinMax = true;
    axis.renderer.useChartAngles = false;
    axis.renderer.startAngle = -90;
    axis.renderer.endAngle = 270;
    axis.renderer.minGridDistance = 20;


    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.line.strokeWidth = 10;
    axis.renderer.line.stroke = am4core.color("#EF6F6C");
    axis.renderer.ticks.template.stroke = am4core.color("#EF6F6C");

    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.ticks.template.length = 10;

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.fill = axis.renderer.line.stroke;
    hand.stroke = axis.renderer.line.stroke;
    hand.axis = axis;
    hand.pin.disabled = true;
    hand.startWidth = 10;
    hand.endWidth = 0;
    hand.radius = am4core.percent(65);
    hand.innerRadius = am4core.percent(55);
    hand.value = 0;

    let labelList = new am4core.ListTemplate(new am4core.Label());
    labelList.template.isMeasured = false;
    labelList.template.fontSize = 35;
    labelList.template.y = am4core.percent(60);
    labelList.template.horizontalCenter = "middle";
    labelList.template.verticalCenter = "bottom";

    let label = labelList.create();
    label.parent = chart.chartContainer;
    label.x = am4core.percent(50);
    label.text = `${this.getDirectionString(0)}`;

    label.text = `${this.getDirectionString(this.props.value)}`;
    let animation = new am4core.Animation(hand, {
      property: "value",
      to: this.props.value
    }, 3000, am4core.ease.cubicOut).start();

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <>
        <div className={'card card__data'}>
          <div className={'card__data__label'}>Wind direction</div>
          <div className={'card__data__content'}>
            <div id="wind-direction" style={{ width: "100%", height: "100%" }}></div>
          </div>
        </div>
      </>
    );
  }
}

export {WindDirectionGauge}