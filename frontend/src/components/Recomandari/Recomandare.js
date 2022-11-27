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
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";
      break;
    case "Cazare":
      imagine =
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/D64OUNCBGBMJDE7PYTDAYDDKB4.jpg";
      break;
    case "Slujbă":
      imagine =
        "https://static01.nyt.com/images/2022/05/19/opinion/firstpersonPromo/firstpersonPromo-videoSixteenByNine3000.jpg";
      break;
    case "Haine":
      imagine =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYhoC4eTXBSlNBCwYZ7ZKgtCi3AEF0-po8Q&usqp=CAU";
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
            <Typography component="div" variant="h4">
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
