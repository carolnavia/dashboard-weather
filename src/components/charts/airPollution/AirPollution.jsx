import React from "react";
import useApiPollution from "hooks/useApiPollution";
import { transformData, getValuesByKey } from "helpers/transformData";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { datesChartPollution } from "helpers/datesPollution";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AirPollutionChart = () => {
  const { data, loading, error } = useApiPollution();
  const airDataTransformed = transformData(data);

  const nh3 = getValuesByKey(airDataTransformed, "nh3");
  const no = getValuesByKey(airDataTransformed, "no");
  const no2 = getValuesByKey(airDataTransformed, "no2");
  const o3 = getValuesByKey(airDataTransformed, "o3");

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let dataChart = {
    labels: datesChartPollution,
    datasets: [
      {
        label: "NH3",
        data: nh3,
        tension: 0.5,
        fill: false,
        borderColor: "yellow",
        backgroundColor: "yellow",
        pointRadius: 2,
        pointBorderColor: "yellow",
        pointBackgroundColor: "yellow",
      },
      {
        label: "NO",
        data: no,
        tension: 0.5,
        fill: false,
        borderColor: "green",
        backgroundColor: "green",
        pointRadius: 2,
        pointBorderColor: "green",
        pointBackgroundColor: "green",
      },
      {
        label: "NO2",
        data: no2,
        tension: 0.5,
        fill: false,
        borderColor: "blue",
        backgroundColor: "blue",
        pointRadius: 2,
        pointBorderColor: "blue",
        pointBackgroundColor: "blue",
      },
      {
        label: "O3",
        data: o3,
        tension: 0.5,
        fill: false,
        borderColor: "brown",
        backgroundColor: "brown",
        pointRadius: 2,
        pointBorderColor: "brown",
        pointBackgroundColor: "brown",
      },
    ],
  };

  let optionsChart = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "#000000" },
      },
    },
  };

  return <Line data={dataChart} options={optionsChart} />;
};

export default AirPollutionChart;
