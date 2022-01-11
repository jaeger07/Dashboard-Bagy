import React from 'react';
import ReactChart from "react-apexcharts";


const Chart = () => {

  const meses = [{
    name: ' Esse mês',
    type: 'line',
    data: [100, 55, 31, 47, 100, 43, 61, 120],
    color: '#E91E63'
  }, {
    name: ' Mês passado',
    type: 'line',
    data: [55, 45, 60, 54, 37, 52, 44, 65],
    color: '#cecece'
  }]
  const grafico = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
        markers:{
          width:30,
          height:5
        }
    },
    labels: ['1', '5', '9', '13', '17', '21', '25', '30'],
    markers: {
          size:1,

    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return "R$ " + y.toFixed(0);
          }
          return y;
        }
      }
    }
  }

  return (
    <div className="chart">
      <ReactChart series={meses} options={grafico} type="line" height={350} />

    </div>
  );
}

export default Chart;