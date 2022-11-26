import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Plan from "../components/Plan/Plan";

const DUMMY_DATA = [
  {
    categorie: "Cazare",
    data: new Date(2023, 5, 5),
    nume: "Caminul 11C",
    locatie: "Timisoara",
    contact: "0735162122",
  },
  {
    categorie: "Slujba",
    data: new Date(2023, 7, 5),
    nume: "Santier",
    locatie: "Timisoara",
    contact: "0745165122",
  },
  {
    categorie: "Haine",
    data: new Date(2023, 5, 5),
    nume: "Ion John",
    locatie: "Timisoara",
    contact: "0745262122",
  },
  {
    categorie: "Mancare",
    data: new Date(2023, 5, 5),
    nume: "Cantina UPT",
    locatie: "Timisoara",
    contact: "0745162122",
  },
];

const Plans = () => {
  return (
    <Grid
      container
      justifyContent="center"
    >
      <Typography
        variant="h1"
        gutterBottom
      >
        Planul tau
      </Typography>
      <Grid
        item
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        {DUMMY_DATA.map((plan) => (
          <Plan
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

export default Plans;
