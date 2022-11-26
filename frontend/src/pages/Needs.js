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

  return (
    <Container
      style={{
        marginTop: "120px",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems="center"
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
                fontSize={28}
                fontWeight="700"
                sx={{
                  marginBottom: 2,
                  marginTop: 2,
                  color: "#015265",
                }}
              >
                Ce dorinte ai?
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
