import Grid from "@mui/material/Unstable_Grid2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import USAS from "../images/sponsor_images/usas.jpg";
import AS from "../images/sponsor_images/as.png";
import JOINote from "../images/sponsor_images/joi_note.jpg";

import {
  Typography,
  Box,
  Avatar,
  createTheme,
  ThemeProvider,
  styled,
  ButtonBase,
} from "@mui/material";

export default function Sponsors() {
  const SponsorName = styled(Typography)(({ theme }) => ({
    variant: "h2",
    fontSize: "40px",
    fontFamily: "Cormorant Garamond, serif",
    color: "white",
    textShadow: "0px 0px 4px #FFFFFF",
    letterSpacing: "1.5px",

    textAlign: "center",
  }));
  const AvatarSp = styled(Avatar)(({ theme }) => ({
    width: "200px",
    height: "200px",
    boxShadow: "0px 0px 20px #0B0315",
    transition: "all 0.25s",

    "&:hover": {
      scale: "1.1",
    },
  }));
  return (
    <Box sx={{ bgcolor: "#020104" }}>
      <div className="spacer peak1"></div>
      <Box
        sx={{
          bgcolor: "#875DC1", //#39225C
        }}
      >
        <Typography
          variant="h2"
          sx={{
            padding: "5px",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "65px",
            fontWeight: "bold",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            textShadow: "0px 0px 4px #FFFFFF",
          }}
        >
          Special thanks to...
        </Typography>
        <br></br>
        <br></br>
        <Grid
          container
          rowSpacing={5}
          sx={{
            p: "5px",
            mt: "20px",
            ml: "10px",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "column",
              lg: "row",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "25vw",
            }}
          >
            <ButtonBase
              href="https://www.facebook.com/DuHocUSaS"
              target="_blank"
            >
              <AvatarSp src={USAS}></AvatarSp>
            </ButtonBase>
            <br></br>
            <SponsorName>USAS</SponsorName>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "25vw",
            }}
          >
            <ButtonBase
              href="https://www.facebook.com/americanstudy.vietnam"
              target="_blank"
            >
              <AvatarSp src={AS}></AvatarSp>
            </ButtonBase>
            <br></br>
            <SponsorName>American Study</SponsorName>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "25vw",
            }}
          >
            <ButtonBase href="https://www.facebook.com/joinote" target="_blank">
              <AvatarSp src={JOINote}></AvatarSp>
            </ButtonBase>
            <br></br>
            <SponsorName>JOI Note</SponsorName>
          </Grid>
        </Grid>

        <Typography
          variant="h2"
          sx={{
            padding: "5px",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: {
              xs: "55px",
              md: "60px",
              lg: "65px",
            },
            fontWeight: "bold",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              md: "column",
              lg: "row",
            },
            color: "#FFFFFF",
            textShadow: "0px 0px 4px #FFFFFF",
            mt: "60px",
            textAlign: "center",
          }}
        >
          for making{" "}
          <b
            className="ted-color"
            style={{
              textShadow: "0px 0px 4px #D10528",
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          >
            TEDxYouth@PTNK 2024
          </b>
          possible.
        </Typography>
      </Box>

      <div className="peak1 flip spacer"></div>
    </Box>
  );
}
