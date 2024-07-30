import { FC } from "react";
import { Weather } from "../../../../api/forecast/types";
import { Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { printDegree } from "../../helpers/print-degree";
import { WaterDrop } from "@mui/icons-material";

type HourlyWeatherProps = {
  data: Weather;
  unit: "c" | "f";
};

const Image = styled("img")(() => ({}));

const HourlyWeather: FC<HourlyWeatherProps> = ({ data, unit }) => {
  const forecastToday = data?.forecast.forecastday[0];

  return (
    <Stack
      bgcolor="purple200.main"
      borderRadius="24px"
      divider={<Divider />}
      mb={3}
    >
      <Typography textAlign="center" color="white" p={2}>
        Hourly weather
      </Typography>

      <Stack direction="row" spacing={2} overflow="scroll" p={2}>
        {forecastToday.hour.map((hour) => (
          <Stack alignItems="center" spacing={0.5}>
            <Typography color="white">{hour.time.split(" ")[1]}</Typography>
            <Image src={hour.condition.icon} alt={hour.condition.text} />
            <Typography color="white">
              {printDegree(hour.temp_c, hour.temp_f, unit)}
            </Typography>

            <Stack direction="row" alignItems="center">
              <WaterDrop sx={{ fontSize: "16px", mr: 0.5, color: "white" }} />
              <Typography color="white" typography="Caption1">
                {hour.chance_of_rain}%
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default HourlyWeather;
