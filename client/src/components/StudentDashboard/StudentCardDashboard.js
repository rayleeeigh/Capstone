import React from "react";
import { Box, Grid } from "@mui/material";
import AdminContentCards from "../AdminDashboard/AdminContentCards";

function StudentCardDashboard() {
  return (
    <Box>
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
  );
}

export default StudentCardDashboard;
