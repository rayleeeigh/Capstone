import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, CardHeader } from "@mui/material";

const card = (
  <React.Fragment>
    <CardContent sx={{ textAlign: "Center" }}>
      <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant='h5' component='div'>
        hatdog
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        adjective
      </Typography>
      <Typography variant='body2'>
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small'>See Full Announcement -&gt;</Button>
    </CardActions>
  </React.Fragment>
);

export default function AnnouncementCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined' sx={{ borderRadius: "10px" }}>
        <CardHeader
          avatar={<Avatar />}
          title={"Hatdogi ni oh"}
          subheader='Principal'
        />
        {card}
      </Card>
    </Box>
  );
}
