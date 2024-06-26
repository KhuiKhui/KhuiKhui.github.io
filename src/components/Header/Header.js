import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { ThemeProvider, createTheme } from "@mui/material";
import TedxIcon from "../images/tedx_logo/logo-white.png";
import "./index.css";

const drawerWidth = 240;
const navNavi = ["Events", "About", "Speakers", "Sponsors"];
//const navNavi = ["Events", "About", "Speakers"];
const navContacts = ["Facebook", "Instagram", "TED"];
const navLinksNavi = ["/#/#events", "/#/#about", "/#/#speakers", "/#/sponsors"];
//const navLinksNavi = ["/#events", "/#about", "/#speakers"];
const navLinksContacts = [
  "https://www.facebook.com/tedptnk",
  "https://www.instagram.com/tedxyouth.ptnk/",
  "https://www.ted.com/tedx/events/56472",
];

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TEDxYouth@PTNK
      </Typography>
      <Divider />
      <List>
        {navContacts.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <AppBar component="nav" position="fixed">
          <Toolbar>
            <Link
              rel="noopener noreferrer"
              href="/"
              underline="none"
              sx={{
                color: "white",
                transition: "all 0.5s",

                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "rgba(236, 4, 43, 0.05)",
                },
              }}
              target="_self"
            >
              <img src={TedxIcon} width="250" />
            </Link>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navNavi.map((item, index) => (
                <Button
                  key={navNavi[index]}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "medium",
                    transition: "all 0.1s",
                    "&:hover": {
                      backgroundColor: "rgba(236, 4, 43, 0.05)",
                    },
                  }}
                >
                  <Link
                    rel="noopener noreferrer"
                    href={navLinksNavi[index]}
                    underline="none"
                    sx={{
                      color: "white",
                      transition: "all 0.2s",
                      "&:hover": {
                        color: "#EC042B",
                      },
                    }}
                    target="_self"
                  >
                    {navNavi[index]}
                  </Link>
                </Button>
              ))}
              {navContacts.map((item, index) => (
                <Button
                  key={navContacts[index]}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "medium",
                    transition: "all 0.2s",

                    "&:hover": {
                      backgroundColor: "rgba(236, 4, 43, 0.05)",
                    },
                  }}
                >
                  <Link
                    rel="noopener noreferrer"
                    href={navLinksContacts[index]}
                    underline="none"
                    sx={{
                      color: "white",
                      transition: "all 0.2s",
                      "&:hover": {
                        color: "#EC042B",
                      },
                    }}
                    target="_blank"
                  >
                    {navContacts[index]}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}
