import * as React from "react";
import "./index.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import LogoWhite from "../ConvertedImages/LogoWhite";
import MinhTu from "../images/avatars/minh_tu.jpg";
import MaiAnh from "../images/avatars/mai_anh.jpg";
import MinhHieu from "../images/avatars/minh_hieu.jpg";
import KhanhLinh from "../images/avatars/khanh_linh.jpg";
import GiaKhang from "../images/avatars/giakhang.jpg";
import Brown from "../images/avatars/brown.jpg";
import Audrey from "../images/avatars/audrey.jpg";
import Notes from "../images/bg_images/notes.PNG";
import Lights from "../images/bg_images/lights.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

import { Container, Typography } from "@mui/material";

import Register from "../Register/Register";

const drawerWidth = 240;
const navItems = ["About", "Speakers", "Events", "Contact"];

export default function Body(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const PurpleGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    color: "#E2D9F1",
    borderRadius: "50px",
    marginTop: "50px",
    boxShadow: "0px 0px 20px #36187B",
    border: "2px solid #36187B",
    zIndex: "1",
    backgroundImage: "linear-gradient(to bottom right, #321E53, #1C0E33)",
  }));

  const Font = styled(Typography)(({ theme }) => ({
    padding: "5px",
    fontFamily: "Helvetica",
    textShadow: "2px 2px #0B0315",
    lineHeight: "1.4",
  }));

  const Background = styled(Box)(({ theme }) => ({
    width: "100vw",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    zIndex: "0",
  }));

  return (
    <>
      <Box
        sx={{
          bgcolor: "#020104",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
        id="home"
      >
        <Background
          component="img"
          src={Notes}
          sx={{
            filter: "blur(5px)",
            width: "100%",
          }}
        ></Background>
        <Background
          component="img"
          src={Lights}
          sx={{
            filter: "blur(5px)",
            zIndex: "1",
            left: "-8.5%",
            width: "100%",
          }}
        ></Background>
        <Container className="lights">
          <Container
            className="blur-bg"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "5vw",
                fontFamily: "Cormorant Garamond, serif",
                color: "white",
                fontWeight: "bold",
                textShadow: "0px 0px 4px #FFFFFF",
                letterSpacing: "1.5px",
                zIndex: "1",
                mt: "120px",
              }}
            >
              Ideas worth spreading.
            </Typography>

            <Container
              className="banner"
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 0px 30px #36187B",

                bgcolor: "#6E4DA2",
                width: "60vw",
                height: "20vh",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "30px 0px 30px 0px",
                zIndex: "5",
                mt: {
                  xs: "30px",
                  md: "30px",
                  lg: "60px",
                },
                mb: "10px",
              }}
            >
              <LogoWhite />
            </Container>
          </Container>
        </Container>

        <Register id="register"></Register>

        <div className="spacer layer1" id="about"></div>

        <Grid
          container
          disableEqualOverflow
          sx={{
            p: "5px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            bgcolor: "#180933",
            width: "100%",
            zIndex: "6",
          }}
        >
          <Background
            component="img"
            src={Notes}
            sx={{
              backgroundColor: "rgba(24, 9, 51, 0.1)",
              filter: "blur(3px)",
              zIndex: "1",
              width: "100%",
              height: "100%",
            }}
          ></Background>
          <PurpleGrid className="info" sx={{ alignItems: "normal" }}>
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
              }}
            >
              About <span className="ted-color">TEDx</span>.
            </Typography>

            <br></br>
            <Typography
              variant="h4"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
              }}
            >
              <span className="ted-color">x</span> = independently organized
              event
            </Typography>
            <br></br>
            <Font>
              In the spirit of ideas worth spreading,{" "}
              <b className="ted-color">TEDx</b> is a program of local,
              self-organized events that bring people together to share a
              TED-like experience. At a <b className="ted-color">TEDx</b> event,
              TED Talks video and live speakers combine to spark deep discussion
              and connection. These local, self-organized events are branded{" "}
              <b className="ted-color">TEDx</b>, where{" "}
              <b className="ted-color">x</b> = independently organized TED
              event. The TED Conference provides general guidance for the{" "}
              <b className="ted-color">TEDx</b> program, but individual{" "}
              <b className="ted-color">TEDx</b> events are self-organized.
            </Font>
          </PurpleGrid>
          <PurpleGrid
            className="info"
            sx={{
              bgcolor: "#3A235E",
              alignItems: "normal",
              ml: "45px",
              mr: "45px",
              mt: "100px",
              mb: "30px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
              }}
            >
              About <span className="ted-color">us</span>.
            </Typography>
            <br></br>
            <Typography
              variant="h4"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
              }}
            >
              Who are we?
            </Typography>
            <br></br>
            <Font>
              <b className="ted-color">TEDxYouth PTNK</b> is established as an
              independently organized TED event at VNU-HCM High School for the
              gifted. We are one of the first high schools in{" "}
              <b className="ted-color">Ho Chi Minh City</b> to hold a{" "}
              <b className="ted-color">TEDx </b>
              event, fully in <b>English</b>. Our mission is to embrace
              curiosity and diversity in the journey of pursuing knowledge. In
              addition, we aim to spark imagination and catalyze impact, in
              TED's spirit <b>"Ideas worth spreading"</b>.
            </Font>
          </PurpleGrid>
          <PurpleGrid className="info" sx={{ alignItems: "normal" }}>
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
              }}
            >
              Our <span className="ted-color">theme</span>.
            </Typography>
            <br></br>
            <Typography
              variant="h4"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
              }}
            >
              Why us?
            </Typography>
            <br></br>
            <Font>
              Our mission is to embrace curiosity and diversity in the journey
              of pursuing knowledge. In addition, we aim to spark imagination
              and catalyze impact, in TED's spirit{" "}
              <b>"Ideas worth spreading"</b>. <br></br>
              <br></br>The
              <b> "Treble Clef"</b> is <b>a symbol of melody</b>. It embodies
              the ethereal dance of the soul's expression. Its elegant curves
              evoke a profound
              <b> depth of emotion</b>, resonating within each note, line, and
              space—a symphony of whispers echoing through time's corridors.
            </Font>
          </PurpleGrid>
        </Grid>

        <div
          className="spacer layer2"
          id="speakers"
          style={{ zIndex: "0" }}
        ></div>

        <Typography
          variant="h2"
          sx={{
            padding: "5px",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            textShadow: "0px 0px 4px #FFFFFF",
            zIndex: "5",
          }}
        >
          Our speakers.
        </Typography>
        <Grid
          id="speakers"
          sx={{
            mt: "20px",
            pb: "150px",
            display: "flex",
            justifyContent: "center",
            width: "95vw",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <PurpleGrid
            sx={{
              ml: "45px",
              mr: "45px",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              width: {
                xs: " 300px",
                md: "1000px",
                lg: "600px",
              },
            }}
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={MinhTu}
            ></Avatar>
            <Typography
              variant="h3"
              sx={{
                padding: "5px",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                ml: {
                  sx: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              Minh Tu
            </Typography>
          </PurpleGrid>
          <PurpleGrid
            sx={{
              ml: "45px",
              mr: "45px",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              width: {
                xs: " 300px",
                md: "1000px",
                lg: "600px",
              },
            }}
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={MaiAnh}
            ></Avatar>
            <Typography
              variant="h3"
              sx={{
                padding: "5px",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                ml: {
                  sx: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              Mai Anh
            </Typography>
          </PurpleGrid>
          <PurpleGrid
            sx={{
              ml: "45px",
              mr: "45px",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              width: {
                xs: " 300px",
                md: "1000px",
                lg: "600px",
              },
            }}
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={MinhHieu}
            ></Avatar>
            <br></br>
            <Typography
              variant="h3"
              sx={{
                padding: "5px",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                ml: {
                  sx: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              Minh Hieu
            </Typography>
          </PurpleGrid>
          <PurpleGrid
            sx={{
              ml: "45px",
              mr: "45px",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              width: {
                xs: " 300px",
                md: "1000px",
                lg: "600px",
              },
            }}
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={KhanhLinh}
            ></Avatar>
            <Typography
              variant="h3"
              sx={{
                padding: "5px",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                ml: {
                  sx: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              Khanh Linh
            </Typography>
          </PurpleGrid>
          <PurpleGrid
            sx={{
              ml: "45px",
              mr: "45px",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              width: {
                xs: " 300px",
                md: "1000px",
                lg: "600px",
              },
            }}
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={GiaKhang}
            ></Avatar>
            <Typography
              variant="h3"
              sx={{
                padding: "5px",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                ml: {
                  sx: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              Gia Khang
            </Typography>
          </PurpleGrid>
          <PurpleGrid
            sx={{
              ml: "45px",
              mr: "45px",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              width: {
                xs: " 300px",
                md: "1000px",
                lg: "600px",
              },
            }}
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={Brown}
            ></Avatar>
            <Typography
              variant="h3"
              sx={{
                padding: "5px",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                ml: {
                  sx: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              Ethan C. Brown
            </Typography>
          </PurpleGrid>
          <PurpleGrid
            sx={{
              ml: "45px",
              mr: "45px",
              flexDirection: {
                xs: "column",
                md: "row",
                lg: "row",
              },
              width: {
                xs: " 300px",
                md: "1000px",
                lg: "600px",
              },
            }}
          >
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={Audrey}
            ></Avatar>
            <Typography
              variant="h3"
              sx={{
                padding: "5px",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                ml: {
                  sx: "0px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              Audrey
            </Typography>
          </PurpleGrid>
        </Grid>
      </Box>
    </>
  );
}
