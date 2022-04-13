/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import AdminContentCards from '../adminDashboard/AdminContentCards';

function StudentCardDashboard({ students }) {
  useEffect(() => {
    console.log(students);
  }, [])
  
  return (
    <Box>
      <Grid container spacing={3}>
        {students.map((stud) => (
          <Grid item key={stud.id}>
            <AdminContentCards Cardcontent={stud.id +' '+stud.firstname} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StudentCardDashboard;
