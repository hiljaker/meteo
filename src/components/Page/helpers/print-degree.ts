export const printDegree = (
  celc: number,
  fahr: number,
  unit: "c" | "f"
): string => {
  const temperature = unit === "c" ? celc : fahr;
  const finalUnit = unit === "c" ? "C" : "F";

  return `${Math.round(temperature)}°${finalUnit}`;
};
