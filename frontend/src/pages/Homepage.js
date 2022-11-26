import {
  Container,
  Button,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import PovertyPhoto from "../assets/NoPoverty.png";
import HealthPhoto from "../assets/Health.png";
import WorkPhoto from "../assets/Work.png";
import InequalitiesPhoto from "../assets/ReducedInequalities.png";
import Carousel from "react-bootstrap/Carousel";

function Homepage() {
  return (
    <Container maxWidth="xl">
      <Carousel style={{ paddingTop: "20px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.canadahelps.org/media/Socks-4-Souls_Giving-Life-Blog_Decmeber-2020_Featured-Image..png"
            alt="First slide"
            style={{ borderRadius: "25px", maxHeight: "670px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://missioncommunityservices.com//wp-content/uploads/2020/01/homeless-outreach-widget.jpg"
            alt="Second slide"
            style={{ borderRadius: "25px", maxHeight: "670px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.gtcf.org/wp-content/uploads/homelessness_must_end.png"
            alt="Third slide"
            style={{ borderRadius: "25px", maxHeight: "670px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Grid
        container
        paddingTop={6}
        justifyContent="space-evenly"
      >
        <Button
          variant="contained"
          size="large"
          sx={{ fontSize: 30, textTransform: "none", width: 330 }}
        >
          Am nevoie de ajutor
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ fontSize: 30, textTransform: "none", width: 330 }}
        >
          Vreau sa ajut
        </Button>
      </Grid>
      <Grid
        container
        paddingY={10}
        justifyContent="center"
      >
        <Grid
          item
          md={2}
          display="flex"
          direction="column"
          justifyContent="center"
        >
          <Box
            sx={{
              backgroundImage: `url(${PovertyPhoto})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "70%",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Typography
            textAlign="center"
            sx={{ color: "#e5233d", fontWeight: 700, fontSize: "25px" }}
          >
            Eradicarea
            <Typography
              textAlign="center"
              sx={{ color: "#e5233d", fontWeight: 700, fontSize: "25px" }}
            >
              sărăciei
            </Typography>
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          display="flex"
          direction="column"
          justifyContent="center"
        >
          <Box
            sx={{
              backgroundImage: `url(${HealthPhoto})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "70%",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Typography
            textAlign="center"
            sx={{ color: "#4da147", fontWeight: 700, fontSize: "25px" }}
          >
            Sănătate și bună stare
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          padding={5}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: 700, fontSize: "30px" }}
            gutterBottom
          >
            Misiunea noastra
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Cat ipsum dolor sit amet, run up and down stairs but play time woops
            poop hanging from butt must get rid run run around
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          display="flex"
          direction="column"
          justifyContent="center"
        >
          <Box
            sx={{
              backgroundImage: `url(${InequalitiesPhoto})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "70%",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Typography
            textAlign="center"
            sx={{ color: "#e11482", fontWeight: 700, fontSize: "25px" }}
          >
            Reducerea diferențelor
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          display="flex"
          direction="column"
          justifyContent="center"
        >
          <Box
            sx={{
              backgroundImage: `url(${WorkPhoto})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "70%",
              backgroundPosition: "center center",
            }}
          ></Box>
          <Typography
            textAlign="center"
            sx={{ color: "#a21d44", fontWeight: 700, fontSize: "25px" }}
          >
            Creștere{" "}
            <Typography
              textAlign="center"
              sx={{ color: "#a21d44", fontWeight: 700, fontSize: "25px" }}
            >
              economică
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Homepage;
