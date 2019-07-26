require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

class PressureShortTerm extends Component{

  createData(array){
    let dataArray = [];
    for(let i = 0; i<this.props.value.length; i++){
      dataArray.push({date: (array[i].time * 1000), value: array[i].pressure})
    }
    return dataArray;
  }

  componentDidMount() {
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("pressure-short-term", am4charts.XYChart);
    chart.paddingRight = 10;
    chart.cursor = new am4charts.XYCursor();
    chart.colors.list = [
      am4core.color("#845EC2"),
    ];
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    chart.legend.labels.template.text = "[bold {color}]{name}[/]";

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 10;
    dateAxis.renderer.labels.template.rotation = 90;
    dateAxis.renderer.labels.template.verticalCenter = "middle";
    dateAxis.renderer.labels.template.horizontalCenter = "left";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = `Pressure (hPa)`;
    valueAxis.title.fontWeight = "bold";

    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.dateX = "date";
    series1.dataFields.valueY = "value";
    series1.tooltipText = "{valueY.value}";
    series1.strokeWidth = 2;
    series1.minBulletDistance = 15;
    series1.data = this.createData(this.props.value);
    series1.name = "Pressure";

    let bullet = series1.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <>
        <div className={'card__data'}>
          <div className={'card__data__label'}>Pressure</div>
          <div className={'card__data__content'}>
            <div id="pressure-short-term" style={{ width: "100%", height: "100%" }}></div>
          </div>
        </div>
      </>
    );
  }

}

export {PressureShortTerm}