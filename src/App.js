import { useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { getUserLocation } from "./helpers/getUserLocation";
import AirPollutionChart from "./components/charts/airPollution/AirPollution";
import FiveDaysWeather from "./components/charts/fiveDaysWeather/FiveDaysWeather";
import CurrentWeatherTable from "./components/tables/CurrentWeatherTable";

const Title = styled(Typography)({
  textAlign: "center",
  margin: "20px 0",
  color: "#7a7a7a",
});

const ChartContainer = styled(Box)({
  background: "#f5f5f5",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

function App() {
  useEffect(() => {
    getUserLocation();
  }, []);
  return (
    <Container>
      <Title variant="h3">Dashboard Weather</Title>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <ChartContainer>
            <AirPollutionChart />
            <Typography variant="h6">Air Pollution</Typography>
          </ChartContainer>
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartContainer>
            <FiveDaysWeather />
            <Typography variant="h6">Wind and Temperture</Typography>
          </ChartContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartContainer>
            <CurrentWeatherTable />
            <Typography variant="h6">Current Weather</Typography>
          </ChartContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
