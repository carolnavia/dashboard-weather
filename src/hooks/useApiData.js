import { useState, useEffect } from "react";

function useApiData(apiUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = localStorage.getItem("userLocation");
  const locationParsed = JSON.parse(location);
  const lon = locationParsed.longitude;
  const lat = locationParsed.latitude;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${apiUrl}&lon=${lon}&lat=${lat}&appid=${process.env.REACT_APP_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
}

export default useApiData;
