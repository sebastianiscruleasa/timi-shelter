import { Container, Button, Grid, Box, Typography } from "@mui/material";
import PovertyPhoto from "../assets/NoPoverty.png";
import HealthPhoto from "../assets/Health.png";
import WorkPhoto from "../assets/Work.png";
import InequalitiesPhoto from "../assets/ReducedInequalities.png";
import Carousel from "react-bootstrap/Carousel";
import { useState, useContext } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { InstitutionRegister } from "./InstitutionRegister";
import { alignProperty } from "@mui/material/styles/cssUtils";
import AuthContext from "../store/auth-context";

function Homepage() {
  const [openModal, setOpenModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openInstitutionRegisterModal, setOpenInstitutionRegisterModal] =
    useState(false);

  const authCtx = useContext(AuthContext);

  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "white", borderRadius: "30px 30px 0" }}
    >
      <Carousel style={{ paddingTop: "20px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.opiniatimisoarei.ro/wp-content/uploads/2022/02/ajutoare-refugiati-728x336.jpg"
            alt="First slide"
            style={{
              borderRadius: "25px",
              maxHeight: "670px",
              filter: "brightness(40%)",
            }}
          />
          <Carousel.Caption sx={{ fontWeight: "300", textAlign: "center" }}>
            <h1>Ajutoare oferite</h1>
            <p>
              În ciuda faptului că organizația este la început de drum am reușit{" "}
              <br></br>
              să oferim până în acest moment ajutor ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://missioncommunityservices.com//wp-content/uploads/2020/01/homeless-outreach-widget.jpg"
            alt="Second slide"
            style={{
              borderRadius: "25px",
              maxHeight: "670px",
              filter: "brightness(40%)",
            }}
          />

          <Carousel.Caption sx={{ fontWeight: "300" }}>
            <h1>Echipa noastră </h1>
            <p>
              Atât angajații cât și voluntarii noștrii străbat străziile
              Timișoarei <br></br>
              încercând să asiste orice persoană cu înregistrarea ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://yesacademy.ro/wp-content/uploads/2022/04/Cum-sa-planifici-un-team-building-in-9-pasi-cu-yes-academy-la-munte-si-mare-imagine-1920x1080-1.jpg"
            alt="Third slide"
            style={{
              borderRadius: "25px",
              maxHeight: "670px",
              filter: "brightness(40%)",
            }}
          />

          <Carousel.Caption sx={{ fontWeight: "300" }}>
            <h1>Cum se intamplă</h1>
            <p>
              Reușim să ajutăm alți oameni pentru că și noi suntem ajutati de
              dumneavoastră,<br></br> atât prin serviciile oferte cât și prin
              donațiile primite ...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Grid container paddingTop={6} justifyContent="space-evenly">
        <Button
          variant="contained"
          size="large"
          sx={{
            fontSize: 30,
            textTransform: "none",
            width: 330,
            backgroundColor: "#015265",
            "&:hover": {
              backgroundColor: "#015265",
            },
            borderRadius: 25,
          }}
          onClick={() => setOpenRegisterModal(true)}
        >
          Am nevoie de ajutor
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{
            fontSize: 30,
            textTransform: "none",
            width: 330,
            backgroundColor: "#015265",
            "&:hover": {
              backgroundColor: "#015265",
            },
            borderRadius: 25,
          }}
          onClick={() => setOpenInstitutionRegisterModal(true)}
        >
          Vreau sa ajut
        </Button>
      </Grid>
      <Grid container justifyContent="center">
        <Button
          variant="text"
          onClick={() => setOpenModal(true)}
          style={{ color: "#015265" }}
        >
          Ai deja cont? Autentifica-te!
        </Button>
      </Grid>
      <Grid container paddingY={5} justifyContent="center">
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
        <Grid item md={4} padding={5}>
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
      <Login open={openModal} onClose={() => setOpenModal(false)} />
      <Register
        open={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      />
      <InstitutionRegister
        open={openInstitutionRegisterModal}
        onClose={() => setOpenInstitutionRegisterModal(false)}
      />
    </Container>
  );
}

export default Homepage;
