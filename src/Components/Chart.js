import React from 'react'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import "./Chart.css";
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'grey'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Absent',
      'Present',
      'Not marked'
  ], 
};
 const Chart = () => {
  return (
    <div className='chart' style={{width:'90%', height:'90%', marginInline:'2em', marginTop:'2em'}}>
    <Doughnut data={data}/>
    </div>
    
  )
}

export default Chart;




// import React, { useRef, useLayoutEffect } from 'react';

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

// function Chart(props)
// {


// var chart = am4core.create("chartdiv", am4charts.PieChart);

// // Add data
// chart.data = [{                   
//   "attendance": "present",
//   "value": 501.9,
  
// }, {
//   "attendance": "absent",
//   "value": 301.9
// }, {
//   "attendance": "not taken",
//   "value": 201.1
// }];

// // Add and configure Series
// var pieSeries = chart.series.push(new am4charts.PieSeries());
// pieSeries.dataFields.value = "value";
// pieSeries.dataFields.category = "attendance";
// pieSeries.labels.template.disabled = true;
// pieSeries.ticks.template.disabled = true;

// chart.legend = new am4charts.Legend();
// chart.legend.position = "right";

// chart.innerRadius = am4core.percent(60);

// var label = pieSeries.createChild(am4core.Label);
// label.text = "${values.value.sum}";
// label.horizontalCenter = "middle";
// label.verticalCenter = "middle";
// label.fontSize = 30;

// // pieSeries.colors.list = [
// //   am4core.color("#845EC2"),
// //   am4core.color("#D65DB1"),
// //   am4core.color("#FF6F91"),
  
// // ];

// return (
// <div id="chart-div" style={{ width: "100%", height: "500px" }}></div>
// );
// }
// export default Chart;