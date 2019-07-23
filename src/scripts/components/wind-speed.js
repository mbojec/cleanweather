require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";


class WindSpeed extends Component{

  componentDidMount() {
    am4core.useTheme(am4themes_dark);

    let chart = am4core.create("chartdiv2", am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0;

    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 25;
    axis.strictMinMax = true;
    axis.renderer.inside = true;
    //axis.renderer.ticks.template.inside = true;
    //axis.stroke = chart.colors.getIndex(3);
    axis.renderer.radius = am4core.percent(97);
    //axis.renderer.radius = 80;

    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.line.strokeWidth = 5;
    axis.renderer.line.stroke = chart.colors.getIndex(0);
    axis.renderer.ticks.template.stroke = chart.colors.getIndex(0);
    axis.renderer.labels.template.radius = 35;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.ticks.template.length = 10;
    axis.hiddenState.properties.opacity = 1;
    axis.hiddenState.properties.visible = true;
    axis.setStateOnChildren = true;
    axis.renderer.hiddenState.properties.endAngle = 180;

    let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 50;
    axis2.strictMinMax = true;

    axis2.renderer.line.strokeOpacity = 1;
    axis2.renderer.line.strokeWidth = 5;
    axis2.renderer.line.stroke = chart.colors.getIndex(3);
    axis2.renderer.ticks.template.stroke = chart.colors.getIndex(3);

    axis2.renderer.ticks.template.strokeOpacity = 1;
    axis2.renderer.grid.template.disabled = true;
    axis2.renderer.ticks.template.length = 10;
    axis2.hiddenState.properties.opacity = 1;
    axis2.hiddenState.properties.visible = true;
    axis2.setStateOnChildren = true;
    axis2.renderer.hiddenState.properties.endAngle = 180;

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.fill = axis.renderer.line.stroke;
    hand.stroke = axis.renderer.line.stroke;
    hand.axis = axis;
    hand.pin.radius = 10;
    hand.startWidth = 10;
    hand.value = 5;

    let hand2 = chart.hands.push(new am4charts.ClockHand());
    hand2.fill = axis2.renderer.line.stroke;
    hand2.stroke = axis2.renderer.line.stroke;
    hand2.axis = axis2;
    hand2.pin.radius = 5;
    hand2.startWidth = 5;
    hand2.value = 20;
    //
    // setInterval(function() {
    //   hand.showValue(Math.random() * 16, 1000, am4core.ease.cubicOut);
    //   label.text = Math.round(hand.value).toString();
    //   hand2.showValue(Math.random() * 16, 1000, am4core.ease.cubicOut);
    //   label2.text = Math.round(hand2.value).toString();
    // }, 2000);

    let legend = new am4charts.Legend();
    legend.isMeasured = false;
    legend.y = am4core.percent(100);
    legend.x = am4core.percent(35);
    legend.verticalCenter = "bottom";
    legend.horizontalCenter = 'middle';
    legend.fontSize = 10;
    legend.parent = chart.chartContainer;
    legend.data = [{
      "name": "Wind speed",
      "fill": chart.colors.getIndex(0)
    }];

    let legend2 = new am4charts.Legend();
    legend2.isMeasured = false;
    legend2.y = am4core.percent(100);
    legend2.x = am4core.percent(65);
    legend2.verticalCenter = "bottom";
    legend2.horizontalCenter = 'middle';
    legend2.fontSize = 10;
    legend2.parent = chart.chartContainer;
    legend2.data = [{
      "name": "Wind gust",
      "fill": chart.colors.getIndex(3)
    }];

    legend.itemContainers.template.events.on("hit", function(ev) {
      let index = ev.target.dataItem.index;

      if (!ev.target.isActive) {
        chart.hands.getIndex(index).hide();
        chart.xAxes.getIndex(index).hide();
        labelList.getIndex(index).hide();
      }
      else {
        chart.hands.getIndex(index).show();
        chart.xAxes.getIndex(index).show();
        labelList.getIndex(index).show();
      }
    });

    legend2.itemContainers.template.events.on("hit", function(ev) {
      let index = ev.target.dataItem.index;

      if (!ev.target.isActive) {
        chart.hands.getIndex(index).hide();
        chart.xAxes.getIndex(index).hide();
        labelList.getIndex(index).hide();
      }
      else {
        chart.hands.getIndex(index).show();
        chart.xAxes.getIndex(index).show();
        labelList.getIndex(index).show();
      }
    });

    let labelList = new am4core.ListTemplate(new am4core.Label());
    labelList.template.isMeasured = false;
    labelList.template.background.strokeWidth = 2;
    labelList.template.fontSize = 15;
    labelList.template.padding(10, 15, 10, 15);
    labelList.template.y = am4core.percent(50);
    labelList.template.horizontalCenter = "middle";
    //
    let label = labelList.create();
    label.parent = chart.chartContainer;
    label.x = am4core.percent(37);
    label.background.stroke = chart.colors.getIndex(0);
    label.fill = chart.colors.getIndex(0);
    label.text = "0 m/s";

    let label2 = labelList.create();
    label2.parent = chart.chartContainer;
    label2.x = am4core.percent(63);
    label2.background.stroke = chart.colors.getIndex(3);
    label2.fill = chart.colors.getIndex(3);
    label2.text = "0 m/s";

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (<div id="chartdiv2" style={{ width: "100%", height: "100%" }}></div>
    );
  }

}

export {WindSpeed}