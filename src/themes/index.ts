import { createTheme } from "@mui/material";
import { customTypography } from "./typography.custom";
import { customPalette } from "./palette.custom";

export const theme = createTheme({
  typography: customTypography,
  palette: customPalette,
});
