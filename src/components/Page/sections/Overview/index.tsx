import { FC } from "react";
import { Weather } from "../../../../api/forecast/types";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { printDegree } from "../../helpers/print-degree";

type OverviewProps = {
  data: Weather;
  unit: "c" | "f";
};

const Image = styled("img")(() => ({}));

const Overview: FC<OverviewProps> = ({ data, unit }) => {
  const forecastToday = data?.forecast.forecastday[0].day;

  return (
    <Box mb={1}>
      <Typography typography="Heading4" color="white">
        {data?.location.name}, {data?.location.region}, {data?.location.country}
      </Typography>

      <Typography typography="Heading1" color="white">
        {printDegree(
          data?.current.temp_c || 0,
          data?.current.temp_f || 0,
          unit
        )}
      </Typography>

      <Typography typography="Body3" color="white">
        Feels like{" "}
        {printDegree(
          data?.current.feelslike_c || 0,
          data?.current.feelslike_f || 0,
          unit
        )}{" "}
        |{" "}
        {printDegree(
          forecastToday?.mintemp_c || 0,
          forecastToday?.mintemp_f || 0,
          unit
        )}{" "}
        -{" "}
        {printDegree(
          forecastToday?.maxtemp_c || 0,
          forecastToday?.maxtemp_f || 0,
          unit
        )}
      </Typography>

      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography typography="Subheading2" color="white">
          {data?.current.condition.text}
        </Typography>

        <Image
          src={data?.current.condition.icon}
          alt={data?.current.condition.text}
        />
      </Stack>
    </Box>
  );
};

export default Overview;
