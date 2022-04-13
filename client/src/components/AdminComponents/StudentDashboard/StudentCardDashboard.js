/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import StudentContentCards from './StudentContentCards';

function StudentCardDashboard({ students,getAll }) {

  return (
    <Box>
      <Grid container spacing={3}>
        {students.map((stud) => (
          <Grid item key={stud.id}>
            <StudentContentCards Cardcontent={stud.id +' '+stud.firstname} students={stud} getAll={getAll} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StudentCardDashboard;
