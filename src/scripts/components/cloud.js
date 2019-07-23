import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import React, {Component} from "react";

class Cloud extends Component{

  componentDidMount() {
    am4core.useTheme(am4themes_dark);

    let chart = am4core.create("chartdiv", am4charts.SlicedChart);
    chart.tooltip.align.anchor('top');
    chart.data = [
      {
        "name": "Clear Sky",
        "value": 20,
        "color": am4core.color("#FFFFFF")
      },
      {
        "name": "Cloud Cover",
        "value": 80,
        "color": am4core.color("#454545")
      }
    ];

    let cloud = "M72.167 78.536H56.274C26.85 78.536 3 102.369 3 131.768 3 161.168 26.851 185 56.274 185H158.06c.56 0 1.12-.009 1.676-.026a92.9 92.9 0 002.193.026C212.226 185 253 144.258 253 94S212.226 3 161.929 3c-45.022 0-82.414 32.644-89.762 75.536z";

    let series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";



    series.slicesContainer.background.fill = am4core.color("#676767");
    series.slicesContainer.background.fillOpacity = 0.2;


    series.maskSprite.path = cloud;
    series.labelsContainer.opacity = 0;
    series.labelsContainer.width = am4core.percent(80);
    series.slices.template.propertyFields.fill = "color";
    series.slices.template.propertyFields.stroke = "color";
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (<div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>
    );
  }

}

export {Cloud}