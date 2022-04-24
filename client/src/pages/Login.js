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
<<<<<<< HEAD
            sx={{ mt: 1 }}
          >
=======
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}>
>>>>>>> 58d6df76cccbb44fc8ed628b155de43b7369a694
            <TextField
              margin="normal"
              required
              fullWidth
<<<<<<< HEAD
=======
              id="email"
              label="Student ID"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="email"
>>>>>>> 58d6df76cccbb44fc8ed628b155de43b7369a694
              autoFocus
              label="Email"
              onChange={e=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
<<<<<<< HEAD
              label="Password"
              onChange={e=>setPassword(e.target.value)}
=======
              value={password}
              onChange={handleChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
>>>>>>> 58d6df76cccbb44fc8ed628b155de43b7369a694
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
<<<<<<< HEAD
              <PrimaryButton variant='contained' onClick={signin}>Sign in</PrimaryButton>
=======

            <PrimaryButton variant="contained" type="submit">
              Sign in
            </PrimaryButton>
>>>>>>> 58d6df76cccbb44fc8ed628b155de43b7369a694

            <Grid container>
              <Grid item xs>
                <Links href="#" variant="body2">
                  Forgot password?
                </Links>
              </Grid>
              <Grid item>
<<<<<<< HEAD
                <Links href='/signup' variant='body2'>
=======
                <Links href="#" variant="body2">
>>>>>>> 58d6df76cccbb44fc8ed628b155de43b7369a694
                  {"Don't have an account? Sign Up"}
                </Links>
              </Grid>
            </Grid>
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
