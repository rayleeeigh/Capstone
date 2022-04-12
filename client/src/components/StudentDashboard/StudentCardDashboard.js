import React from 'react';
import { Box, Grid } from '@mui/material';
import AdminContentCards from '../AdminDashboard/AdminContentCards';

function StudentCardDashboard({ students }) {
  return (
    <Box>
      <Grid container spacing={3}>
        {students.map((stud) => (
          <Grid item key={stud}>
            <AdminContentCards Cardcontent={stud.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StudentCardDashboard;
