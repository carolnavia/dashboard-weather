import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { getUserLocation } from "./helpers/getUserLocation";
import AirPollutionChart from "./components/charts/airPollution/AirPollution";
import FiveDaysWeather from "./components/charts/fiveDaysWeather/FiveDaysWeather";

function App() {
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div>
      <h1 className="bg-info text-center font-monospace fw-bold lh-base">
        Wheather App
      </h1>
      <div>
        <p className="m-2">
          <b>Air Pollution Chart </b>
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2  d-flex justify-content-center "
          style={{ width: "60%", height: "20%" }}
        >
          <AirPollutionChart />
        </div>
      </div>
      <hr className="mt-3 mb-2" />
      <div>
        <p className="m-2">
          <b>Lluvia y Temperatura </b>
        </p>
        <div
          className="bg-light mx-auto px-2 border border-2 d-flex justify-content-center "
          style={{ width: "60%", height: "20%" }}
        >
          {" "}
          <FiveDaysWeather />
        </div>
      </div>
      <hr className="mt-3 mb-2" />
      <div>
        <p className="m-2">
          <b>Ejemplo #3: </b>Gráfico circular
        </p>
        <div
          className="bg-light mx-auto border border-2 border-primary"
          style={{ width: "450px", height: "250px" }}
        >
          <div
            style={{ width: "100%", height: "100%", padding: "10px 0" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
