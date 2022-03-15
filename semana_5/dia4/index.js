/**
 * chart de tipo bar
 */
 const contenedorBarChart = document
 .querySelector("#bar-chart")
 .getContext("2d");

const barChart = new Chart(contenedorBarChart, {
 type: "bar",
 data: {
   labels: [
     "Lunes",
     "Martes",
     "Miercoles",
     "Jueves",
     "Viernes",
     "Sabado",
     "Domingo",
   ],
   datasets: [
     {
       label: "Numero de usuarios por dia",
       data: [20, 40, 10, 100, 50, 75, 200],
       borderWidth: 3,
       borderColor: "#f01",
       backgroundColor: [
        "#900C3F",
        "#FFC300",
        "#581845",
        "#FF2533",
        "#F89533",
        "#081433",
       ],
     },
   ],
 },
});


const containerDoughnutChart = document
.querySelector ("#doughnut-chart")
.getContext ("2d");

const dataForChart = {
    labels: ["Computadoras", "Celulares", "Refrigeradoras", "Parlantes"],
    datasets: [
        {
            label: "PRODUCTOS ELECTRONICOS",
            data: [100, 230, 550, 1500],
            backgroundColor: [
                "#900C3F",
                "#FFC300",
                "#581845",
                "#FF2533",
            ],
        },
    ],
};
const config = {
    type: "doughnut",
    data: dataForChart,
}
const donutChart = new Chart(containerDoughnutChart, config);


const containerLineChart = document.querySelector ("#lineal-chart")
const configLineal = {
    type: "line",
    data: dataForChart,
}
const lineChart = new Chart(containerLineChart, configLineal);


const containerBubbleChart = document.querySelector("#bubble-chart").getContext("2d");
// he tomado a dataForCharty estoy accediendo a la propiedad data y cambio su valor
dataForChart.datasets[0].data = [
  {
    x: 20,
    y: 30,
    r: 15,
  },
  {
    x: 40,
    y: 10,
    r: 10,
  },
];
const configBubble = {
  type: "bubble",
  data: dataForChart,
};
const bubbleChart = new Chart(containerBubbleChart, configBubble);

//Polar Chart
const containerPolarChart = document
  .querySelector("#polar-chart")
  .getContext("2d");

  dataForChart.datasets[0].data =  [100, 230, 550, 1500];

const configPolar = {
    type: "polarArea",
    data: dataForChart,
    };
    
    const polarChart = new Chart(containerPolarChart, configPolar);

  //Radar chart
  const containerRadarChart = document
  .querySelector("#radar-chart")
  .getContext("2d");

  dataForChart.datasets[0].data =  [100, 230, 550, 1500];
const configRadar = {
    type: "radar",
    data: dataForChart,
    };
    const radarChart = new Chart(containerRadarChart,  configRadar);

    //scatter chart
    const containerScatterChart = document
    .querySelector("#scatter-chart")
    .getContext("2d");
  
  dataForChart.datasets[0].data = [
    {
      x: -10,
      y: 0,
    },
    {
      x: 0,
      y: 10,
    },
    {
      x: 10,
      y: 5,
    },
    {
      x: 0.5,
      y: 5.5,
    },
  ];
  
  const configScatter = {
    type: "scatter",
    data: dataForChart,
  };
  
  const scatterChart = new Chart(containerScatterChart, configScatter);
