import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
require('../../../resources/style/main.scss');

import React, {Component} from "react";

class TemperatureGauge extends Component{

  fontSize(){
    if(window.innerWidth > 1200){
      return 40;
    } else if(window.innerWidth < 1200 && window.innerWidth >= 992){
      return 25;
    } else if(window.innerWidth < 992 && window.innerWidth >= 768){
      return 35;
    } else {
      return 30;
    }
  }

  componentDidMount() {
    am4core.useTheme(am4themes_dark);

    let chart = am4core.create("temperature", am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(90);

    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = -50;
    axis.max = 50;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(89);
    axis.renderer.inside = false;
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.length = 5;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = 35;
    axis.renderer.labels.template.adapter.add("text", function(text) {
      return `${text} ${String.fromCharCode(176)} C`;
    });

    let colorSet = new am4core.ColorSet();

    let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = -50;
    axis2.max = 50;
    axis2.renderer.innerRadius = 10;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = false;
    axis2.renderer.grid.template.disabled = false;

    let range0 = axis2.axisRanges.create();
    range0.value = -50;
    range0.endValue = 50;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color("#dc3545");
    range0.axisFill.zIndex = -1;

    let label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = this.fontSize();
    label.x = am4core.percent(50);
    label.y = am4core.percent(100);
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = `0 ${String.fromCharCode(176)}C`;

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(45);
    hand.radius = am4core.percent(60);
    hand.startWidth = 10;
    hand.pin.disabled = true;
    hand.value = 0;

    hand.events.on("propertychanged", function(ev) {
      range0.endValue = ev.target.value;
      axis2.invalidate();
    });
    label.text = `${this.props.value}${String.fromCharCode(176)}C`;
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
        <div className={'card__data'}>
          <div className={'card__data__label'}>Temperature</div>
          <div className={'card__data__content'}>
            <div id="temperature" style={{ width: "100%", height: "100%" }}></div>
          </div>
        </div>
      </>
    );
  }

}

export {TemperatureGauge}