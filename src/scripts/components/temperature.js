require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

const data = [
  {
    date: new Date(1563724800000),
    value: 79.1,
  },
  {
    date: new Date(1563728400000),
    value: 77.34,
  },
  {
    date: new Date(1563732000000),
    value: 75.34,
  },
  {
    date: new Date(1563735600000),
    value: 72.9,
  },
  {
    date: new Date(1563739200000),
    value: 70.66,
  },
  {
    date: new Date(1563742800000),
    value: 68.62,
  },
  {
    date: new Date(1563746400000),
    value: 67.08,
  },
  {
    date: new Date(1563750000000),
    value: 65.13,
  },
  {
    date: new Date(1563753600000),
    value: 64.06,
  },

  {
    date: new Date(1563757200000),
    value: 63.29,
  },

  {
    date: new Date(1563760800000),
    value: 62.51,
  },

  {
    date: new Date(1563764400000),
    value: 62.36,
  },

  {
    date: new Date(1563768000000),
    value: 62.89,
  },

  {
    date: new Date(1563771600000),
    value: 65.29,
  },

  {
    date: new Date(1563775200000),
    value: 67.4,
  },


];

const data2 = [
  {
    date: new Date(1563724800000),
    value2:79.1
  },
  {
    date: new Date(1563728400000),
    value2: 77.34
  },
  {
    date: new Date(1563732000000),
    value2: 75.34
  },
  {
    date: new Date(1563735600000),
    value2: 72.9
  },
  {
    date: new Date(1563739200000),
    value2: 70.66
  },
  {
    date: new Date(1563742800000),
    value2: 68.62
  },
  {
    date: new Date(1563746400000),
    value2: 67.08
  },
  {
    date: new Date(1563750000000),
    value2: 65.13,
  },
  {
    date: new Date(1563753600000),
    value2: 70.66
  },

  {
    date: new Date(1563757200000),
    value2: 70.66
  },

  {
    date: new Date(1563760800000),
    value2: 72.66
  },

  {
    date: new Date(1563764400000),
    value2: 60.66
  },

  {
    date: new Date(1563768000000),
    value2: 60.66
  },

  {
    date: new Date(1563771600000),
    value2: 71.66
  },

  {
    date: new Date(1563775200000),
    value2: 67.0
  },


];

class Temperature extends Component{

  componentDidMount() {
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartdiv111", am4charts.XYChart);
    chart.paddingRight = 0;
    chart.cursor = new am4charts.XYCursor();
    chart.colors.list = [
      am4core.color("#845EC2"),
      am4core.color("#D65DB1"),
    ];
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    chart.legend.labels.template.text = "[bold {color}]{name}[/]";

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 20;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;
    dateAxis.renderer.labels.template.rotation = 90;
    dateAxis.renderer.labels.template.verticalCenter = "middle";
    dateAxis.renderer.labels.template.horizontalCenter = "left";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "Temperatura ($M)";
    valueAxis.title.fontWeight = "bold";

    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.dateX = "date";
    series1.dataFields.valueY = "value";
    series1.tooltipText = "{valueY.value}";
    series1.strokeWidth = 2;
    series1.minBulletDistance = 15;
    series1.data = data;
    series1.name = "Temperatura";

    let bullet = series1.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "value2";
    series2.tooltipText = "{valueY.value}";
    series2.strokeWidth = 2;
    series2.minBulletDistance = 15;
    series2.data = data2;
    series2.name = "Temperatura odczuwalna";
    // series2.legendSettings.labelText = "Series: [bold {color}]{Temperatura odczuwalna}[/]";

    let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.strokeWidth = 2;
    bullet2.circle.radius = 4;
    bullet2.circle.fill = am4core.color("#fffCCC");

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (<div id="chartdiv111" style={{ width: "100%", height: "100%" }}></div>
    );
  }

}

export {Temperature}