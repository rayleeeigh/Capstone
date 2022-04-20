import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import {
  ContentBox,
  FlexibleBox,
  MainGrid,
} from '../adminDashboard/AdminDashboard.styled';
import styled from 'styled-components';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import StudentCardDashboard from './StudentCardDashboard';
import StudentListDashboard from './StudentListDashboard';
import { Link } from 'react-router-dom';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ModalContent from './Modal';

function StudentDashboard() {
  const [dataView, setDataView] = useState(false);
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const aRef = collection(db, 'students');

  const getAll = async () => {
    const data = await getDocs(aRef);
    setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container sx={{ padding: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <FlexibleBox>
            <Typography variant={'h4'} fontWeight="bold">
              DASHBOARD
            </Typography>
            <Link to={'/Admin'}>
              <Typography variant={'h6'} color="blue">
                Back to Dashboard
              </Typography>
            </Link>
          </FlexibleBox>
        </Grid>
        <Grid item xs={12}>
          <MainGrid container>
            <ContentBox>
              <Stack spacing={5}>
                <FlexibleBox>
                  <Box>
                    <Typography variant="h5" fontWeight={'bold'}>
                      STUDENTS
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      onClick={() => {
                        setDataView(false);
                      }}>
                      <GridViewIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setDataView(true);
                      }}>
                      <ViewListIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setOpen(true);
                      }}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                    <ModalContent
                      open={open}
                      handleClose={() => {
                        setOpen(false);
                      }}
                      content={
                        <Box>
                          <Typography>Hatdog</Typography>
                        </Box>
                      }
                      title="Add a section"
                    />
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </FlexibleBox>
                {dataView === false ? (
                  <StudentCardDashboard students={students} getAll={getAll} />
                ) : (
                  <StudentListDashboard />
                )}
              </Stack>
            </ContentBox>
          </MainGrid>
        </Grid>
      </Grid>
    </Container>
  );
}

export const FlexBox = styled.div`
  display: flex;
`;

export default StudentDashboard;
