import * as React from "react";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import Title from "../images/treble_clef_elements/title.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

import {
  ThemeProvider,
  Typography,
  createTheme,
  Container,
} from "@mui/material";

const drawerWidth = 240;

export default function Register(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const d = new Date();
  const deadline = new Date("May 18, 2024 16:00:00");
  const Ref = useRef(null);

  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [mins, setMins] = useState("0");
  const [secs, setSecs] = useState("0");

  const startTimer = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 3600 / 1000 / 24);
    if (total >= 0) {
      setDays(days > 9 ? days : "0" + days);
      setHours(hours > 9 ? hours : "0" + hours);
      setMins(minutes > 9 ? minutes : "0" + minutes);
      setSecs(seconds > 9 ? seconds : "0" + seconds);
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
    width: "30vw",
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
  const DateCount = styled(Grid)(({ theme }) => ({
    fontSize: "25px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <>
      <Grid
        id="events"
        sx={{
          bgcolor: "#020104",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          zIndex: "3",
        }}
      >
        <Container
          sx={{
            boxShadow: 20,
            bgcolor: "#3A235E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "90vw",
            padding: "40px 0px 40px 0px",
            borderRadius: "30px 0px 30px 0px",
            boxShadow: "0px 0px 70px #251C10",
          }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ pb: "25px" }}
          >
            <Container
              component="img"
              className="title"
              src={Title}
              sx={{
                bgcolor: "#271445",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                padding: "18px",
                width: {
                  xs: "300px",
                  md: "400px",
                  lg: "500px",
                },

                boxShadow: "15px 15px #0B0315",
                "&:hover": {
                  scale: "1.05",
                  boxShadow: "20px 20px #0B0315",
                },
              }}
            ></Container>

            <Grid item sx={{}}>
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "Helvetica",
                    color: "white",
                  }}
                >
                  <DateCount>
                    <b>{days}</b>
                    <small>Days</small>
                  </DateCount>
                  <DateCount>
                    <b>{hours}</b>
                    <small>Hours</small>
                  </DateCount>
                  <DateCount>
                    <b>{mins}</b>
                    <small>Minutes</small>
                  </DateCount>
                  <DateCount>
                    <b>{secs}</b>
                    <small>Seconds</small>
                  </DateCount>
                </Grid>
                <br></br>
                <TicketButton sx={{}}>
                  <Link
                    rel="noopener noreferrer"
                    href="https://docs.google.com/forms/d/1ousj_U0UDosVUKsQrY8qyAa-0EVYkrodqg2--5_QCic/viewform?edit_requested=true"
                    underline="none"
                    sx={{ color: "white", p: "5px" }}
                    target="_blank"
                  >
                    TICKET REGISTRATION
                  </Link>
                </TicketButton>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <Grid
          sx={{
            boxShadow: "20",
            mt: "40px",
            bgcolor: "#271445",
            display: "flex",
            flexDirection: {
              sx: "column",
              md: "row",
              lg: "row",
            },
            width: {
              xs: "370px",
              md: "800px",
              lg: "1000px",
            },
            padding: "20px",
            pl: "30px",
            pr: "30px",
            border: "2px solid #36187B",
            borderRadius: "30px",
            boxShadow: "0px 0px 20px #36187B",
          }}
        >
          <Grid sx={{ flexDirection: "column", width: "70vw" }}>
            <Typography
              variant="h4"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "2px 2px #0B0315",
              }}
            >
              <span className="ted-color">When?</span>
            </Typography>
            <Typography
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontSize: "20px",
                textShadow: "1px 1px #0B0315",
                lineHeight: "1.4",
                color: "white",
              }}
            >
              <b>Time</b>: 4.00 PM - 9.00 PM<br></br>
              <b>Date</b>: Saturday, 18.05.2023
            </Typography>
          </Grid>
          <Grid sx={{ flexDirection: "column", width: "70vw" }}>
            <Typography
              variant="h4"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "2px 2px #0B0315",
              }}
            >
              <span className="ted-color">Where?</span>
            </Typography>
            <Typography
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontSize: "20px",
                textShadow: "1px 1px #0B0315",
                lineHeight: "1.4",
                color: "white",
              }}
            >
              <b>Location</b>: Thông Tấn Xã<br></br>
              <b>Address</b>: 116-118 Nguyễn Thị Minh Khai, Ward Bến Thành,
              District 3, Ho Chi Minh City
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
