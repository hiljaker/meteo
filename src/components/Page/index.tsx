import { Box, Container, Stack, Typography } from "@mui/material";
import {
  ComponentProps,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { useGetForecast } from "../../api/forecast/useGetForecast";
import Overview from "./sections/Overview";
import HourlyWeather from "./sections/HourlyWeather";
import DailyWeather from "./sections/DailyWeather";
import Stats from "./sections/Stats";
import { useParams } from "react-router-dom";

type PageProps = {
  query: string;
} & PropsWithChildren;

type UnitToggleProps = {
  selectedUnit: string;
  setUnit: Dispatch<SetStateAction<"c" | "f">>;
} & ComponentProps<typeof Stack>;

const UnitToggle: FC<UnitToggleProps> = ({
  selectedUnit,
  setUnit,
  ...props
}) => {
  const units = [
    { unit: "c", name: "Celcius" },
    { unit: "f", name: "Fahrenheit" },
  ];

  return (
    <Stack
      direction="row"
      bgcolor="purple200.main"
      width="fit-content"
      mx="auto"
      p="8px"
      spacing={0.5}
      borderRadius="40px"
      {...props}
    >
      {units.map((unit) => {
        const selected = selectedUnit === unit.unit;

        return (
          <Box
            key={unit.name}
            bgcolor={selected ? "purple400.main" : "none"}
            borderRadius="24px"
            p="4px 8px"
            sx={{ cursor: "pointer" }}
            onClick={() => setUnit(unit.unit as "c" | "f")}
          >
            <Typography color={selected ? "neutral100.main" : "white"}>
              {unit.name}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};

const Page: FC<PageProps> = ({ query }) => {
  const { search } = useParams();

  const { data, isLoading } = useGetForecast({
    q: search || query,
    days: 7,
  });

  const [unit, setUnit] = useState<"c" | "f">("c");

  return (
    <Container sx={{ py: 5 }}>
      {isLoading && (
        <Stack alignItems="center" justifyContent="center" height="200px">
          <Typography typography="Heading3" color="white">
            Loading weather...
          </Typography>
        </Stack>
      )}

      {!isLoading && !data && (
        <Stack alignItems="center" justifyContent="center" height="200px">
          <Typography typography="Heading3" color="white">
            Can't load weather :(
          </Typography>
        </Stack>
      )}

      {!isLoading && data && (
        <Box>
          <Box textAlign="center">
            <UnitToggle selectedUnit={unit} setUnit={setUnit} mb={2} />
            <Overview data={data} unit={unit} />
          </Box>

          <HourlyWeather data={data} unit={unit} />

          <DailyWeather data={data} unit={unit} />

          <Stats data={data} unit={unit} />
        </Box>
      )}
    </Container>
  );
};

export default Page;
