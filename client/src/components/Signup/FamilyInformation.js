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

export default function FamilyInformation({
    personal,
    setPersonal,
    handleChange,
}) {
    const [value, setValue] = React.useState(null)
    React.useEffect(() => {
        console.log(personal)
    }, [personal])

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <PTextField
                    margin="normal"
                    required
                    id="email"
                    label="Mother First Name"
                    name="motherFirstname"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                />
                <PTextField
                    margin="normal"
                    required
                    name="motherLastname"
                    label="Mother Last Name"
                    type="text"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <PTextField
                    margin="normal"
                    required
                    id="email"
                    label="Occupation"
                    name="motherOccupation"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                />
                <PTextField
                    margin="normal"
                    required
                    name="motherContactnumber"
                    label="Contact Number"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <PTextField
                    margin="normal"
                    required
                    id="fatherFirstname"
                    label="Father First Name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                />
                <PTextField
                    margin="normal"
                    required
                    name="fatherLastname"
                    label="Father Last Name"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <PTextField
                    margin="normal"
                    required
                    id="email"
                    label="Occupation"
                    name="fatherOccupation"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                />
                <PTextField
                    margin="normal"
                    required
                    name="fatherContactnumber"
                    label="Contact Number"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
            </Box>
        </>
    )
}
