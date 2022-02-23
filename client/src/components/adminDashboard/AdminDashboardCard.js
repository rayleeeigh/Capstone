import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Popover,
  Stack,
  Box,
  Divider,
  LinearProgress,
} from "@mui/material";

function AdminDashboardCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea
          onClick={anchorEl == null ? handlePopoverOpen : handlePopoverClose}
        >
          <CardMedia
            component={"img"}
            height='140'
            image='https://assets-homepages-learning.3plearning.net/wp-content/uploads/2020/06/blog-20-student-engagement-strategies-captivating-classroom.png'
            alt='Students'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
        </CardActions>
      </Card>
      <Popover
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box sx={{ width: "100%" }}>
          <Stack>
            <Box>
              <Typography>Subjects</Typography>
            </Box>
            <Divider />
            <Box sx={{ justifyContent: "center" }}>
              <Stack>
                <Box
                  sx={{
                    padding: 4,
                    backgroundColor: "ghostwhite",
                  }}
                >
                  <Stack spacing={2}>
                    <Typography>Subject Population</Typography>
                    <LinearProgress variant='determinate' value={50} />
                    <LinearProgress variant='determinate' value={50} />
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Popover>
    </>
  );
}

export default AdminDashboardCard;
