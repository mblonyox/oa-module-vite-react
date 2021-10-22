import { Paper, Typography } from "@mui/material";
import BasePage from "../components/BasePage";

function Home() {
  return (
    <BasePage title="Home">
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
        <Typography variant="h5">
          Welcome to {import.meta.env.VITE_APP_TITLE}
        </Typography>
      </Paper>
    </BasePage>
  );
}

export default Home;
