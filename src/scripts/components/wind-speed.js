require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

let label;
let hand;
let label2;
let hand2;
let chart;

class WindSpeed extends Component{

  componentDidMount() {
    am4core.useTheme(am4themes_dark);

    chart = am4core.create("chartdiv2", am4charts.GaugeChart);
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

    hand = chart.hands.push(new am4charts.ClockHand());
    hand.fill = axis.renderer.line.stroke;
    hand.stroke = axis.renderer.line.stroke;
    hand.axis = axis;
    hand.pin.radius = 10;
    hand.startWidth = 10;
    hand.value = this.props.value;

    hand2 = chart.hands.push(new am4charts.ClockHand());
    hand2.fill = axis2.renderer.line.stroke;
    hand2.stroke = axis2.renderer.line.stroke;
    hand2.axis = axis2;
    hand2.pin.radius = 5;
    hand2.startWidth = 5;
    hand2.value = this.props.value2;

    let labelList = new am4core.ListTemplate(new am4core.Label());
    labelList.template.isMeasured = false;
    labelList.template.fontSize = 15;
    labelList.template.y = am4core.percent(-5);
    labelList.template.horizontalCenter = "middle";
    //
    label = labelList.create();
    label.parent = chart.chartContainer;
    label.x = am4core.percent(3);
    label.fill = chart.colors.getIndex(0);
    label.text = "0 m/s";

    label2 = labelList.create();
    label2.parent = chart.chartContainer;
    label2.x = am4core.percent(97);
    label2.fill = chart.colors.getIndex(3);
    label2.text = "0 m/s";

  }

  componentDidUpdate(oldProps) {
    if (oldProps.value !== this.props.value) {
      label.text = `${this.props.value} m/s`;
      label2.text = `${this.props.value} m/s`;
      let animation = new am4core.Animation(hand, {
        property: "value",
        to: this.props.value
      }, 3000, am4core.ease.cubicOut).start();
      let animation2 = new am4core.Animation(hand2, {
        property: "value",
        to: this.props.value2
      }, 3000, am4core.ease.cubicOut).start();
    }
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