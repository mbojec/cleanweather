require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

class Compass  extends Component{

  getDirectionString(degrees){
    // switch(degrees) {
    //   case degrees > 337 && degrees <359:
    //     return 'N';
    //   case degrees >= 0 && degrees <23:
    //     return 'N';
    //   case degrees > 22 && degrees <68:
    //     return 'NE';
    //   case degrees > 67 && degrees <113:
    //     return 'E';
    //   case degrees > 112 && degrees <158:
    //     return 'SE';
    //   case degrees > 157 && degrees <203:
    //     return 'S';
    //   case degrees > 202 && degrees <248:
    //     return 'SW';
    //   case degrees > 247 && degrees <293:
    //     return 'W';
    //   case degrees > 292 && degrees <328:
    //     return 'NW';
    //   default:
    //     return null;
    // }
    if(degrees > 337 && degrees <359 || degrees >= 0 && degrees <23){
      return 'N';
    }
  }

  componentDidMount() {
    am4core.useTheme(am4themes_dark);

    let chart = am4core.create("chartdiv5", am4charts.GaugeChart);
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
    hand.value = 45;

    let labelList = new am4core.ListTemplate(new am4core.Label());
    labelList.template.isMeasured = false;
    labelList.template.fontSize = 35;
    labelList.template.y = am4core.percent(60);
    labelList.template.horizontalCenter = "middle";
    labelList.template.verticalCenter = "bottom";

    let label = labelList.create();
    label.parent = chart.chartContainer;
    label.x = am4core.percent(50);
    label.text = `${this.getDirectionString(22)}`;

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (<div id="chartdiv5" style={{ width: "100%", height: "100%" }}></div>
    );
  }
}

export {Compass}