import React, { useRef } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const styles = {
  input: { width: 500, marginY: 2 },
  button: { width: 300, marginY: 2 },
  modal: {
    position: "absolute",
    p: 4,
  },
};

export function InstitutionRegister(props) {
  const { open, onClose } = props;
  const firstName = useRef(null);
  const lastName = useRef(null);
  const phoneNumber = useRef(null);
  const cnp = useRef(null);

  return (
    <Modal open={open} onClose={onClose} sx={{ verticalAlign: "middle" }}>
      <Container sx={styles.modal}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh", width: "100vw" }}
        >
          <Grid item>
            <Grid
              container
              sx={{
                backgroundColor: "#fff",
                borderWidth: 1,
                paddingX: 10,
                borderRadius: 3,
                position: "relative",
              }}
            >
              <Button
                onClick={onClose}
                sx={{ position: "absolute", top: 8, left: 4 }}
              >
                <CloseIcon />
              </Button>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    sx={{
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
                          Inscrieti institutia dumneavoastra
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <TextField
                        ref={lastName}
                        id="outlined-basic"
                        defaultValue={""}
                        label="Nume institutie"
                        variant="outlined"
                        sx={styles.input}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        inputRef={firstName}
                        id="outlined-basic"
                        defaultValue={""}
                        label="Adresa"
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
                        label="Descriere"
                        defaultValue={""}
                        inputRef={cnp}
                        variant="outlined"
                        sx={styles.input}
                      />
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
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
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
}
