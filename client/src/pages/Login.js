import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { PrimaryButton, Cover } from '../components/Login/Login.style';
import {
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
  Fab,
} from '@mui/material';
import Links from '@mui/material/Link';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {'Copyright © '}
      <Links color="inherit" href="https://mui.com/">
        E-Skwela
      </Links>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
    error: null,
    loading: false,
  });

  const history = useNavigate();

  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: 'All fields are required' });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      // await updateDoc(doc(db, 'users', result.user.uid), {
      //   isOnline: true,
      // });

      if (result.user.isAuthenticated === false) {
        console.log('not authenticated');
      }
      setData({
        email: '',
        password: '',
        error: null,
        loading: false,
      });
      console.log(result);
      history('/');
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Cover xs={false} sm={2} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar
            src="https://i.ibb.co/xFWmPt9/logo.png"
            sx={{ width: 80, height: 80 }}
          />
          <Typography component="h1" variant="h5">
            Buyong High School Portal
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Student ID"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={handleChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <PrimaryButton variant="contained" type="submit">
              Sign in
            </PrimaryButton>

            <Grid container>
              <Grid item xs>
                <Links href="#" variant="body2">
                  Forgot password?
                </Links>
              </Grid>
              <Grid item>
                <Links href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Links>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            paddingBottom: '20px',
            paddingRight: '20px',
          }}>
          <Fab>
            <QuestionMarkIcon />
          </Fab>
        </Box>
      </Grid>
    </Grid>
  );
}
