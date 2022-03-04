import { Box } from '@mui/material';
import React from 'react';
import StudentDashboard from '../components/StudentDashboard/StudentDashboard';
import Navbar from '../components/styled/Navbar';

function AdminStudents() {
  return (
    <>
      <Navbar />
      <Box>
        <StudentDashboard />
      </Box>
    </>
  );
}

export default AdminStudents;
