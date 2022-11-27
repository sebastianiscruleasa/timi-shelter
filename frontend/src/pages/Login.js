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
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router";

const styles = {
  input: { width: 500, marginY: 2 },
  button: { width: 300, marginY: 2 },
  modal: {
    position: "absolute",
    p: 4,
  },
};

export function Login(props) {
  const navigate = useNavigate();
  const authCtx = React.useContext(AuthContext);
  const { open, onClose } = props;
  const username = useRef(null);
  const password = useRef(null);
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ verticalAlign: "middle" }}
    >
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
              direction="column"
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
                sx={{
                  position: "absolute",
                  top: 4,
                  left: 4,
                  paddingLeft: 75,
                  paddingTop: 2,
                }}
              >
                <CloseIcon />
              </Button>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
              >
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
                  inputRef={username}
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
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Button
                      onClick={() => {
                        authCtx.login(true, "CLIENT", username.current.value);
                        onClose();
                        navigate("/acasă", { replace: true });
                      }}
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
