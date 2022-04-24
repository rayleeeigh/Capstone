import * as React from "react";
import { TextField, Box, Grid, Typography, Stack, Avatar, Stepper, Step, StepLabel, Button } from "@mui/material";
import Links from "@mui/material/Link";
import { ITextField, PhoneNumber } from "./Signup.style"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function ContactInformation(){
  const [value, setValue] = React.useState(null);
  return(
    <>
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Email'
            type='password'
            id='password'
            autoComplete='current-password'
            fullWidth
          />
        <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Contact Number'
            type='password'
            id='password'
            autoComplete='current-password'
            fullWidth
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Guardian Name'
            type='password'
            id='password'
            autoComplete='current-password'
            fullWidth
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Guardian Address'
            type='password'
            id='password'
            autoComplete='current-password'
            fullWidth
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Guardian Contact Number'
            type='password'
            id='password'
            autoComplete='current-password'
            fullWidth
          />
    </>
  )
}