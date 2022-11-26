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
    categorie: "Mâncare",
    data: new Date(2023, 5, 5),
    nume: "Cantina UPT",
    locatie: "Timisoara",
    contact: "0745162122",
  },
  {
    categorie: "Slujbă",
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
];

const Plans = () => {
  return (
    <Grid
      container
      justifyContent="center"
    >
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
        Planul nostru pentru tine
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
