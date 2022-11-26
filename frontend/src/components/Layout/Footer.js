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
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 3 }} bgcolor="#E6E6EB">
        <Container maxWidth="lg">
          <Grid container spacing={5} textAlign="center" pb={{ xs: 3, sm: 1 }}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Contact
                </Link>
              </Box>
              <Box>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Support
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Login
                </Link>
              </Box>
              <Box>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Idkkk</Box>
              <Box>
                <Link
                  to="/"
                  style={{
                    color: "#000",
                    textDecoration: "none",
                  }}
                >
                  Idkkk
                </Link>
              </Box>
              <Box>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Idkkk
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pb={{ xs: 1, sm: 1 }} pt={{ xs: 5, sm: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                paddingInline: 5,
              }}
            >
              <InstagramIcon fontSize="large" />
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                paddingInline: 5,
              }}
            >
              <WhatsAppIcon fontSize="large" />
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                paddingInline: 5,
              }}
            >
              <FacebookIcon fontSize="large" />
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                paddingInline: 5,
              }}
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Box>
          <Box textAlign="center" pb={{ xs: 5, sm: 0 }}>
            Timi-shelter &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
