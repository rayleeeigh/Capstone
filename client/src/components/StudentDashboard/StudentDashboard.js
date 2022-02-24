import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import AdminDashboardCard from '../AdminDashboard/AdminDashboardCard';
import AdminContentCards from '../AdminDashboard/AdminContentCards';
import { ContentBox, MainGrid } from '../AdminDashboard/AdminDashboard.styled';
import styled from 'styled-components';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function StudentDashboard() {
  return (
    <Container sx={{ padding: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant={'h4'}>DASHBOARD</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={'center'} spacing={4}>
            <Grid item>
              <AdminDashboardCard />
            </Grid>
            <Grid item>
              <AdminDashboardCard />
            </Grid>
            <Grid item>
              <AdminDashboardCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <MainGrid container>
            <ContentBox>
              <Stack spacing={5}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                  <Box>
                    <Typography variant="h5" fontWeight={'bold'}>
                      STUDENTS
                    </Typography>
                  </Box>
                  <Box></Box>
                  <Box>
                    <IconButton>
                      <GridViewIcon />
                    </IconButton>
                    <IconButton>
                      <ViewListIcon />
                    </IconButton>
                    <IconButton>
                      <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box
                  sx={{
                    justifyItems: 'center',
                    width: '100%',
                  }}>
                  <Grid container spacing={3}>
                    <Grid item>
                      <AdminContentCards />
                    </Grid>
                    <Grid item>
                      <AdminContentCards />
                    </Grid>
                    <Grid item>
                      <AdminContentCards />
                    </Grid>
                    <Grid item>
                      <AdminContentCards />
                    </Grid>
                    <Grid item>
                      <AdminContentCards />
                    </Grid>
                    <Grid item>
                      <AdminContentCards />
                    </Grid>
                  </Grid>
                </Box>
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
