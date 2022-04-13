import { Box } from '@mui/material';
import React from 'react';
import TeacherDashboard from '../../components/AdminComponents/TeacherDashboard/TeacherDashboard';
import Navbar from '../../components/styled/Navbar';

function TeacherPage() {
  return (
    <>
      <Navbar />
      <Box>
        <TeacherDashboard />
      </Box>
    </>
  );
}

export default TeacherPage;
