import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/styled/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Box } from "@mui/material";
import {
  ContentBox,
  MainContainer,
} from "../components/styled/ReusableContainers";

function LoginTrail() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 50,
    maxColumns: 8,
  });
  return (
    <>
      <Navbar />
      <MainContainer>
        <ContentBox>
          <Stack spacing={4}>
            <Typography variant='h4'>Login Trail</Typography>
            <Box sx={{ width: "100%", height: "50vh" }}>
              <div style={{ display: "flex", height: "100%" }}>
                <div style={{ flexGrow: 1 }}>
                  <DataGrid {...data} />
                </div>
              </div>
            </Box>
          </Stack>
        </ContentBox>
      </MainContainer>
    </>
  );
}

export default LoginTrail;
