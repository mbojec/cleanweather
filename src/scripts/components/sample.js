require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

am4core.useTheme(am4themes_animated);

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

    let chart = am4core.create("chartdiv11", am4charts.XYChart);

    chart.paddingRight = 0;
    // chart.data = data;

    // chart.legend = new am4charts.Legend();
    // chart.legend.labels.template.text = "Series: [bold {color}]{name}[/]";

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // kolorowania lini osi
    // dateAxis.renderer.line.strokeOpacity = 1;
    // dateAxis.renderer.line.strokeWidth = 2;
    // dateAxis.renderer.line.stroke = am4core.color("#3787ac");

    //zmiana odleglosci kolumn
    dateAxis.renderer.minGridDistance = 20;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;

    // usuniecie etykiet wychodzacych poza obszar wykresu
    // dateAxis.renderer.minLabelPosition = 0.05;
    // dateAxis.renderer.maxLabelPosition = 0.95;

    // dateAxis.baseInterval = {
    //   "timeUnit": "second",
    //   "count": 1
    // };

    // obracanie etykiet
    dateAxis.renderer.labels.template.rotation = 90;
    dateAxis.renderer.labels.template.verticalCenter = "middle";
    dateAxis.renderer.labels.template.horizontalCenter = "left";


    // dateAxis.renderer.grid.template.location = 0;
    // dateAxis.renderer.labels.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    // dodawania znacznikow na osi
    // valueAxis.renderer.ticks.template.disabled = false;
    // valueAxis.renderer.ticks.template.strokeOpacity = 1;
    // valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
    // valueAxis.renderer.ticks.template.strokeWidth = 2;
    // valueAxis.renderer.ticks.template.length = 10;

    // dodawanie opisy dla osi
    valueAxis.title.text = "Temperatura ($M)";
    valueAxis.title.fontWeight = "bold";

    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.dateX = "date";
    series1.dataFields.valueY = "value";

    series1.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    series1.strokeWidth = 2;
    series1.minBulletDistance = 15;

    let bullet = series1.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    series1.data = data;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "value2";

    series2.tooltipText = "{valueY.value2}";
    chart.cursor = new am4charts.XYCursor();

    series2.strokeWidth = 2;
    series2.minBulletDistance = 15;

    let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.strokeWidth = 2;
    bullet2.circle.radius = 4;
    bullet2.circle.fill = am4core.color("#fffCCC");

    series2.data = data2;





    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (<div id="chartdiv11" style={{ width: "100%", height: "100%" }}></div>
    );
  }

}

export {Temperature}