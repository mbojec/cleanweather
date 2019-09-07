import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import React, {Component} from "react";
import PropTypes from "prop-types";

class PressureGauge extends Component{

  static fontSize(){
    if(window.innerWidth > 1200){
      return 35;
    } else if(window.innerWidth < 1200 && window.innerWidth >= 992){
      return 25;
    } else if(window.innerWidth < 992 && window.innerWidth >= 768){
      return 30;
    } else {
      return 30;
    }
  }

  componentDidMount() {
    am4core.useTheme(am4themes_dark);

    let chart = am4core.create("pressure", am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(90);

    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 1300;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(89);
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.length = 5;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = 35;
    axis.renderer.minGridDistance = 100;
    axis.renderer.labels.template.adapter.add("text", function(text) {
      return `${text} hPa`;
    });

    let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 1300;
    axis2.renderer.innerRadius = 10;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = false;
    axis2.renderer.grid.template.disabled = false;

    let range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 1300;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color("#007bff");
    range0.axisFill.zIndex = -1;

    let label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = PressureGauge.fontSize();
    label.x = am4core.percent(50);
    label.y = am4core.percent(100);
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = `0 hpa`;

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(60);
    hand.radius = am4core.percent(75);
    hand.startWidth = 15;
    hand.pin.disabled = true;
    hand.value = 0;

    hand.events.on("propertychanged", function(ev) {
      range0.endValue = ev.target.value;
      axis2.invalidate();
    });

    label.text = `${this.props.value} hpa`;
    let animation = new am4core.Animation(hand, {
      property: "value",
      to: this.props.value
    }, 3000, am4core.ease.cubicOut);
    animation.start();

    this.chart = chart;
  }


  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return(
      <>
        <div className={'card card__data'}>
          <div className={'card__data__label'}>Pressure</div>
          <div className={'card__data__content'}>
            <div id="pressure" style={{ width: "100%", height: "100%" }}/>
          </div>
        </div>
      </>
    )
  }
}

PressureGauge.propTypes = {
  value: PropTypes.number,
};

export {PressureGauge}