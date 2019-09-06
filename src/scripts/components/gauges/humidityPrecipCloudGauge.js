require('../../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

let chart;
let series1;
let series2;

class HumidityPrecipCloudGauge extends Component{

  componentDidMount() {
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    chart = am4core.create("cloud_humidity_percip", am4charts.RadarChart);

    chart.data = [{
      "category": "Precip Probability",
      "value": this.props.precip_value,
      "full": 100
    }, {
      "category": "Cloud Cover",
      "value": this.props.cloud_value,
      "full": 100
    }, {
      "category": "Humidity",
      "value": this.props.humidity_value,
      "full": 100
    }];

    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

    chart.numberFormatter.numberFormat = "#.#'%'";

    chart.colors.list = [
      am4core.color("#ffc107"),
      am4core.color("#6c757d"),
      am4core.color("#007bff"),
    ];

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
      return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

// Create series
    series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;
    series1.defaultState.transitionDuration = 5000;
    series1.hiddenState.transitionDuration = 5000;

    series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;
    series2.defaultState.transitionDuration = 5000;
    series2.hiddenState.transitionDuration = 5000;

    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.RadarCursor();

  }

  componentWillUnmount() {
    if (chart) {
      chart.dispose();
    }
  }

  render() {
    return (
      <>
        <div className={'card card__data'}>
        <div className={'card__data__labels'}>
          <div>Humidity</div>
          <div>Cloud Cover</div>
          <div>Precip probalbility</div>
        </div>
        <div className={'card__data__content'}>
          <div id="cloud_humidity_percip" style={{ width: "100%", height: "100%" }}></div>
        </div>
        </div>
      </>
    );
  }
}

export {HumidityPrecipCloudGauge}