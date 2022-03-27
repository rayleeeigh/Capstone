import React from "react";
import { Box, Grid } from "@mui/material";
import AdminContentCards from "../AdminDashboard/AdminContentCards";

function StudentCardDashboard() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item>
          <AdminContentCards Cardcontent={"Hatdogi ni oh"} />
        </Grid>
        <Grid item>
          <AdminContentCards Cardcontent={"Layata ni oh"} />
        </Grid>
        <Grid item>
          <AdminContentCards Cardcontent={"Baragi ni oh"} />
        </Grid>
        <Grid item>
          <AdminContentCards Cardcontent={"Redhorsi ni oh"} />
        </Grid>
        <Grid item>
          <AdminContentCards Cardcontent={"Hatdogi ni oh"} />
        </Grid>
        <Grid item>
          <AdminContentCards Cardcontent={"Hatdogi ni oh"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentCardDashboard;
