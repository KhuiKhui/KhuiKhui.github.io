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
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Icon, SvgIcon, ThemeProvider, createTheme } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import TedxIcon from "../images/tedx_logo/logo-white.png";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

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
    <Box>
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
      <Paper
        sx={{
          height: "120px",
          mt: "50px",
          boxShadow: "10",
        }}
      >
        <img src={TedxIcon} width="400" />
        <Typography sx={{ ml: "20px" }}>
          Copyright © 2024 | This independent TEDx event is operated under
          license from TED.
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ zIndex: "1", width: "100%", bgcolor: "#F8C26C" }}
        />
        <Typography sx={{ ml: "20px" }}>test</Typography>
      </Paper>
    </ThemeProvider>
  );
}
