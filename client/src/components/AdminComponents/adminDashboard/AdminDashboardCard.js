import React, { useState } from 'react';
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
} from '@mui/material';
import { Link } from 'react-router-dom';

function AdminDashboardCard({ CardHeader, CardContents }) {
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
      <Card sx={{ width: '300px' }}>
        <CardActionArea
          onClick={anchorEl == null ? handlePopoverOpen : handlePopoverClose}
          onMouseLeave={handlePopoverClose}>
          <CardMedia
            component={'img'}
            height="140"
            image="https://assets-homepages-learning.3plearning.net/wp-content/uploads/2020/06/blog-20-student-engagement-strategies-captivating-classroom.png"
            alt="Students"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {CardHeader}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {CardContents}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={'/admin/'+ CardHeader}><Button size="small" color="primary">
            View All
          </Button>
          </Link>
          
        </CardActions>
      </Card>
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus>
        <Box sx={{ width: '100%' }}>
          <Stack>
            <Box>
              <Typography>{CardHeader}</Typography>
            </Box>
            <Divider />
            <Box sx={{ justifyContent: 'center' }}>
              <Stack>
                <Box
                  sx={{
                    padding: 4,
                    backgroundColor: 'ghostwhite',
                  }}>
                  <Stack spacing={2}>
                    <Typography>Subject Population</Typography>
                    <LinearProgress variant="determinate" value={50} />
                    <LinearProgress variant="determinate" value={50} />
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
