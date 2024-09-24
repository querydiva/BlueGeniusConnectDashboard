

  
  
 
  const DocksUtilzationPieChart = {
    data: {
      labels: ["Occupied Bays", "Fault Docks", "Available Docks"],
      datasets: [
        {
          label: "Utilization",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["darkorange", "#2a84e9", "lightgreen"],
          borderWidth: 0,
          data: [60, 40, 20],
        },
      ],
    },
    options: {
      cutoutPercentage: 70,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      scales: {
        yAxes: {
          display: 0,
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
  
        xAxes: {
          display: 0,
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  };

  const DashboardPieChart = {
    data: {
      labels: ["Occupied Docks", "Available Docks"],
      datasets: [
        {
          label: "Utilization",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["darkorange", "#2a84e9"],
          borderWidth: 0,
          data: [30,70],
        },
      ],
    },
    options: {
      cutoutPercentage: 70,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      scales: {
        yAxes: {
          display: 0,
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
  
        xAxes: {
          display: 0,
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  };
  
  module.exports = {
    DocksUtilzationPieChart , DashboardPieChart// in src/views/Charts.js
  };
  