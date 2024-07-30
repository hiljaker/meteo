import { ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { theme } from "../themes";

const MUIThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
