import { useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { getUserLocation } from "./helpers/getUserLocation";
import AirPollutionChart from "./components/charts/airPollution/AirPollution";
import FiveDaysWeather from "./components/charts/fiveDaysWeather/FiveDaysWeather";
import CurrentWeatherTable from "./components/tables/CurrentWeatherTable";

const themeColors = {
  primary: "#263238",
  secondary: "#ffffff",
  accent: "#FF6D00",
  textPrimary: "#000000",
};

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "20px 0",
  color: themeColors.accent,
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  background: themeColors.secondary,
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  color: themeColors.textPrimary,
}));

function App() {
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <Container sx={{ backgroundColor: themeColors.primary }}>
      <Title variant="h3">Dashboard Weather</Title>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <ChartContainer>
            <Typography variant="h6">Air Pollution</Typography>
            <AirPollutionChart />
          </ChartContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartContainer>
            <Typography variant="h6">Wind and Temperature</Typography>
            <FiveDaysWeather />
          </ChartContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartContainer>
            <Typography variant="h6">Current Weather</Typography>
            <CurrentWeatherTable />
          </ChartContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
