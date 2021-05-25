var options = {
  chart: {
    height: 280,
    type: "area"
  },
  stroke: {
    show: true,
    width: 1,      
},
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [5, 15, 10, 15, 20],
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    },
  },
  xaxis: {
    categories: [
      "1 Apr",
      "7 Apr",  
      "14 Apr",
      "21 Apr",
      "28 Apr",
    ]
  },
  yaxis: {
    show: true,
    tickAmount: 5,
    min: 5,
    max : 30,
    labels: {
      formatter: function(val) {
        return val+('%');
      }
    },
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
