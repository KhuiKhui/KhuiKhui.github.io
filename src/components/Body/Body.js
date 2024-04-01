import * as React from "react";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import LogoBlack from "../ConvertedImages/LogoBlack";
import LogoWhite from "../ConvertedImages/LogoWhite";
import MinhTu from "../images/avatars/minh_tu.jpg";
import MaiAnh from "../images/avatars/mai_anh.jpg";
import MinhHieu from "../images/avatars/minh_hieu.jpg";
import KhanhLinh from "../images/avatars/khanh_linh.jpg";
import Notes from "../images/bg_images/notes.PNG";
import Lights from "../images/bg_images/lights.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Container,
  Icon,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

import Register from "../Register/Register";
import { useFrame, Canvas, extend, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import Sponsors from "../Sponsors/Sponsors";

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
    backgroundColor: "#271445",
    color: "#E2D9F1",
    borderRadius: "50px",
    marginTop: "50px",
    boxShadow: "0px 0px 20px #36187B",
    border: "2px solid #36187B",
    zIndex: "1",
  }));

  const Font = styled(Typography)(({ theme }) => ({
    padding: "5px",
    fontFamily: "Helvetica",
    textShadow: "2px 2px #0B0315",
    lineHeight: "1.4",
  }));

  const Background = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    zIndex: "-1",
  }));

  return (
    <>
      <Box sx={{ bgcolor: "#020104" }} id="home">
        <Box className="lights">
          <Box
            className="blur-bg"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Background
              component="img"
              src={Notes}
              sx={{
                backgroundColor: "rgba(2, 1, 4, 0.5)",
                filter: "blur(3px)",
              }}
            ></Background>
            <Background
              component="img"
              src={Lights}
              sx={{
                zIndex: "1",
                backgroundColor: "rgba(2, 1, 4, 0.5)",
                filter: "blur(3px)",
                left: "-8.5%",
              }}
            ></Background>
            <Typography
              sx={{
                fontSize: "50px",
                marginBottom: "90px",
                marginTop: "30px",
                fontFamily: "Helvetica",
                color: "white",
                fontWeight: "bold",
                textShadow: "0px 0px 4px #FFFFFF",
                letterSpacing: "1.5px",
                zIndex: "1",
              }}
            >
              ideas worth spreading.
            </Typography>

            <Box
              className="banner"
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 0px 30px #36187B",

                bgcolor: "#3A235E",
                width: "65vw",
                height: "25vh",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "30px 0px 30px 0px",
                fontFamily: "Helvetica",
                color: "#E2D9F1",
                fontWeight: "bold",
                fontSize: "20px",
                zIndex: "5",
              }}
            >
              <LogoWhite />
            </Box>
          </Box>
        </Box>

        <Register></Register>

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
          }}
        >
          <Background
            component="img"
            src={Notes}
            sx={{
              backgroundColor: "rgba(24, 9, 51, 0.1)",
              filter: "blur(3px)",
              zIndex: "0",
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
              <b className="ted-color">TEDx</b>
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

        <div className="spacer layer2" id="speakers"></div>
        <Typography
          variant="h2"
          sx={{
            padding: "5px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            textShadow: "0px 0px 4px #FFFFFF",
          }}
        >
          Our speakers.
        </Typography>
        <Grid
          id="speakers"
          container
          rowSpacing={5}
          sx={{
            p: "5px",
            mt: "20px",
            ml: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PurpleGrid sx={{ ml: "45px", mr: "45px", flexDirection: "row" }}>
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={MinhTu}
            ></Avatar>
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                width: "350px",
                ml: "30px",
              }}
            >
              Minh Tu
            </Typography>

            <Font
              sx={{
                width: "750px",
              }}
            >
              ❝Hi, I am Minh Tú, the 𝐲𝐨𝐮𝐧𝐠𝐞𝐬𝐭 speaker of TEDxYouth@PTNK | Treble
              Clef. To begin, such an opportunity wouldn’t occur without both
              fear and aspiration. More importantly, my presence as this year's
              speaker is a collective effort of the TEDxYouth@PTNK organizing
              team and support from my loved ones. I wish to extend my deepest
              gratitude and best wishes to anyone looking for their '𝐓𝐫𝐞𝐛𝐥𝐞
              𝐂𝐥𝐞𝐟’ in this year's event.❞
            </Font>
          </PurpleGrid>
          <PurpleGrid sx={{ ml: "45px", mr: "45px", flexDirection: "row" }}>
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={MaiAnh}
            ></Avatar>
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                width: "350px",
                ml: "30px",
              }}
            >
              Mai Anh
            </Typography>
            <Font
              sx={{
                width: "750px",
              }}
            >
              ❝Ten years ago, Mia dreamt of standing on the TED talk stage.
              Today, as a PTNK senior, TEDxYouthPTNK makes that dream of mine 𝐚
              𝐫𝐞𝐚𝐥𝐢𝐭𝐲! There is great power in 𝐬𝐨𝐟𝐭𝐧𝐞𝐬𝐬 and 𝐛𝐞𝐚𝐮𝐭𝐲. My childhood
              has been dedicated to embarking on a 𝐫𝐞𝐥𝐞𝐧𝐭𝐥𝐞𝐬𝐬 𝐪𝐮𝐞𝐬𝐭 searching
              for beauty through words, numbers and the arts. Then I decided to
              take a stop here at TEDxYouth. I can't wait to share all the
              sparks that empowered me with you!❞
            </Font>
          </PurpleGrid>
          <PurpleGrid sx={{ ml: "45px", mr: "45px", flexDirection: "row" }}>
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
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                width: "350px",
                ml: "30px",
              }}
            >
              Minh Hieu
            </Typography>
            <Font
              sx={{
                width: "750px",
              }}
            >
              ❝’𝐒𝐭𝐚𝐫𝐭 𝐬𝐦𝐚𝐥𝐥’ Hello, it’s Minh Hiếu here, and I am so incredibly
              thankful for the chance to stand on such a stage. Truthfully, I
              owed my achievements to those who have gone before me - those who
              have told me to try, so my wish is to be the 𝐞𝐦𝐛𝐞𝐫 that 𝐬𝐭𝐚𝐫𝐭 𝐲𝐨𝐮𝐫
              𝐟𝐢𝐫𝐞.❞
            </Font>
          </PurpleGrid>
          <PurpleGrid sx={{ ml: "45px", mr: "45px", flexDirection: "row" }}>
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                boxShadow: "0px 0px 20px #0B0315",
              }}
              src={KhanhLinh}
            ></Avatar>
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textShadow: "3px 3px #0B0315",
                color: "white",
                width: "350px",
                ml: "30px",
              }}
            >
              Khanh Linh
            </Typography>
            <Font
              sx={{
                width: "750px",
              }}
            >
              ❝My name is Linh, and I love the color 𝐩𝐢𝐧𝐤. I am a dynamic
              individual who thrives on embracing new challenges and
              experiences. I believe that the world is a diverse and vibrant
              tapestry, with each individual representing a 𝐮𝐧𝐢𝐪𝐮𝐞 𝐜𝐨𝐥𝐨𝐫 in the
              𝐬𝐩𝐞𝐜𝐭𝐫𝐮𝐦 𝐨𝐟 𝐡𝐮𝐦𝐚𝐧𝐢𝐭𝐲. ​As a speaker of TEDxYouth@PTNK, my goal is
              to inspire and encourage people to recognize and appreciate their
              own uniqueness.❞
            </Font>
          </PurpleGrid>
        </Grid>
        <Sponsors></Sponsors>
      </Box>
    </>
  );
}
