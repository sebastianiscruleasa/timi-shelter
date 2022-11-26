import React, { useRef, useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const styles = {
  input: { width: 500, marginY: 2 },
  button: { width: 300, marginY: 2 },
};

export function Login(props) {
  const { open, onClose } = props;
  const username = useRef(null);
  const password = useRef(null);

  return (
    <Modal>
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
                    Autentifica-te!
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  ref={username}
                  id="outlined-basic"
                  defaultValue={""}
                  label="Nume utilizator"
                  variant="outlined"
                  sx={styles.input}
                />
              </Grid>
              <Grid item>
                <TextField
                  inputRef={password}
                  id="outlined-basic"
                  defaultValue={""}
                  label="Parola"
                  variant="outlined"
                  sx={styles.input}
                />
              </Grid>
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
                        Autentificare
                      </NavLink>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
}
