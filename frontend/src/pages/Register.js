import React, { useRef, useState } from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { NavLink } from "react-router-dom";

const styles = {
  input: { width: 500, marginY: 2 },
  button: { width: 300, marginY: 2 },
};

export function Register() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const phoneNumber = useRef(null);
  const cnp = useRef(null);
  const [value, setValue] = useState(null);
  console.log(cnp);
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Grid
            container
            direction="column"
            sx={{
              maxWidth: "100%",
              borderWidth: 1,
              borderColor: "#000E40",
              borderStyle: "solid",
              paddingX: 10,
              borderRadius: 3,
            }}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Typography
                  fontFamily={"sans-serif"}
                  fontSize={28}
                  fontWeight="700"
                  sx={{
                    marginBottom: 2,
                    marginTop: 2,
                    color: "#000E40",
                  }}
                >
                  Alatura-te comunitatii noastre!
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                ref={lastName}
                id="outlined-basic"
                defaultValue={""}
                label="Nume"
                variant="outlined"
                sx={styles.input}
              />
            </Grid>
            <Grid item>
              <TextField
                inputRef={firstName}
                id="outlined-basic"
                defaultValue={""}
                label="Prenume"
                variant="outlined"
                sx={styles.input}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                inputRef={phoneNumber}
                defaultValue={""}
                label="Numar de telefon"
                variant="outlined"
                sx={styles.input}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="CNP"
                defaultValue={""}
                error
                inputRef={cnp}
                helperText="CNP-ul contine doar cifre."
                variant="outlined"
                sx={styles.input}
              />
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Data nasterii"
                value={value ?? ""}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} sx={styles.input} />
                )}
              />
            </LocalizationProvider>
            <Grid item>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Button
                    sx={[
                      styles.button,
                      {
                        marginBottom: 4,
                        borderRadius: 25,
                        backgroundColor: "#000E40",
                      },
                    ]}
                    size="large"
                    variant="contained"
                  >
                    <NavLink
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                      }}
                    >
                      Creeaza cont
                    </NavLink>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
