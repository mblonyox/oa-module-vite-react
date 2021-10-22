import { Box, Divider, Toolbar, Typography } from "@mui/material";
import { PropsWithChildren, ReactElement } from "react";

type BasePageProps = PropsWithChildren<{
  title: ReactElement | string;
}>;

function BasePage({ title, children }: BasePageProps) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Toolbar>
        {typeof title === "string" ? (
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        ) : (
          title
        )}
      </Toolbar>
      <Divider />
      <Box sx={{ flex: "1 1 auto", overflow: "auto" }}>{children}</Box>
    </Box>
  );
}

export default BasePage;
