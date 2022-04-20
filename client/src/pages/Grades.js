import React from "react";
import Navbar from "../components/styled/Navbar";
import { Body } from "../components/styled/Body"
import Table from "../components/Grades/Table"
import { Box } from '@mui/material';

export default function Grades() {
  return (
    <>
      <Navbar />
      <Body>
        <Box sx={{padding: "4rem"}}>
          <Table/>
        </Box>
      </Body>
    </>
  );
}
