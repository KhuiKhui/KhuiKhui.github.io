import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Icon, SvgIcon, ThemeProvider, createTheme } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import TedxIcon from "../images/tedx_logo/logo-white.png";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const drawerWidth = 240;
const navItems = ["About", "Speakers", "Events", "Contact"];

export default function Footer(props) {
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
        {navItems.map((item) => (
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
      <AppBar
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "100%",
          height: "166px",
          bottom: "0px",
        }}
      >
        <Toolbar
          sx={{
            marginTop: "20px",
            display: "flex",

            justifyContent: "left",
          }}
        >
          <img src={TedxIcon} width="250" />
        </Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            marginTop: "25px",
            marginLeft: "38px",
            display: "flex",

            justifyContent: "left",
          }}
        >
          This independent TEDx event is operated under license from TED.
        </Typography>
      </AppBar>

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
    </ThemeProvider>
  );
}
