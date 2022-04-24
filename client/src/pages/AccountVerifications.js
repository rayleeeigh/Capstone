import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AccountCards from '../components/AccountVerification/AccountCards';
import AdminContentCards from '../components/adminDashboard/AdminContentCards';
import Navbar from '../components/styled/Navbar';
import {
  ColumnFlexBox,
  ContentBox,
} from '../components/styled/ReusableContainers';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { db, auth, storage } from '../firebase';

function AccountVerifications() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = collection(db, 'users');
    const q = query(userRef, where('isAuthenticated', '==', false));

    onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
      console.log(users);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Container sx={{ padding: 5, textAlign: 'center' }}>
        <ContentBox>
          <Stack spacing={4}>
            <Typography variant="h4">Account Verifications</Typography>
            <Box>
              <Grid container spacing={3}>
                {users.map((user) => (
                  <Grid item key={user}>
                    <AccountCards user={user} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </ContentBox>
      </Container>
    </>
  );
}

export default AccountVerifications;
