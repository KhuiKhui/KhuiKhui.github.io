import * as React from "react";
import "./index.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Icon, ThemeProvider, Typography, createTheme } from "@mui/material";

import One from "../images/bg_images/home/1.jpg";
import Two from "../images/bg_images/home/2.jpg";
import Three from "../images/bg_images/home/3.jpg";
import Four from "../images/bg_images/home/4.jpg";
import TedxIcon from "../images/tedx_logo/logo-black.png";

const drawerWidth = 240;
const navItems = ["About", "Speakers", "Events", "Contact"];

export default function Body(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const itemData = [One, Two, Three, Four];

  return (
    <>
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <ImageList sx={{ width: 1500, height: 400 }} cols={4} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item} sx={{ filter: "blur(5px)" }}>
              <img src={item} />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography
          sx={{
            position: "absolute",
            top: "190px",
            display: "flex",
            boxShadow: 20,
          }}
        >
          <img src={TedxIcon} width="1000" />
        </Typography>

        <Typography className="roboto">ideas worth spreading.</Typography>
      </Box>
      {/* <Box>
        <Typography
          className="normal"
          sx={{
            marginTop: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          TEDxYouth PTNK is an initiative
        </Typography>
      </Box> */}
    </>
  );
}
