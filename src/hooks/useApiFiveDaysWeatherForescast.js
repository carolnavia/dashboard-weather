import useApiData from "./useApiData";

function useApiFiveDaysWeatherForecast() {
  const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?units=metric";
  return useApiData(apiUrl);
}

export default useApiFiveDaysWeatherForecast;
