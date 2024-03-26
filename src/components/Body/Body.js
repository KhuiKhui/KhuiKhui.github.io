import * as React from "react";
import "./index.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Container,
  Icon,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

import TedxIcon from "../images/tedx_logo/logo-black.png";
import Model from "../Model/Model";
import Register from "../Register/Register";
import { useFrame, Canvas, extend, useThree } from "@react-three/fiber";

const drawerWidth = 240;
const navItems = ["About", "Speakers", "Events", "Contact"];

export default function Body(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "#F8C26C" }}>
        <Box
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            className="roboto"
            sx={{ fontSize: "50px", marginBottom: "30px" }}
          >
            ideas worth spreading.
          </Typography>
          <Typography
            sx={{
              display: "flex",
              boxShadow: 20,
              bgcolor: "#F7D36D",
            }}
          >
            <img src={TedxIcon} width="1000" />
          </Typography>
        </Box>
        <div style={{ width: "98.9vw", height: "45vh" }}>
          <Canvas
            flat
            linear
            style={{
              background: "#F8C26C",
              zIndex: "1",
              marginTop: "50px",
              marginBottom: "20px",
            }}
          >
            <Model position={[0, 0, 0]}></Model>
          </Canvas>
        </div>
        <Register></Register>
        <Box
          sx={{
            p: 3,
            display: "flex",

            flexDirection: "column",
            bgcolor: "#FFFFCB",
            boxShadow: 20,
            width: "400px",
            height: "500px",
          }}
        >
          <Typography>About Us</Typography>
        </Box>
      </Box>
    </>
  );
}
