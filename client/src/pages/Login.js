import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/buyongLogo.png";
import Logpic from "../assets/Loginpic.png";

function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "gray",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "inline-block",
          margin: "auto",
          padding: "100px",
          backgroundColor: "white",
        }}
      >
        <FlexBox2>
          <Box sx={{ width: "10vw", padding: "20px" }}>
            <img src={Logo} alt='Logo' width={"150px"} />
          </Box>
          <Box>
            <Typography variant='h3'>Buyong High School</Typography>
            <Typography variant='h5'>Web Portal</Typography>
          </Box>
        </FlexBox2>
        <FlexBox>
          <img src={Logpic} alt='Logo' width={"600px"} />

          <Box sx={{ width: "10vw", padding: "20px" }}>
            <Typography variant='h2'>Hatdpg</Typography>
          </Box>
        </FlexBox>
      </Box>
    </Box>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

const FlexBox2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default Login;
