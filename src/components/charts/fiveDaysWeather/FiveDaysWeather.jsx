import useApiFiveDaysWeatherForescast from "../../../hooks/useApiFiveDaysWeatherForescast";
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
import { Line } from "react-chartjs-2";

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

const FiveDaysWeather = () => {
  const { data, loading, error } = useApiFiveDaysWeatherForescast();
  const dtTxtArray = data ? data?.list.map((item) => item?.dt_txt) : [];
  const tempArray = data ? data?.list.map((item) => item?.main.temp) : [];

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  let dataChart = {
    labels: dtTxtArray,
    datasets: [
      {
        label: "Temperture",
        data: tempArray,
        tension: 0.5,
        fill: false,
        borderColor: "red",
        backgroundColor: "red",
        pointRadius: 2,
        pointBorderColor: "red",
        pointBackgroundColor: "red",
      },
    ],
  };

  let optionsChart = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "#000" },
      },
    },
  };

  return <Line data={dataChart} options={optionsChart} />;
};

export default FiveDaysWeather;
