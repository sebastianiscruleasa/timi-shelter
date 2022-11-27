import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
function Plan(props) {
  const { style } = props;
  const { categorie, data, nume, locatie, contact } = props.dateFurnizor;
  var imagine;
  switch (categorie) {
    case "Mâncare":
      imagine =
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg";
      break;
    case "Cazare":
      imagine =
        "https://www.noozhawk.com/images/made/images/uploads/082421-Lompoc-Pallet-Houses-1-SG_2400_1600_80_s_c1.jpeg";
      break;
    case "Slujbă":
      imagine =
        "https://edway.edu.au/wp-content/uploads/2020/05/Apprenticeships-And-Jobs-For-School-Leavers.jpg";
      break;
    case "Haine":
      imagine =
        "https://www.loveyourclothes.org.uk/sites/default/files/styles/responsive/public/lyc-campaigns-website-header-1600.jpg?itok=DLdKu9UI";
      break;
    default:
      imagine =
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_872576234_379413.jpg";
  }
  const options = { dateStyle: "short" };
  const newDate = data.toLocaleString("en-GB", options);
  console.log(style);
  return (
    <Card
      component="span"
      sx={[
        {
          boxShadow: 0,
          border: "2px solid",
          borderColor: "grey",
          borderRadius: "10px",
          marginX: "40px",
        },
        style,
      ]}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "270px",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h4"
            >
              {categorie}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {newDate}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {nume}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {locatie}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {contact}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={imagine}
          alt="Healthy food"
        />
      </Box>
    </Card>
  );
}

export default Plan;
