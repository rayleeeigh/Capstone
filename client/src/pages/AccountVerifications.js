import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AccountCards from "../components/AccountVerification/AccountCards";
import AdminContentCards from "../components/AdminDashboard/AdminContentCards";
import Navbar from "../components/styled/Navbar";
import {
  ColumnFlexBox,
  ContentBox,
} from "../components/styled/ReusableContainers";

function AccountVerifications() {
  return (
    <>
      <Navbar />
      <Container sx={{ padding: 5, textAlign: "center" }}>
        <ContentBox>
          <Stack spacing={4}>
            <Typography variant='h4'>Account Verifications</Typography>
            <Box>
              <Grid container spacing={3}>
                <Grid item>
                  <AccountCards />
                </Grid>
                <Grid item>
                  <AccountCards />
                </Grid>
                <Grid item>
                  <AccountCards />
                </Grid>
                <Grid item>
                  <AccountCards />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </ContentBox>
      </Container>
    </>
  );
}

export default AccountVerifications;
