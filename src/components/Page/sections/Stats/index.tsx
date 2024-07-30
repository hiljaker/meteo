import { FC } from "react";
import { Weather } from "../../../../api/forecast/types";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { printDegree } from "../../helpers/print-degree";

type StatsProps = {
  data: Weather;
  unit: "c" | "f";
};

const Field = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.purple200.main,
  borderRadius: "24px",
  padding: "16px",
}));

const Stats: FC<StatsProps> = ({ data, unit }) => {
  const determineUVIndex = (index: number): string => {
    if ([1, 2, 3].includes(index)) {
      return "Low";
    }

    if ([4, 5, 6].includes(index)) {
      return "Moderate";
    }

    if ([7, 8, 9].includes(index)) {
      return "High";
    }

    return "Very High";
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Field>
          <Typography color="white" typography="Caption1">
            UV Index
          </Typography>
          <Typography color="white" typography="Subheading1">
            {determineUVIndex(data.current.uv)}
          </Typography>
        </Field>
      </Grid>
      <Grid item xs={2}>
        <Field>
          <Typography color="white" typography="Caption1">
            Humidity
          </Typography>
          <Typography color="white" typography="Subheading1">
            {data.current.humidity}%
          </Typography>
        </Field>
      </Grid>
      <Grid item xs={2}>
        <Field>
          <Typography color="white" typography="Caption1">
            Wind
          </Typography>
          <Typography color="white" typography="Subheading1">
            {data.current.wind_kph} km/h
          </Typography>
        </Field>
      </Grid>
      <Grid item xs={2}>
        <Field>
          <Typography color="white" typography="Caption1">
            Dew Point
          </Typography>
          <Typography color="white" typography="Subheading1">
            {printDegree(
              data.current.dewpoint_c,
              data.current.dewpoint_f,
              unit
            )}
          </Typography>
        </Field>
      </Grid>
      <Grid item xs={2}>
        <Field>
          <Typography color="white" typography="Caption1">
            Pressure
          </Typography>
          <Typography color="white" typography="Subheading1">
            {data.current.pressure_mb} mb
          </Typography>
        </Field>
      </Grid>
      <Grid item xs={2}>
        <Field>
          <Typography color="white" typography="Caption1">
            Visibility
          </Typography>
          <Typography color="white" typography="Subheading1">
            {data.current.vis_km} km
          </Typography>
        </Field>
      </Grid>
    </Grid>
  );
};

export default Stats;
