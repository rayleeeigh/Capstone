import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import AdminDashboardCard from './AdminDashboardCard';
import AdminContentCards from './AdminContentCards';
import { ContentBox, FlexibleBox, MainGrid } from './AdminDashboard.styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function AdminDashboard() {
  return (
    <Container sx={{ padding: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant={'h4'}>DASHBOARD</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={'center'} spacing={4}>
            <Grid item>
              <AdminDashboardCard
                CardHeader={'Students'}
                CardContents={'200 students'}
              />
            </Grid>
            <Grid item>
              <AdminDashboardCard
                CardHeader={'Teachers'}
                CardContents={'20 teachers'}
              />
            </Grid>
            <Grid item>
              <AdminDashboardCard
                CardHeader={'Subjects'}
                CardContents={'8 subjects'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <MainGrid container>
            <ContentBox>
              <Stack spacing={5}>
                <FlexibleBox>
                  <Typography variant="h5">Year Levels</Typography>
                  <Box>
                    <IconButton>
                      <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </FlexibleBox>

                <Box
                  sx={{
                    justifyItems: 'center',
                    width: '100%',
                  }}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header">
                      <Typography sx={{ width: '25%', flexShrink: 0 }}>
                        General settings
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        200 students
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={5} justifyContent="center">
                        <Grid item>
                          <AdminContentCards Cardcontent={'Rayl ni oh'} />
                        </Grid>
                        <Grid item>
                          <AdminContentCards Cardcontent={'Cloya ni oh'} />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header">
                      <Typography sx={{ width: '25%', flexShrink: 0 }}>
                        General settings
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        200 students
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={5} justifyContent="center">
                        <Grid item>
                          <AdminContentCards
                            Cardcontent={
                              <>
                                <Typography variant="h6">
                                  Hello I Am Arnan
                                </Typography>
                                <Typography>I am once</Typography>
                              </>
                            }
                          />
                        </Grid>
                        <Grid item>
                          <AdminContentCards Cardcontent={'Chuya ni oh'} />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Stack>
            </ContentBox>
          </MainGrid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminDashboard;
