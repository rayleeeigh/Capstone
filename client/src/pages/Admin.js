import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/styled/Navbar";
import Footer from "../components/styled/Footer";
import Announcements from "../components/Announcements";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
function Admin() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "ghostwhite",
        }}
      >
        <AdminDashboard />
      </Box>
    </>
  );
}

export default Admin;
