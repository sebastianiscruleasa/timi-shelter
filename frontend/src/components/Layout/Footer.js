import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer style={{ postion: "absolute", bottom: 0 }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 3 }}
        bgcolor="#015265"
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            textAlign="center"
          >
            <Grid
              item
              xs={1}
              sm={1}
            >
              <Box
                pt={{ xs: 2 }}
                style={{ color: "#fff" }}
              >
                Informații
              </Box>
            </Grid>
            <Grid
              item
              xs={2}
              sm={1}
              style={{ color: "#fff" }}
            >
              <Box pt={{ xs: 2 }}>Donații</Box>
            </Grid>
            <Grid
              item
              xs={3}
              sm={1}
              style={{ color: "#fff" }}
            >
              <Box pt={{ xs: 2 }}>Sponsori</Box>
            </Grid>

            <Box
              textAlign="center"
              pt={{ xs: 5 }}
              pl={{ xs: 26 }}
              style={{ color: "#fff" }}
            >
              Timi-shelter &reg; {new Date().getFullYear()}
            </Box>
            <Box
              textAlign="center"
              pt={{ xs: 4 }}
              pl={{ xs: 30 }}
              style={{ color: "#fff" }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  paddingInline: 5,
                }}
              >
                <InstagramIcon fontSize="large" />
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  paddingInline: 5,
                }}
              >
                <WhatsAppIcon fontSize="large" />
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  paddingInline: 5,
                }}
              >
                <FacebookIcon fontSize="large" />
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  paddingInline: 5,
                }}
              >
                <LinkedInIcon fontSize="large" />
              </Link>
            </Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
