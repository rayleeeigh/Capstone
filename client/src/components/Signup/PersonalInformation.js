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

export default function PersonalInformation() {
    const [value, setValue] = React.useState(null)
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ITextField
                    margin="normal"
                    required
                    id="email"
                    label="First Name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <ITextField
                    margin="normal"
                    required
                    name="password"
                    label="Middle Name"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <ITextField
                    margin="normal"
                    required
                    name="password"
                    label="Last Name"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Box>
            <Box sx={{ display: 'flex' }}>
                <ITextField
                    sx={{ mr: 1 }}
                    margin="normal"
                    required
                    id="email"
                    label="Gender"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <ITextField
                    margin="normal"
                    required
                    name="password"
                    label="Nationality"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Box>
            <Stack>
                <TextField
                    margin="normal"
                    required
                    name="password"
                    label="Address"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    fullWidth
                />
                <PhoneNumber defaultCountry={'ph'} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Birthday"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <TextField
                    margin="normal"
                    required
                    name="password"
                    label="Birthplace"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    fullWidth
                />
            </Stack>
        </>
    )
}
