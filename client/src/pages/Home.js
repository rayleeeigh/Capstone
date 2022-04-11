import { Box } from '@mui/system';
import React, { useContext } from 'react';
import Navbar from '../components/styled/Navbar';
import Announcements from '../components/Announcements';
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
        <Typography variant={'h1'}>hello {user.email}</Typography>
        <Announcements />
      </Box>
    </>
  );
}
