import { Box } from '@mui/system';
import React, { useContext } from 'react';
import Navbar from '../components/styled/Navbar';
import Announcements from '../components/announcement/Announcements';
import { AuthContext } from '../context/auth';
import { Typography } from '@mui/material';

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          backgroundColor: 'ghostwhite',
        }}>
        <Announcements />
      </Box>
    </>
  );
}
