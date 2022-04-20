import React from "react";
import Navbar from "../components/styled/Navbar";
import { Body } from "../components/styled/Body"
import { Box } from '@mui/material';
import Calendar from "../components/Schedule/Calendar"

export default function Schedule() {
  return (
    <>
      <Navbar />
      <Body>
        <Box sx={{padding: "4rem"}}>
          <Calendar/>
        </Box>
      </Body>
    </>
  );
}
