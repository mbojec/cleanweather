require('../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

class UvGauge extends Component{

  componentDidMount() {
    am4core.useTheme(am4themes_dark);
    let chart = am4core.create("uv", am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(90);

    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 12;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(89);
    axis.renderer.inside = true;
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.length = 5;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = 35;
    axis.renderer.labels.template.adapter.add("text", function(text) {
      return `${text}`;
    });

    let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 12;
    axis2.renderer.innerRadius = 10;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = false;
    axis2.renderer.grid.template.disabled = false;

    let range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 3;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color("#28a745");
    range0.axisFill.zIndex = -1;

    let range1 = axis2.axisRanges.create();
    range1.value = 3;
    range1.endValue = 6;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = am4core.color("#ffc107");
    range1.axisFill.zIndex = -1;

    let range2 = axis2.axisRanges.create();
    range2.value = 6;
    range2.endValue = 8;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = am4core.color("#fd7e14");
    range2.axisFill.zIndex = -1;

    let range3 = axis2.axisRanges.create();
    range3.value = 8;
    range3.endValue = 11;
    range3.axisFill.fillOpacity = 1;
    range3.axisFill.fill = am4core.color("#dc3545");
    range3.axisFill.zIndex = -1;

    let range4 = axis2.axisRanges.create();
    range4.value = 11;
    range4.endValue = 12;
    range4.axisFill.fillOpacity = 1;
    range4.axisFill.fill = am4core.color("#6610f2");
    range4.axisFill.zIndex = -1;

    let label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = 45;
    label.x = am4core.percent(50);
    label.y = am4core.percent(100);
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = `0`;

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(45);
    hand.radius = am4core.percent(60);
    hand.startWidth = 10;
    hand.pin.disabled = true;
    hand.value = 0;

    label.text = `${this.props.value}`;
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
          <div className={'card__data__label'}>Uv index</div>
          <div className={'card__data__content'}>
            <div id="uv" style={{ width: "100%", height: "100%" }}></div>
          </div>
        </div>
      </>
    );
  }
}

export {UvGauge}