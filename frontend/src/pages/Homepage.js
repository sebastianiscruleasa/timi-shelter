import { Container, Button, Grid, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomepagePhoto from "../assets/homeless.jpeg";

function Homepage() {
  return (
    <Container maxWidth="xl">
      <Grid container paddingY={5}>
        <Grid item md={8} paddingX={5}>
          <Typography variant="h3" sx={{ textAlign: "center" }} gutterBottom>
            Misiunea noastra
          </Typography>
          <Typography>
            Cat ipsum dolor sit amet, run up and down stairs but play time woops
            poop hanging from butt must get rid run run around house drag poop
            on floor maybe it comes off woops left brown marks on floor human
            slave clean lick butt now. Cat meoooow i iz master of hoomaan, not
            hoomaan master of i, oooh damn dat dog snuggles up to shoulders or
            knees and purrs you to sleep put butt in owner's face and cough push
            your water glass on the floor chase mice, or peer out window,
            chatter at birds, lure them to mouth. Destroy the blinds{" "}
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Box
            alignSelf="center"
            sx={{
              backgroundImage: `url(${HomepagePhoto})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100%",
              backgroundPosition: "center center",
            }}
          ></Box>
        </Grid>
        <Grid container paddingTop={8}>
          <Grid item md={8} display="flex" justifyContent="space-evenly">
            <Button variant="outlined">I need help</Button>
            <Button variant="outlined">I want to help</Button>
          </Grid>
          <Grid item md={4}>
            <Typography
              variant="subtitle2"
              sx={{ fontStyle: "italic" }}
              textAlign="center"
            >
              "Face and cough push your water glass on the floor chase mice, or
              peer out window, chatter at birds, lure them to mouth"
            </Typography>
          </Grid>
        </Grid>
        <Typography textAlign="center">
          <NavLink
            to={`/login`}
            style={{
              textDecoration: "none",
              display: "block",
            }}
          >
            Ai deja cont? Autentifica-te!
          </NavLink>
        </Typography>
      </Grid>
    </Container>
  );
}

export default Homepage;
