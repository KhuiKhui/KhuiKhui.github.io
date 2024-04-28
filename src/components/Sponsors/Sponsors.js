import Grid from "@mui/material/Unstable_Grid2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Typography, Box } from "@mui/material";

export default function Sponsors() {
  return (
    <Box sx={{ bgcolor: "#020104" }}>
      <div className="spacer peak1"></div>
      <Box
        sx={{
          bgcolor: "#875DC1",
        }}
      >
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
          Special thanks to
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
              [placeholder]
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <div className="spacer peak1 flip"></div>
    </Box>
  );
}
