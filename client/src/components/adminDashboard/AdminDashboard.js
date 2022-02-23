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
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";

function AdminDashboard() {
  const min = useMediaQuery("(min-width:800px");
  return (
    <Container sx={{ padding: 5 }}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Grid container justifyContent={"center"} spacing={4}>
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
          <Grid
            container
            sx={{
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "50px 20px 50px 20px",
                boxShadow: "0px 1px 1px gray",
              }}
            >
              <Stack spacing={5}>
                <Typography>Year Levels</Typography>

                <Box
                  sx={{
                    justifyItems: "center",
                    width: "100%",
                  }}
                >
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1bh-content'
                      id='panel1bh-header'
                    >
                      <Typography sx={{ width: "20%", flexShrink: 0 }}>
                        General settings
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        I am an accordion
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1bh-content'
                      id='panel1bh-header'
                    >
                      <Typography sx={{ width: "20%", flexShrink: 0 }}>
                        General settings
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        I am an accordion
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack direction={min ? "row" : "column"} spacing={5}>
                        <Card sx={{ maxWidth: 200 }}>
                          <CardMedia
                            component='img'
                            height='140'
                            image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Germanvegetariansausage.jpg/1200px-Germanvegetariansausage.jpg'
                            alt='green iguana'
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                            >
                              Lizard
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                          </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 200 }}>
                          <CardMedia
                            component='img'
                            height='140'
                            image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Germanvegetariansausage.jpg/1200px-Germanvegetariansausage.jpg'
                            alt='green iguana'
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                            >
                              Lizard
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                          </CardActions>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminDashboard;
