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
    Select,
    FormControl,
    InputLabel,
    MenuItem,
} from '@mui/material'
import Links from '@mui/material/Link'
import { ITextField, PhoneNumber } from './Signup.style'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

export default function PersonalInformation({
    personalData,
    setPersonalData,
    activeStep,
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
                <ITextField
                    margin="normal"
                    required
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname"
                    autoFocus
                    onChange={handleChange}
                />
                <ITextField
                    margin="normal"
                    required
                    name="middlename"
                    label="Middle Name"
                    id="middlename"
                    autoComplete="middlename"
                    onChange={handleChange}
                />
                <ITextField
                    margin="normal"
                    required
                    name="lastname"
                    label="Last Name"
                    id="lastname"
                    autoComplete="lastname"
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{ display: 'flex' }}>
                <ITextField
                    sx={{ mr: 1 }}
                    margin="normal"
                    required
                    id="gender"
                    label="Gender"
                    name="gender"
                    autoComplete="gender"
                    autoFocus
                    onChange={handleChange}
                />
                {/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Nation</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Nationality"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl> */}
                <ITextField
                    margin="normal"
                    required
                    name="nationality"
                    label="Nationality"
                    id="nationality"
                    autoComplete="nationality"
                    onChange={handleChange}
                />
            </Box>
            <Stack spacing={3}>
                <TextField
                    margin="normal"
                    required
                    name="address"
                    label="Address"
                    id="address"
                    autoComplete="address"
                    fullWidth
                    onChange={handleChange}
                />
                <PhoneNumber
                    name="PhoneNumber"
                    defaultCountry={'ph'}
                    onChange={(value) => {
                        setPersonal({
                            ...personal,
                            ['phone']: value,
                        })
                    }}
                />
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    onChange={handleChange}
                >
                    <DatePicker
                        label="Birthday"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue)
                            setPersonal({
                                ...personal,
                                ['birthdate']: newValue,
                            })
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <TextField
                    margin="normal"
                    required
                    name="birthplace"
                    label="Birthplace"
                    id="birthplace"
                    autoComplete="birthplace"
                    fullWidth
                    onChange={handleChange}
                />
            </Stack>
        </>
    )
}
