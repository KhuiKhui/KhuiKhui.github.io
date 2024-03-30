import * as React from "react";
import "./index.css";
import LogoBlack from "../ConvertedImages/LogoBlack";
import LogoWhite from "../ConvertedImages/LogoWhite";

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

const drawerWidth = 240;
const navItems = ["About", "Speakers", "Events", "Contact"];

// const Banner = styled(Button)({
//   display: "flex",
//   boxShadow: "20",
//   bgcolor: "#F7D36D",
//   transition: "0.3s",
//   "&:hover": {
//     backgroundColor: "#F7D36D",
//     boxShadow: "20",
//   },
//   "&:active": {
//     boxShadow: "20",
//     backgroundColor: "#F7D36D",
//   },
//   "&:focus": {
//     boxShadow: "20",
//     backgroundColor: "#F7D36D",
//   },
// });
export default function Body(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "#020104" }}>
        <div className="header layer2"></div>
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
            sx={{
              fontSize: "50px",
              marginBottom: "50px",
              marginTop: "30px",
              fontFamily: "Helvetica",
              color: "white",
              fontWeight: "bold",
            }}
          >
            ideas worth spreading.
          </Typography>

          <Typography
            className="banner"
            sx={{
              display: "flex",
              boxShadow: 20,
              bgcolor: "#3A235E",
              width: "65vw",
              height: "25vh",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: "30px 0px 30px 0px",
            }}
          >
            <LogoWhite />
          </Typography>
        </Box>
        {/* <div style={{ width: "98.9vw", height: "45vh" }}>
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
            <OrthographicCamera
              makeDefault
              zoom={1}
              top={200}
              bottom={-200}
              left={200}
              right={-200}
              near={1}
              far={2000}
              position={[0, 0, 200]}
            />
            <Model position={[0, 0, 10]}></Model>
          </Canvas>
        </div> */}
        <Register></Register>

        <div className="spacer layer1"></div>
        <Grid
          container
          disableEqualOverflow
          columnSpacing={3}
          sx={{
            p: "5px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            bgcolor: "#180933",
          }}
        >
          <Grid
            className="info"
            sx={{
              p: "10px",
              bgcolor: "#271445",
              color: "#E2D9F1",
              borderRadius: "50px",
              ml: "27px",
              mt: "50px",
              boxShadow: "10",
              border: "2px solid #36187B",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
              }}
            >
              About TEDx.
            </Typography>
            <br></br>
            <Typography
              variant="h4"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
              }}
            >
              x = independently organized event
            </Typography>
            <br></br>
            <Typography
              variant="b1"
              sx={{ padding: "5px", fontFamily: "Helvetica" }}
            >
              In the spirit of ideas worth spreading, <b>TEDx</b> is a program
              of local, self-organized events that bring people together to
              share a TED-like experience. At a <b>TEDx</b> event, TED Talks
              video and live speakers combine to spark deep discussion and
              connection. These local, self-organized events are branded{" "}
              <b>TEDx</b>, where x = independently organized TED event. The TED
              Conference provides general guidance for the <b>TEDx</b> program,
              but individual TEDx events are self-organized. (Subject to certain
              rules and regulations.)
            </Typography>
          </Grid>
          <Grid
            className="info"
            sx={{
              p: "10px",
              bgcolor: "#3A235E",
              color: "#E2D9F1",
              borderRadius: "50px",
              ml: "20px",
              mt: "100px",
              boxShadow: "10",
              border: "2px solid #36187B",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
              }}
            >
              About us.
            </Typography>
            <br></br>
            <Typography
              variant="h4"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
              }}
            >
              Who are we?
            </Typography>
            <br></br>
            <Typography
              variant="b1"
              sx={{ padding: "5px", fontFamily: "Helvetica" }}
            >
              𝐓𝐄𝐃𝐱𝐘𝐨𝐮𝐭𝐡@𝐏𝐓𝐍𝐊 is established as an independently organized TED
              event at VNU-HCM High School for the gifted. We are one of the
              first high schools in 𝐇𝐨 𝐂𝐡𝐢 𝐌𝐢𝐧𝐡 𝐂𝐢𝐭𝐲 to hold a TEDx event, fully
              in 𝐄𝐧𝐠𝐥𝐢𝐬𝐡. Our mission is to embrace curiosity and diversity in
              the journey of pursuing knowledge. In addition, we aim to spark
              imagination and catalyze impact, in TED's spirit “𝐈𝐝𝐞𝐚𝐬 𝐰𝐨𝐫𝐭𝐡
              𝐬𝐩𝐫𝐞𝐚𝐝𝐢𝐧𝐠”.
            </Typography>
          </Grid>
          <Grid
            className="info"
            sx={{
              p: "10px",
              bgcolor: "#271445",
              color: "#E2D9F1",
              borderRadius: "50px",
              ml: "20px",
              mt: "50px",
              boxShadow: "10",
              border: "2px solid #36187B",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
              }}
            >
              Our theme.
            </Typography>
            <br></br>
            <Typography
              variant="h4"
              sx={{
                padding: "5px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
              }}
            >
              Why us?
            </Typography>
            <br></br>
            <Typography
              variant="b1"
              sx={{ padding: "5px", fontFamily: "Helvetica" }}
            >
              Our mission is to embrace curiosity and diversity in the journey
              of pursuing knowledge. In addition, we aim to spark imagination
              and catalyze impact, in TED's spirit “𝐈𝐝𝐞𝐚𝐬 𝐰𝐨𝐫𝐭𝐡 𝐬𝐩𝐫𝐞𝐚𝐝𝐢𝐧𝐠”.
              Sometimes things that you undoubtedly believe may turn out to be
              just a fallacy. There’s no actual right or wrong, black or white,
              and you’re stuck in that middle gray area. So, as you can see,
              nothing is really “crystal clear”, but rather, "𝐂𝐫𝐲𝐬𝐭𝐚𝐥 𝐔𝐧𝐜𝐥𝐞𝐚𝐫".
            </Typography>
          </Grid>
        </Grid>

        <div className="spacer layer2"></div>
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
          }}
        >
          Our speakers.
        </Typography>
        <Grid
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
          <Grid>
            <Avatar sx={{ width: "200px", height: "200px" }}>H</Avatar>
          </Grid>
          <Grid>
            <Avatar
              sx={{ bgcolor: "#FFFFCB", width: "200px", height: "200px" }}
            >
              N
            </Avatar>
          </Grid>
          <Grid>
            <Avatar
              sx={{ bgcolor: "#FFFFCB", width: "200px", height: "200px" }}
            >
              OP
            </Avatar>
          </Grid>
          <Grid>
            <Avatar
              sx={{ bgcolor: "#FFFFCB", width: "200px", height: "200px" }}
            >
              OP
            </Avatar>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
