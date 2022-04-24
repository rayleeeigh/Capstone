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
import { ITextField, PTextField, PhoneNumber } from './Signup.style'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

export default function FamilyInformation() {
    const [value, setValue] = React.useState(null)
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <PTextField
                    margin="normal"
                    required
                    id="email"
                    label="Mother First Name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <PTextField
                    margin="normal"
                    required
                    name="password"
                    label="Mother Last Name"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <PTextField
                    margin="normal"
                    required
                    id="email"
                    label="Occupation"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <PTextField
                    margin="normal"
                    required
                    name="password"
                    label="Contact Number"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <PTextField
                    margin="normal"
                    required
                    id="email"
                    label="Father First Name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <PTextField
                    margin="normal"
                    required
                    name="password"
                    label="Father Last Name"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <PTextField
                    margin="normal"
                    required
                    id="email"
                    label="Occupation"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <PTextField
                    margin="normal"
                    required
                    name="password"
                    label="Contact Number"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Box>
        </>
    )
}
