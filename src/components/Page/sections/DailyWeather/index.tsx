import { FC } from "react";
import { Weather } from "../../../../api/forecast/types";
import { Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { printDegree } from "../../helpers/print-degree";
import { WaterDrop } from "@mui/icons-material";
import { format } from "date-fns";

type DailyWeatherProps = {
  data: Weather;
  unit: "c" | "f";
};

const Image = styled("img")(() => ({}));

const DailyWeather: FC<DailyWeatherProps> = ({ data, unit }) => {
  const forecasts = data?.forecast.forecastday;

  return (
    <Stack
      bgcolor="purple200.main"
      borderRadius="24px"
      divider={<Divider />}
      mb={3}
    >
      <Typography textAlign="center" color="white" p={2}>
        Daily weather
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="space-evenly" p={2}>
        {forecasts.map((forecast) => (
          <Stack alignItems="center" spacing={0.5}>
            <Typography color="white">
              {format(new Date(forecast.date), "EEEE")}
            </Typography>
            <Image
              src={forecast.day.condition.icon}
              alt={forecast.day.condition.text}
            />
            <Typography color="white">
              {printDegree(
                forecast.day.mintemp_c,
                forecast.day.mintemp_f,
                unit
              )}{" "}
              -{" "}
              {printDegree(
                forecast.day.maxtemp_c,
                forecast.day.maxtemp_f,
                unit
              )}
            </Typography>

            <Stack direction="row" alignItems="center">
              <WaterDrop sx={{ fontSize: "16px", mr: 0.5, color: "white" }} />
              <Typography color="white" typography="Caption1">
                {forecast.day.daily_chance_of_rain}%
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default DailyWeather;
