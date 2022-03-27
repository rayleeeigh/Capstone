import React, { useState } from 'react';
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
} from '@mui/material';
import ModalProfile from '../ModalProfile';

function AccountCards({ user }) {
  const breakpoint = useMediaQuery('(min-width:550px)');
  const [open, setOpen] = React.useState(false);
  return (
    <Card sx={{ maxWidth: breakpoint ? 200 : '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Germanvegetariansausage.jpg/1200px-Germanvegetariansausage.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <ModalProfile open={open} setOpen={setOpen} />
      </CardActions>
    </Card>
  );
}

export default AccountCards;
