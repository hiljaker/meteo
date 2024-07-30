import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextInput = styled(TextField)(({ theme }) => ({
  borderRadius: "16px",

  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    ...theme.typography.Caption1,
    color: theme.palette.neutral300.main,
    paddingRight: 0,

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.purple400.main,
    },

    "& textarea": {
      padding: "0 14px 0 0!important",
    },

    "& .MuiInputBase-inputSizeSmall": {
      padding: "8px 12px",
    },
  },
}));
