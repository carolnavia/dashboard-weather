import useApiData from "./useApiData";

function useApiCurrentWeatherData() {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  return useApiData(apiUrl);
}

export default useApiCurrentWeatherData;
