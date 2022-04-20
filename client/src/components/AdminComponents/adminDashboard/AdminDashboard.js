import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useContext, useEffect, useState } from 'react';
import AdminDashboardCard from './AdminDashboardCard';
import AdminContentCards from './AdminContentCards';
import { ContentBox, FlexibleBox, MainGrid } from './AdminDashboard.styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalContent from './Modal';
import { db } from '../../../firebase';
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { AuthContext } from '../../../context/auth';

function AdminDashboard() {
  const [open, setOpen] = useState(false);
  const [sections, setSections] = useState([]);
  const { user } = useContext(AuthContext);
  const aRef = collection(db, "admin",user.uid,"sections");

  // useEffect(() => {
  //   onSnapshot(q, (querySnapshot) => {
  //     let sections = [];
  //     querySnapshot.forEach((doc) => {
  //       sections.push(doc.data());
  //     });
  //     setSections(sections);
  //   });
  // }, [])
  useEffect(() => {
    // onSnapshot(q, (querySnapshot) => {
    //   let announcements = [];
    //   querySnapshot.forEach((doc) => {
    //     announcements.push(doc.data());
    //   });
    //   console.log(announcements);
    //   setAnnouncements(announcements);
    // });
    getSections();
  }, [])


  const getSections = async () => {
    const data = await getDocs(aRef);
    console.log("haha");
    console.log(data.docs);
    setSections(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


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
                CardHeader={'students'}
                CardContents={'200 students'}
              />
            </Grid>
            <Grid item>
              <AdminDashboardCard
                CardHeader={'teachers'}
                CardContents={'20 teachers'}
              />
            </Grid>
            <Grid item>
              <AdminDashboardCard
                CardHeader={'subjects'}
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
                        {sections.map((section) => (
                          <Grid item key={section}>
                            <AdminContentCards
                              Cardcontent={section.sectionLevel +' '+section.sectionName}
                            />
                          </Grid>
                        ))}
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
