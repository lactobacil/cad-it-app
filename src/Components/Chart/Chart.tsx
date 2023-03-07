import React from "react";
import './Chart.css';
import Chart from "react-apexcharts";
import { schemaDay, schemaHour } from "./Schema";

type Props = {
    Currency: number;
    Country: string;
}

const Graph: React.FC<Props> = ({Currency, Country}) => {
  const daySize = 7;
  const hourSize = 24;

  const [stateDay] = React.useState(schemaDay);
  const [stateHour] = React.useState(schemaHour);

  const chartData = {
    dataDay: [
      {
        name: "series-1",
        data: [0, ], 
      }
    ],
    dataHour: [
      {
        name: "series-1",
        data: [0, ], 
      }
    ]
  }

  console.log(Currency);

  const renderValuesDay = (Currency: number) => {
    for (let i = 0; i < daySize ; i++) {
      chartData.dataDay[0].data.push(Currency + Math.floor(Math.random() * Currency));
    }
    chartData.dataDay[0].data.shift();
  } 

  const renderValuesHour = (Currency: number) => {
    for (let i = 0; i < hourSize ; i++) {
      chartData.dataHour[0].data.push(Currency + Math.floor(Math.random() * Currency));
    }
    chartData.dataHour[0].data.shift();
  } 


  renderValuesDay(Currency);
  renderValuesHour(Currency);

  return (
    <div className="Chart">

        <div className="ChartBox">
            <div className="chartText" color="white"> {Country} Currency </div>
            <div className="chartDay">
              <Chart options={stateDay.options} series={chartData.dataDay} type="line" width="600" height="200" />
            </div>
            <div className="chartHour">
              <Chart options={stateHour.options} series={chartData.dataHour} type="line" width="600" height="200" />
            </div>
        </div>
    </div>
  )
}

export default Graph;