import { Box } from '@mui/material';
import React from 'react';
import StudentDashboard from '../../components/AdminComponents/StudentDashboard/StudentDashboard';
import Navbar from '../../components/styled/Navbar';

function TeacherPage() {
  return (
    <>
      <Navbar />
      <Box>
        <StudentDashboard />
      </Box>
    </>
  );
}

export default TeacherPage;
