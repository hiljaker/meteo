import { createTheme, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    navy: Palette["primary"];
    orange: Palette["primary"];
    pink: Palette["primary"];
    gray: Palette["primary"];
    coal: Palette["primary"];
    purple100: Palette["primary"];
    purple200: Palette["primary"];
    purple300: Palette["primary"];
    purple400: Palette["primary"];
    neutral100: Palette["primary"];
    neutral200: Palette["primary"];
    neutral300: Palette["primary"];
    neutral400: Palette["primary"];
    neutral500: Palette["primary"];
    neutral600: Palette["primary"];
    neutral700: Palette["primary"];
    neutral800: Palette["primary"];
    neutral900: Palette["primary"];
  }

  interface PaletteOptions {
    navy: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    pink: PaletteOptions["primary"];
    gray: PaletteOptions["primary"];
    coal: PaletteOptions["primary"];
    purple100: PaletteOptions["primary"];
    purple200: PaletteOptions["primary"];
    purple300: PaletteOptions["primary"];
    purple400: PaletteOptions["primary"];
    neutral100: PaletteOptions["primary"];
    neutral200: PaletteOptions["primary"];
    neutral300: PaletteOptions["primary"];
    neutral400: PaletteOptions["primary"];
    neutral500: PaletteOptions["primary"];
    neutral600: PaletteOptions["primary"];
    neutral700: PaletteOptions["primary"];
    neutral800: PaletteOptions["primary"];
    neutral900: PaletteOptions["primary"];
  }
}

const theme = createTheme();

export const colors = {
  navy: "#0C2D57",
  orange: "#FC6736",
  pink: "#FFB0B0",
  gray: "#EFECEC",
  coal: "#3C4048",
  purple100: "#1F2544",
  purple200: "#474F7A",
  purple300: "#81689D",
  purple400: "#FFD0EC",
  neutral100: "#171717",
  neutral200: "#262626",
  neutral300: "#434343",
  neutral400: "#8C8C8C",
  neutral500: "#BFBFBF",
  neutral600: "#D9D9D9",
  neutral700: "#F0F0F0",
  neutral800: "#FAFAFA",
  neutral900: "#FFFFFF",
};

export const customPalette: PaletteOptions = {
  navy: {
    main: colors.navy,
    contrastText: theme.palette.getContrastText(colors.navy),
  },
  orange: {
    main: colors.orange,
    contrastText: theme.palette.getContrastText(colors.orange),
  },
  pink: {
    main: colors.pink,
    contrastText: theme.palette.getContrastText(colors.pink),
  },
  gray: {
    main: colors.gray,
    contrastText: theme.palette.getContrastText(colors.gray),
  },
  coal: {
    main: colors.coal,
    contrastText: theme.palette.getContrastText(colors.coal),
  },
  purple100: {
    main: colors.purple100,
    contrastText: theme.palette.getContrastText(colors.purple100),
  },
  purple200: {
    main: colors.purple200,
    contrastText: theme.palette.getContrastText(colors.purple200),
  },
  purple300: {
    main: colors.purple300,
    contrastText: theme.palette.getContrastText(colors.purple300),
  },
  purple400: {
    main: colors.purple400,
    contrastText: theme.palette.getContrastText(colors.purple400),
  },
  neutral100: {
    main: colors.neutral100,
    contrastText: theme.palette.getContrastText(colors.neutral100),
  },
  neutral200: {
    main: colors.neutral200,
    contrastText: theme.palette.getContrastText(colors.neutral200),
  },
  neutral300: {
    main: colors.neutral300,
    contrastText: theme.palette.getContrastText(colors.neutral300),
  },
  neutral400: {
    main: colors.neutral400,
    contrastText: theme.palette.getContrastText(colors.neutral400),
  },
  neutral500: {
    main: colors.neutral500,
    contrastText: theme.palette.getContrastText(colors.neutral500),
  },
  neutral600: {
    main: colors.neutral600,
    contrastText: theme.palette.getContrastText(colors.neutral600),
  },
  neutral700: {
    main: colors.neutral700,
    contrastText: theme.palette.getContrastText(colors.neutral700),
  },
  neutral800: {
    main: colors.neutral800,
    contrastText: theme.palette.getContrastText(colors.neutral800),
  },
  neutral900: {
    main: colors.neutral900,
    contrastText: theme.palette.getContrastText(colors.neutral900),
  },
};
