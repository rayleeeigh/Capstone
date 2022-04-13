import { Box } from '@mui/material';
import React from 'react';
import SubjectDashboard from '../../components/AdminComponents/SubjectDashboard/SubjectDashboard';
import Navbar from '../../components/styled/Navbar';

function SubjectPage() {
  return (
    <>
      <Navbar />
      <Box>
        <SubjectDashboard />
      </Box>
    </>
  );
}

export default SubjectPage;
