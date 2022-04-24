import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import Navbar from "../components/styled/Navbar";
import Announcements from "../components/Announcements";
import AuthContext from "../context/AuthProvider";

export default function Home() {
  const currentUser = useContext(AuthContext);

  useEffect(()=>{
    console.log(currentUser);
  },[currentUser]);

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
