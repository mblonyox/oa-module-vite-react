import { Box } from "@mui/material";
import { useAuth } from "oidc-react";
import { PropsWithChildren } from "react";

import ekemenkeu from "../images/ekemenkeu.svg";

function RootLayout(props: PropsWithChildren<{}>) {
  const { userData } = useAuth();

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          width: "280px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 2px 8px 0 rgb(0 0 0 / 35%)",
        }}
      >
        <Box
          sx={{
            bgcolor: "#1e2129",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            padding: "12px 12px 12px 20px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={ekemenkeu}
              alt="e-Kemenkeu"
              style={{ width: "24px", height: "24px" }}
            />
            <Box
              component="span"
              sx={{
                marginLeft: "12px",
                fontSize: "16px",
                fontWeight: 300,
                letterSpacing: "0.4px",
                lineHeight: "normal",
                color: "rgba(255, 255, 255, .7)",
              }}
            >
              e-Kemenkeu
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#2d323e",
            display: "flex",
            flexDirection: "column",
            flex: "1 1 auto",
          }}
        >
          <Box
            sx={{
              bgcolor: "#1e2129",
              color: "#fff",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              height: "136px",
              padding: "24px 0 64px",
            }}
          >
            <Box sx={{ fontSize: "16px", fontWeight: "normal" }}>
              {userData?.profile.name}
            </Box>
            <Box
              sx={{
                fontSize: "13px",
                fontWeight: "normal",
                marginTop: "8px",
                color: "rgba(255,255,255,.5)",
              }}
            >
              {userData?.profile.nip}
            </Box>
            <Box
              sx={{
                bgcolor: "#2d323e",
                position: "absolute",
                top: "92px",
                left: "50%",
                borderRadius: "50%",
                padding: "8px",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={userData?.profile.gravatar}
                alt={userData?.profile.name}
                style={{
                  width: "72px",
                  height: "72px",
                  margin: 0,
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
        }}
      >
        <Box sx={{ height: "64px", width: "100%", bgcolor: "#fff" }}></Box>
        <Box sx={{ position: "relative", flex: "1 1 auto" }}>
          {props.children}
        </Box>
        <Box sx={{ height: "64px", width: "100%", bgcolor: "#1e2129" }}></Box>
      </Box>
    </Box>
  );
}

export default RootLayout;
