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
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import AdminContentCards from "./AdminContentCards";
import { ContentBox, MainGrid } from "./AdminDashboard.styled";

function AdminDashboard() {
  return (
    <Container sx={{ padding: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant={"h4"}>DASHBOARD</Typography>
        </Grid>
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
          <MainGrid container>
            <ContentBox>
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
                      <Typography sx={{ width: "25%", flexShrink: 0 }}>
                        General settings
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        200 students
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={5} justifyContent='center'>
                        <Grid item>
                          <AdminContentCards />
                        </Grid>
                        <Grid item>
                          <AdminContentCards />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1bh-content'
                      id='panel1bh-header'
                    >
                      <Typography sx={{ width: "25%", flexShrink: 0 }}>
                        General settings
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        200 students
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={5} justifyContent='center'>
                        <Grid item>
                          <AdminContentCards />
                        </Grid>
                        <Grid item>
                          <AdminContentCards />
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
