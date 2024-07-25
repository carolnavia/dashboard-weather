import useApiCurrentWeatherData from "hooks/useApiCurrentWeatherData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { flattenObject } from "helpers/flattedObject";

import IconButton from "@mui/material/IconButton";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const CurrentWeatherTable = () => {
  const { data, loading, error } = useApiCurrentWeatherData();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const rows = flattenObject(data);
  const columns = Object.keys(rows).map((key) => [
    key,
    key.replace(/\./g, " ").replace(/_/g, " ").toUpperCase(),
  ]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Icon</TableCell>
            <TableCell align="left">Parameter</TableCell>
            <TableCell align="left">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {columns.map(([key, name]) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <IconButton color="error">
                  <WbSunnyOutlinedIcon />
                </IconButton>
              </TableCell>
              <TableCell align="left">{name}</TableCell>
              <TableCell align="left">
                {key === "weather" ? rows.weather[0].description : rows[key]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrentWeatherTable;
