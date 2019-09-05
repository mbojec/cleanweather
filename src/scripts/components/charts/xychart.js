require('../../../resources/style/main.scss');
import React, {Component} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

class XYChart extends Component{

  createSeries(){
    let array = [];
    if(this.props.columnSeries > 0){
      for(let i =0; i < this.props.columnSeries; i++ ){
        let columnSerie = new am4charts.ColumnSeries();
        columnSerie.dataFields.dateX = "date";
        columnSerie.dataFields.valueY = "value";
        columnSerie.tooltipText = "[#fff font-size: 15px]{name}: [#fff font-size: 15px]{valueY.value} [#fff font-size: 15px]{unit}";
        columnSerie.strokeWidth = 2;
        columnSerie.data = this.props.columnSeriesArray[i].data;
        columnSerie.name = this.props.columnSeriesArray[i].name;
        columnSerie.columns.template.propertyFields.fillOpacity = "fillOpacity";
        columnSerie.tooltip.label.textAlign = "middle";
        array.push(columnSerie);
      }
    }

    if(this.props.lineSeries > 0){
      for(let i =0; i < this.props.lineSeries; i++ ){
        let lineSerie = new am4charts.LineSeries();
        lineSerie.dataFields.dateX = "date";
        lineSerie.dataFields.valueY = "value";
        lineSerie.tooltipText =  "[#fff font-size: 15px]{name}: [#fff font-size: 15px]{valueY.value} [#fff font-size: 15px]{unit}";
        lineSerie.strokeWidth = 2;
        lineSerie.minBulletDistance = 15;
        lineSerie.data = this.props.lineSeriesArray[i].data;
        lineSerie.name = this.props.lineSeriesArray[i].name;

        let bullet = lineSerie.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = am4core.color("#fff");
        array.push(lineSerie);
      }
    }

    return array;
  }

  componentDidMount() {
    am4core.useTheme(am4themes_dark);

    let seriesArray = this.createSeries();
    let chart = am4core.create(this.props.divId, am4charts.XYChart);
    chart.paddingRight = 10;
    chart.cursor = new am4charts.XYCursor();

    let colorList = [];
    for(let i =0; i < this.props.colorArray.length;i++ ){
      colorList.push(am4core.color(this.props.colorArray[i]))
    }
    chart.colors.list  = colorList;

    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    chart.legend.labels.template.text = "[bold {color}]{name}[/]";

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 20;
    dateAxis.renderer.labels.template.rotation = 90;
    dateAxis.renderer.labels.template.verticalCenter = "middle";
    dateAxis.renderer.labels.template.horizontalCenter = "left";

    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    chart.legend.labels.template.text = "[bold {color}]{name}[/]";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = this.props.valueAxisDesc;
    valueAxis.title.fontWeight = "bold";
    if(this.props.valueAxisMin !== undefined){
      valueAxis.min = this.props.valueAxisMin;
    }
    if(this.props.valueAxisMax !== undefined){
      valueAxis.max = this.props.valueAxisMax;
    }

    for(let i =0; i < seriesArray.length; i++){
      chart.series.push(seriesArray[i]);
    }
    this.chart = chart;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps !== this.props){
      let updateSeriesArray = this.createSeries();
      this.chart.series.clear();
      let colorList  = [];
      for(let i =0; i < this.props.colorArray.length;i++ ){
        colorList.push(am4core.color(this.props.colorArray[i]))
      }
      this.chart.colors.list  = colorList;
      for(let i =0; i < updateSeriesArray.length; i++){
        this.chart.series.push(updateSeriesArray[i]);
      }
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return(
      <div id={this.props.divId} style={{ width: "100%", height: "100%" }}></div>
    )
  }
}

export {XYChart}