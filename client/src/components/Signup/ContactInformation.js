/* eslint-disable react/jsx-no-duplicate-props */
import * as React from 'react'
import {
    TextField,
    Box,
    Grid,
    Typography,
    Stack,
    Avatar,
    Stepper,
    Step,
    StepLabel,
    Button,
} from '@mui/material'
import Links from '@mui/material/Link'
import { ITextField, PhoneNumber } from './Signup.style'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

export default function ContactInformation({personal,setPersonal,handleChange}) {
    const [value, setValue] = React.useState(null)
    React.useEffect(() => {
        console.log(personal)
    }, [personal])
    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="contactNumber"
                label="Contact Number"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="guardianName"
                label="Guardian Name"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="guardianAddress"
                label="Guardian Address"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="guardianContactNumber"
                label="Guardian Contact Number"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
            />
        </>
    )
}
