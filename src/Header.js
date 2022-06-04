import React from "react";
import Chart from "react-apexcharts";

function Header() {
  const option = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }
  const series = [{
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }];

  const series2 = [44, 55, 41, 17, 15];
  const option2 = {
    chart: {
      type: 'donut',
    },
    labels:["dsfa","fasdf","adf","adsf","dasf"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        },
        xaxis: {
          categories: ["1991", "1992", "1993", "1994", "1995"]
        }
      }
    }]
  }


  return (
    <>
      <div>Header</div>
      <Chart options={option} series={series} type="bar" width={500} height={320} />
      <br></br>
      <Chart options={option2} series={series2} type="donut" width={500} height={320}/>
    </>
  );
}

export default Header;
