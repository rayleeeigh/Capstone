/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
// import StudentContentCards from './StudentContentCards';
// import TeacherContentCard from './TeacherContentCard';
import TeacherContentCard from './TeacherContentCards';

function TeacherCardDashboard({ teachers, getAll }) {
  return (
    <Box>
      <Grid container spacing={3}>
        {teachers.map((teacher) => (
          <Grid item key={teacher.id}>
            <TeacherContentCard
              Cardcontent={teacher.name}
              teachers={teacher}
              getAll={getAll}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TeacherCardDashboard;
