import React, { useRef, useContext } from "react";
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
import { useNavigate } from "react-router";
import AuthContext from "./../store/auth-context";

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
  const cnp1 = useRef(null);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = () => {
    const payload_data = {
      firstName: lastName.current["value"],
      email: firstName.current["value"],
      phoneNumber: phoneNumber.current["value"],
      address: cnp.current["value"],
      identificationNumber: cnp1.current["value"],
    };
    console.log(payload_data);
    fetch("http://localhost:8080/userProfile/createUserProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload_data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Register failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(true, "CLIENT", firstName.current["value"]);
        onClose();
        navigate("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
                sx={{ position: "absolute", top: 8, left: 4, pl: 74, pt: 1.5 }}
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
                        inputRef={lastName}
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
                        label="Adresa de email"
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
                        label="Adresa"
                        defaultValue={""}
                        inputRef={cnp}
                        variant="outlined"
                        sx={styles.input}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="outlined-basic"
                        label="CUI"
                        defaultValue={""}
                        inputRef={cnp1}
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
                            onClick={submitHandler}
                            sx={[
                              styles.button,
                              {
                                marginBottom: 4,
                                borderRadius: 25,
                                backgroundColor: "#015265",
                                "&:hover": {
                                  backgroundColor: "#015265",
                                },
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
