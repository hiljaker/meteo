import { useQuery } from "@tanstack/react-query";
import axios from "../../utils/axios";
import { Weather } from "./types";

export type FetchForecastParams = {
  q: string;
  days?: number;
  aqi?: string;
};

export const fetchForecast = async (
  params: FetchForecastParams
): Promise<Weather | undefined> => {
  const result = await axios.get<Weather>("/forecast.json", { params });

  return result.data;
};

export const useGetForecast = (params: FetchForecastParams) => {
  return useQuery({
    queryKey: ["forecast", params.q, params.days, params.aqi],
    queryFn: () => fetchForecast(params),
  });
};
