import { Paper, Typography } from "@mui/material";
import BasePage from "../components/BasePage";

function Help() {
  return (
    <BasePage title="Help">
      <Paper
        sx={{
          m: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 240,
        }}
      >
        <Typography variant="h5">{import.meta.env.VITE_APP_TITLE}</Typography>
        <Typography variant="subtitle1">Versi 1.0.0</Typography>
      </Paper>
    </BasePage>
  );
}

export default Help;
