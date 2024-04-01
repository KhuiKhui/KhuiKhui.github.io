import * as React from "react";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import Title from "../images/treble_clef_elements/title.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

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
  const d = new Date();
  const deadline = new Date("May 18, 2024 16:00:00");
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00:00");

  const startTimer = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 3600 / 1000 / 24);
    if (total >= 0) {
      setTimer(
        (days > 9 ? days : "0" + days) +
          "D   " +
          (hours > 9 ? hours : "0" + hours) +
          "H   " +
          (minutes > 9 ? minutes : "0" + minutes) +
          "M   " +
          (seconds > 9 ? seconds : "0" + seconds) +
          "S"
      );
    }
  };

  useEffect(() => {
    if (Ref.current) {
      clearInterval(Ref.current);
    }
    const id = setInterval(() => {
      startTimer(deadline);
    }, 1000);
    Ref.current = id;
  }, []);

  const TicketButton = styled(Button)(({ theme }) => ({
    height: "50px",
    width: "250px",
    fontSize: "medium",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    boxShadow: "5px 5px #12051F",

    color: theme.palette.getContrastText("#7D53A9"),
    backgroundColor: "#7D53A9",
    "&:hover": {
      backgroundColor: "#A886C0",
      scale: "1.01",
    },
  }));

  return (
    <>
      <Box
        id="events"
        sx={{
          bgcolor: "#020104",
        }}
      >
        <Box
          sx={{
            boxShadow: 20,
            bgcolor: "#271445",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            width: "1200px",
            margin: "auto",
            padding: "40px",
            borderRadius: "30px 0px 30px 0px",
            boxShadow: "20px 20px #0B0315",
          }}
        >
          <Grid container direction="row" alignItems="center">
            <Box
              component="img"
              className="title"
              src={Title}
              sx={{ mr: "100px" }}
            ></Box>
            <Grid
              item
              sx={{
                marginLeft: "30px",
                ml: "150px",
                // p: "20px",
                // display: "flex",
                // flexDirection: "column",
                // boxShadow: "0px 0px 30px #36187B",

                // bgcolor: "#875DC1",

                // justifyContent: "center",
                // alignItems: "center",
                // borderRadius: "30px 0px 30px 0px",
                // fontFamily: "Helvetica",
                // color: "#E2D9F1",
                // fontWeight: "bold",
                // fontSize: "20px",
              }}
            >
              <div className="countdown">
                <div>{timer}</div>
                <br></br>
                <TicketButton>
                  <Link
                    rel="noopener noreferrer"
                    href="https://docs.google.com/forms/d/1ousj_U0UDosVUKsQrY8qyAa-0EVYkrodqg2--5_QCic/viewform?edit_requested=true"
                    underline="none"
                    sx={{ color: "white" }}
                    target="_blank"
                  >
                    TICKET REGISTRATION
                  </Link>
                </TicketButton>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
