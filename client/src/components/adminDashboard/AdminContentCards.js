import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ModalProfile from "../ModalProfile";

function AdminContentCards({ Cardcontent }) {
  const breakpoint = useMediaQuery("(min-width:550px)");
  const [open, setOpen] = React.useState(false);
  return (
    <Card sx={{ maxWidth: breakpoint ? 200 : "100%" }}>
      <CardMedia
        component='img'
        height='140'
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Germanvegetariansausage.jpg/1200px-Germanvegetariansausage.jpg'
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {Cardcontent} group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <ModalProfile CardContent={Cardcontent} open={open} setOpen={setOpen} />
      </CardActions>
    </Card>
  );
}

export default AdminContentCards;
