import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/styled/Navbar";
import Announcements from "../components/Announcements";

export default function Home() {
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
