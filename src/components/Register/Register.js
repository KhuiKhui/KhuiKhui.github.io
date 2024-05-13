import * as React from "react";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import Title from "../images/treble_clef_elements/title.png";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

import { Typography, Container } from "@mui/material";

const drawerWidth = 240;

export default function Register(props) {
  // okay
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
    if (total < 0) {
      const seconds = 0;
      const minutes = 0;
      const hours = 0;
      const days = 0;
    }

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
    width: "25vw",
    fontSize: "medium",

    boxShadow: "5px 5px #12051F",
    textShadow: "0px 0px 4px #FFFFFF",
    color: theme.palette.getContrastText("#7D53A9"),
    backgroundColor: "#7D53A9",
    fontFamily: "Cormorant Garamond, serif",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "1.5vw",
    "&:hover": {
      backgroundColor: "#A886C0",
      scale: "1.01",
    },
  }));
  const DateCount = styled(Grid)(({ theme }) => ({
    fontSize: "30px",
    fontWeight: "700",
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
          borderRadius: "30px",
          // bgcolor: "#70255F",
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
            borderRadius: "30px",
            boxShadow: "0px 0px 20px #36187B",
            border: "2px solid #36187B",
            backgroundImage:
              "linear-gradient(to bottom right, #3A235E, #21123A)",
          }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            rowSpacing={3}
            sx={{ p: "25px" }}
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
                ml: {
                  lg: "30px",
                },
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

            <Grid item className="cormorant-garamond-semibold">
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  bgcolor: "#271445",
                  borderRadius: "30px",
                  boxShadow: "0px 0px 20px #36187B",
                  border: "2px solid #36187B",
                  p: "10px",
                  pb: "20px",
                  width: {
                    xs: "80vw",
                    md: "60vw",
                    lg: "30vw",
                  },
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    color: "white",
                    textShadow: "1px 1px #0B0315",
                  }}
                >
                  <DateCount sx={{ mr: "15px" }}>
                    <b>{days}</b>
                    <small style={{ fontSize: "17px", marginTop: "10px" }}>
                      Days
                    </small>
                  </DateCount>
                  <DateCount sx={{ mr: "12px" }}>
                    <b>{hours}</b>
                    <small style={{ fontSize: "17px", marginTop: "10px" }}>
                      Hours
                    </small>
                  </DateCount>
                  <DateCount>
                    <b>{mins}</b>
                    <small style={{ fontSize: "17px", marginTop: "10px" }}>
                      Minutes
                    </small>
                  </DateCount>
                  <DateCount>
                    <b>{secs}</b>
                    <small
                      style={{
                        fontSize: "17px",
                        marginTop: "10px",
                      }}
                    >
                      Seconds
                    </small>
                  </DateCount>
                </Grid>
                <br></br>
                <TicketButton className="cormorant-garamond-semibold">
                  <Link
                    rel="noopener noreferrer"
                    href="https://forms.gle/ApsDiLcA9MhbfWA98"
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
          className="cormorant-garamond-semibold"
          sx={{
            boxShadow: "20",
            height: "fit-content",
            mt: "40px",
            bgcolor: "#271445",
            display: "flex",
            flexDirection: {
              xs: "column",
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
            backgroundImage:
              "linear-gradient(to bottom right, #321E53, #1C0E33)",
          }}
        >
          <Grid sx={{ flexDirection: "column", width: "100%" }}>
            <Typography
              variant="h3"
              className="cormorant-garamond-bold"
              sx={{
                padding: "5px",
                fontWeight: "bold",
                textShadow: "0px 0px 3px #FFFFFF",
                color: "white",
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              When?
            </Typography>
            <Typography
              className="cormorant-garamond-semibold"
              sx={{
                padding: "5px",
                fontSize: "20px",
                textShadow: "1px 1px #0B0315",
                lineHeight: "1.4",
                color: "white",
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              <b>Time</b>: 4.00 PM - 9.00 PM<br></br>
              <b>Date</b>: Saturday, 18.05.2023
            </Typography>
          </Grid>
          <Grid sx={{ flexDirection: "column", width: "100%" }}>
            <Typography
              variant="h3"
              className="cormorant-garamond-bold"
              sx={{
                padding: "5px",
                fontWeight: "bold",
                color: "white",
                textShadow: "0px 0px 3px #FFFFFF",
                fontFamily: "Cormorant Garamond, serif",
                width: "fit-content",
              }}
            >
              Where?
            </Typography>
            <Typography
              className="cormorant-garamond-semibold"
              sx={{
                padding: "5px",
                fontSize: "20px",
                textShadow: "1px 1px #0B0315",
                lineHeight: "1.4",
                color: "white",
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              <b>Location</b>: Thông Tấn Xã<br></br>
              <b>Address</b>: 116-118 Nguyễn Thị Minh Khai, Bến Thành Ward,
              District 3, Ho Chi Minh City
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
