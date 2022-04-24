import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { PrimaryButton, Cover } from "../components/Login/Login.style";
import { CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography, Fab } from "@mui/material";
import Links from "@mui/material/Link";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../context/AuthProvider"
import { auth } from "../firebase"

export default function Login() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const user = useContext(AuthContext);
  let navigate = useNavigate();

  const signin = async() => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(()=>{
        navigate("/Home");
      })
    } catch (error) {
      alert(`${error.code}: ${error.message}`)
    }
  }

  return (
    <Grid container component='main' sx={{ height: "100vh" }}>
      <CssBaseline />
      <Cover xs={false} sm={2} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src='https://i.ibb.co/xFWmPt9/logo.png'
            sx={{ width: 80, height: 80 }}
          />
          <Typography component='h1' variant='h5'>
            Buyong High School Portal
          </Typography>
          <Box
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              autoFocus
              label="Email"
              onChange={e=>setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              label="Password"
              onChange={e=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
              <PrimaryButton variant='contained' onClick={signin}>Sign in</PrimaryButton>

            <Grid container>
              <Grid item xs>
                <Links href='#' variant='body2'>
                  Forgot password?
                </Links>
              </Grid>
              <Grid item>
                <Links href='/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Links>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "0",
            bottom: "0",
            paddingBottom: "20px",
            paddingRight: "20px",
          }}
        >
          <Fab>
            <QuestionMarkIcon />
          </Fab>
        </Box>
      </Grid>
    </Grid>
  );
}
