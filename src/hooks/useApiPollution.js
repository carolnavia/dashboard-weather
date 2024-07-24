import { useState, useEffect } from "react";
import { datesPollutionArray } from "../helpers/datesPollution";

function useApiPollution() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = localStorage.getItem("userLocation");
  const locationParsed = JSON.parse(location);
  const lon = locationParsed.longitude;
  const lat = locationParsed.latitude;

  const fetchData = async (lon, lat) => {
    try {
      const requests = datesPollutionArray.flatMap(({ start, end }) =>
        fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${process.env.REACT_APP_API_KEY}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
      );
      const results = await Promise.all(requests);
      setData(results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(lon, lat);
  }, [lon, lat]);

  return { data, loading, error };
}

export default useApiPollution;
