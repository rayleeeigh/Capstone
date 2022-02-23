import * as React from "react";
import { Link } from "react-router-dom/";
import Avatar from "@mui/material/Avatar";
import { PrimaryButton, Cover } from "../components/Login.style";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Links from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {"Copyright © "}
      <Links color='inherit' href='https://mui.com/'>
        E-Skwela
      </Links>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Student ID'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Link to={"/Home"}>
              <PrimaryButton variant='contained'>Sign in</PrimaryButton>
            </Link>

            <Grid container>
              <Grid item xs>
                <Links href='#' variant='body2'>
                  Forgot password?
                </Links>
              </Grid>
              <Grid item>
                <Links href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Links>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
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
