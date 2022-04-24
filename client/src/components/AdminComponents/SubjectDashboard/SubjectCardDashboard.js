/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
// import StudentContentCards from './StudentContentCards';
import SubjectContentCard from './SubjectContentCards';

function SubjectCardDashboard({ subjects, getAll }) {
  return (
    <Box>
      <Grid container spacing={3}>
        {subjects.map((sub) => (
          <Grid item key={sub.id}>
            <SubjectContentCard
              Cardcontent={sub.name}
              subjects={sub}
              getAll={getAll}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SubjectCardDashboard;
