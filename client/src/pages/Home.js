import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/styled/Navbar";
import Footer from "../components/styled/Footer";
import Announcements from "../components/Announcements";

function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "ghostwhite",
        }}
      >
        <Announcements />
      </Box>
    </>
  );
}

export default Home;
