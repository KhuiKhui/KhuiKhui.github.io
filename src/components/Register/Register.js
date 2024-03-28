import * as React from "react";
import "./index.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Icon, ThemeProvider, Typography, createTheme } from "@mui/material";

import TedxIcon from "../images/tedx_logo/logo-black.png";
import Model from "../Model/Model";
import { useFrame, Canvas, extend, useThree } from "@react-three/fiber";
import { Diversity1 } from "@mui/icons-material";
const drawerWidth = 240;

export default function Register(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          p: 3,
          bgcolor: "#F8C26C",
        }}
      >
        <Box
          sx={{
            boxShadow: 20,
            bgcolor: "#F7D36D",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            width: "1100px",
            margin: "auto",
            padding: "40px",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnSpacing={50}
          >
            <Grid item>
              <Typography
                style={{
                  fontSize: "50px",
                  fontFamily: "Helvetica Neue",
                  color: "white",
                  boxShadow: "3",
                  fontStyle: "italic",
                  textShadow: "5px 5px #000000",
                  marginBottom: "10px",
                }}
              >
                Treble Clef
              </Typography>
            </Grid>

            <Grid item>
              <div className="countdown">
                <div>00: 00: 00: 00</div>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    bgcolor: "#36187B",
                    fontSize: "20px",
                    fontFamily: "sans-serif Helvetica",
                  }}
                >
                  TICKET REGISTRATION
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
