import { Grid, Typography } from "@mui/material";
import Recomandare from "../components/Recomandari/Recomandare";

const DUMMY_DATA = [
  {
    categorie: "Cazare",
    data: new Date(1978, 5, 5),
    nume: "Elon",
    locatie: "Timisoara",
    contact: "0735162122",
  },
  {
    categorie: "Mâncare",
    data: new Date(1956, 5, 5),
    nume: "Daniela",
    locatie: "Timisoara",
    contact: "0745162122",
  },
  {
    categorie: "Slujbă",
    data: new Date(1990, 7, 5),
    nume: "Carmen",
    locatie: "Timisoara",
    contact: "0745165122",
  },
  {
    categorie: "Haine",
    data: new Date(1991, 5, 5),
    nume: "Ionela",
    locatie: "Timisoara",
    contact: "0745262122",
  },
];

const Recomandari = () => {
  return (
    <Grid container justifyContent="center">
      <Typography
        variant="h2"
        gutterBottom
        fontWeight="500"
        color="black"
        sx={{
          backgroundColor: "white",
          paddingTop: 3,
          paddingBottom: 6,
          paddingX: 7,
          borderRadius: 10,
        }}
      >
        Recomandarile noastre pentru tine
      </Typography>
      <Grid item display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {DUMMY_DATA.map((plan) => (
          <Recomandare
            dateFurnizor={plan}
            style={{
              marginBottom: 2,
              width: 522,
              height: 235,
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Recomandari;
