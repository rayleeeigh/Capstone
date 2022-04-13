import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/styled/Navbar";
import Footer from "../components/styled/Footer";
import Announcements from "../components/announcement/Announcements";
import AdminDashboard from "../components/adminDashboard/AdminDashboard";
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
