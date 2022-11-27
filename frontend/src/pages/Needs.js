import React, { useRef, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Background from "./../assets/background.jpg";
import { NavLink } from "react-router-dom";

const styles = {
  input: { width: 500, marginY: 2 },
  button: { width: 300, marginY: 2 },
};

const Needs = () => {
  const [mancare, setMancare] = useState(false);

  const handleMancare = (event) => {
    setMancare(event.target.checked);
  };

  const [slujba, setSlujba] = useState(false);

  const handleSlujba = (event) => {
    setSlujba(event.target.checked);
  };

  const [haine, setHaine] = useState(false);

  const handleHaine = (event) => {
    setHaine(event.target.checked);
  };

  const [cazare, setCazare] = useState(false);

  const handleCazare = (event) => {
    setCazare(event.target.checked);
  };

  const [sanatate, alteleSanatate] = useState(false);

  const handleSanatate = (event) => {
    setCazare(event.target.checked);
  };
  const [altele, alteleCazare] = useState(false);

  const handleAltele = (event) => {
    setCazare(event.target.checked);
  };
  return (
    <Container
      style={{
        marginTop: "120px",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          sx={{ pb: 10 }}
        >
          <Grid
            container
            direction="column"
            alignItems="left"
            sx={{
              maxWidth: "100%",
              borderWidth: 1,
              borderColor: "#000E40",
              borderStyle: "solid",
              paddingX: 10,
              borderRadius: 3,
            }}
          >
            <Grid item>
              <Typography
                fontFamily={"sans-serif"}
                fontSize={35}
                fontWeight="700"
                sx={{
                  marginBottom: 2,
                  marginTop: 2,
                  color: "black",
                  backgroundColor: "white",
                }}
              >
                Cu ce te putem ajuta?
              </Typography>
            </Grid>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={mancare}
                    onChange={handleMancare}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Mancare"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={slujba}
                    onChange={handleSlujba}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Slujba"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={haine}
                    onChange={handleHaine}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Haine"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cazare}
                    onChange={handleCazare}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Cazare"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sanatate}
                    onChange={handleSanatate}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Probleme sanatăte"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={altele}
                    onChange={handleAltele}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Altele"
              />
            </FormGroup>
            <Button
              variant="contained"
              sx={{ marginY: 3, backgroundColor: "#015265" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Needs;
