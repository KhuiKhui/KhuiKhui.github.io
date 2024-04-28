import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material";
import TedxIcon from "../images/tedx_logo/logo-white.png";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const drawerWidth = 240;
const navItems = ["Facebook", "Instagram", "TED", "Treble Clef"];
const navLinks = [
  "https://www.facebook.com/tedptnk",
  "https://www.instagram.com/tedxyouth.ptnk/",
  "https://www.ted.com/tedx/events/53063",
  "https://forms.gle/ApsDiLcA9MhbfWA98",
];

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
    <Grid
      sx={{
        height: "230px",
        mt: "50px",
        boxShadow: "10",
        margin: "0px",
        bgcolor: "#272727",
        display: "flex",
        flexDirection: "row",
        height: "auto",
        flexWrap: "wrap",
      }}
    >
      <Grid sx={{ flexDirection: "column" }}>
        <img src={TedxIcon} width="375" />
        <Typography sx={{ ml: "20px", color: "white" }}>
          Copyright © 2024 | This independent TEDx event<br></br>is operated
          under license from TED.
        </Typography>
      </Grid>
      <Grid
        sx={{
          flexDirection: "column",
          display: "flex",
          position: "relative",
          left: "4%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            padding: "5px",
            paddingLeft: "20px",
            fontSize: "30px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            textShadow: "2px 2px #0B0315",
            color: "#E62B1E",
            mt: "10px",
            borderLeft: "10px solid #E62B1E",
          }}
        >
          Our Presence
        </Typography>
        {navItems.map((item, index) => (
          <Link
            rel="noopener noreferrer"
            href={navLinks[index]}
            underline="none"
            sx={{
              color: "white",
              padding: "5px",
              fontFamily: "Helvetica",
              fontWeight: "bold",
              textShadow: "2px 2px #0B0315",
              transition: "all 0.2s",
              paddingLeft: "35px",
              "&:hover": {
                color: "#EC042B",
              },
            }}
            target="_blank"
          >
            {navItems[index]}
          </Link>
        ))}
      </Grid>
      <Grid
        sx={{
          flexDirection: "column",
          display: "flex",
          position: "relative",
          left: {
            xs: "4%",
            md: "6%",
            lg: "8%",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            padding: "5px",
            paddingLeft: "20px",
            fontSize: "30px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            textShadow: "2px 2px #0B0315",
            color: "#E62B1E",
            mt: "10px",
            borderLeft: "10px solid #E62B1E",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            color: "white",
            padding: "5px",
            fontFamily: "Helvetica",
            textShadow: "2px 2px #0B0315",
            paddingLeft: "35px",
          }}
        >
          <b>Email:</b> tedxyouth.ptnk@ptnk.edu.vn
        </Typography>
        <Typography
          sx={{
            color: "white",
            padding: "5px",
            fontFamily: "Helvetica",
            textShadow: "2px 2px #0B0315",
            paddingLeft: "35px",
          }}
        >
          <b>Hotline:</b> +84 963 632 942 (Ms. Gia Hân)
        </Typography>
      </Grid>
      <Grid
        sx={{
          flexDirection: "column",
          display: "flex",
          position: "relative",
          left: {
            xs: "4%",
            md: "6%",
            lg: "12%",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            padding: "5px",
            paddingLeft: "20px",
            fontSize: "30px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            textShadow: "2px 2px #0B0315",
            color: "#E62B1E",
            mt: "10px",
            borderLeft: "10px solid #E62B1E",
          }}
        >
          Find Us Here
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.682806592811!2d106.66388327457479!3d10.75891095951752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee530f31bdd%3A0x9aa4a80ddd6d739e!2zMTUzIMSQLiBOZ3V54buFbiBDaMOtIFRoYW5oLCBQaMaw4budbmcgOSwgUXXhuq1uIDUsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1711993317583!5m2!1sen!2s"
          width="300"
          height="150"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{
            paddingTop: "10px",
            paddingLeft: "30px",
            border: "0px",
            marginBottom: "10px",
          }}
        ></iframe>
      </Grid>
    </Grid>
  );
}
