import React, { useRef, useState, useContext } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Modal,
  Checkbox,
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

export function Register(props) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const { open, onClose } = props;
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);
  const address = useRef(null);
  const cnp = useRef(null);
  const varsta = useRef(null);
  const [goodCitizen, setGoodCitizen] = useState(false);
  const handleGoodCitizen = (event) => {
    setGoodCitizen(event.target.checked);
  };

  const submitHandler = () => {
    const payload_data = {
      username: "timi",
      firstName: firstName.current["value"],
      lastName: lastName.current["value"],
      email: email.current["value"],
      phoneNumber: phoneNumber.current["value"],
      address: address.current["value"],
      identificationNumber: cnp.current["value"],
      age: varsta.current["value"],
      userType: 'person',
      isGoodCitizen: goodCitizen,
    };

    fetch("http://localhost:8080/userProfile/createUserProfile", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
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
    <Modal open={open} onClose={onClose} sx={{ verticalAlign: "middle"}}>
      <Container sx={styles.modal}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh", width: "100vw",overflow: "auto" }}
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
                sx={{ position: "absolute", top: 8, left: 4, pl: 82, pt: 1.5 }}
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
                            color: "#015265",
                          }}
                        >
                          Alatura-te comunitatii noastre!
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <TextField
                        inputRef={lastName}
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
                        inputRef={email}
                        id="outlined-basic"
                        defaultValue={""}
                        label="Email"
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
                        inputRef={address}
                        defaultValue={""}
                        label="Adresa"
                        variant="outlined"
                        sx={styles.input}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="outlined-basic"
                        label="CNP"
                        defaultValue={""}
                        inputRef={cnp}
                        variant="outlined"
                        sx={styles.input}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="outlined-basic"
                        label="Varsta"
                        defaultValue={""}
                        inputRef={varsta}
                        variant="outlined"
                        sx={styles.input}
                      />
                    </Grid>
                    <Grid item>
                      <Grid container alignItems={"center"}>
                        <Grid item>
                          <Checkbox
                            size="medium"
                            checked={goodCitizen}
                            onChange={handleGoodCitizen}
                          />
                        </Grid>
                        <Grid item>
                          <Typography>
                            Doresc sa creez acest cont pentru a ajuta o alta
                            persoana
                          </Typography>
                        </Grid>
                      </Grid>
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
                                backgroundColor: "#015265",
                              },
                            ]}
                            onClick={submitHandler}
                            size="large"
                            variant="contained"
                          >
                            Creeaza cont
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
