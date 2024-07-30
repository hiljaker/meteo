import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { TextInput } from "./TextInput";
import { Clear, MyLocation } from "@mui/icons-material";
import { useFormik } from "formik";
import { fetchForecast } from "../api/forecast/useGetForecast";
import Swal from "sweetalert2";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  const { getFieldProps, setFieldValue, handleSubmit } = useFormik({
    initialValues: { search: "" },
    onSubmit: async (values) => {
      try {
        await fetchForecast({ q: values.search });
        navigate({ pathname: "/".concat(values.search) });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Failed to get city",
          text: "City not found",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          minWidth: "300px",
          bgcolor: "purple200.main",
          minHeight: "100vh",
        }}
      >
        <Stack sx={{ padding: "24px" }} spacing={2}>
          <Typography textAlign="center" typography="Heading3" color="white">
            Meteo ⛅️
          </Typography>

          <TextInput
            {...getFieldProps("search")}
            size="small"
            placeholder="Search city"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setFieldValue("search", "")}>
                  <Clear />
                </IconButton>
              ),
            }}
          />

          <Button variant="contained" onClick={() => handleSubmit()}>
            Search
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={() => {
              navigate({ pathname: "/" });
            }}
          >
            <MyLocation sx={{ fontSize: "16px", mr: 1 }} /> My Location
          </Button>
        </Stack>
      </Box>

      <Box
        flexGrow={1}
        width="calc(100% - 300px)"
        minHeight="100vh"
        bgcolor="purple100.main"
      >
        {outlet}
      </Box>
    </Box>
  );
};

export default Layout;
