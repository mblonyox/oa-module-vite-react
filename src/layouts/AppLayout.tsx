import React, { PropsWithChildren, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  createTheme,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  ScopedCssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import background from "../images/background.svg";

const theme = createTheme({
  typography: {
    fontFamily: "Muli,Helvetica Neue,Arial,sans-serif",
    htmlFontSize: 10,
  },
});

interface NavMenu {
  title: string;
  to: string;
  icon: React.ElementType;
}

type AppLayoutProps = PropsWithChildren<{
  title: string;
  menus: (NavMenu | "spacer" | "divider")[];
  drawerWidth?: number;
}>;

function AppLayout(props: AppLayoutProps) {
  const drawerWidth = props.drawerWidth ?? 240;
  const [open, setOpen] = useState(true);

  const toggleOpen = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline
        style={{ width: "100%", height: "100%", display: "flex" }}
      >
        <AppBar
          position="absolute"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundImage: `url(${background})`,
          }}
        >
          <Toolbar
            sx={{
              "@media all": {
                minHeight: (theme) => theme.spacing(16),
              },
              paddingTop: (theme) => theme.spacing(1),
              alignItems: "flex-start",
            }}
          >
            <IconButton
              onClick={toggleOpen}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              {open ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
            <Typography sx={{ p: 1 }} variant="h6" noWrap>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: open ? drawerWidth : (theme) => theme.spacing(6),
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest,
              }),
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              position: "absolute",
              boxSizing: "border-box",
            },
          }}
        >
          <Box height="100%" display="flex" flexDirection="column">
            <Toolbar
              sx={{
                "@media all": {
                  minHeight: (theme) => theme.spacing(16),
                },
              }}
            />
            <List
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
              }}
            >
              {props.menus.map((menu, index) =>
                typeof menu === "string" ? (
                  (menu === "spacer" && <Box flex="1" key={index} />) ||
                  (menu === "divider" && <Divider key={index} />)
                ) : (
                  <ListItem
                    component={NavLink}
                    activeClassName="Mui-selected"
                    exact
                    to={menu.to}
                    key={index}
                  >
                    <ListItemIcon>
                      <menu.icon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={menu.title} />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, height: "100%", position: "relative" }}
        >
          <Paper
            sx={{
              position: "absolute",
              zIndex: (theme) => theme.zIndex.drawer + 2,
              top: (theme) => theme.spacing(8),
              left: (theme) => theme.spacing(1),
              right: (theme) => theme.spacing(1),
              bottom: (theme) => theme.spacing(1),
            }}
          >
            {props.children}
          </Paper>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default AppLayout;
