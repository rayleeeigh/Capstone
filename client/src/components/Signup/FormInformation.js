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
    Input,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material'
import Links from '@mui/material/Link'
import { ITextField, PhoneNumber } from './Signup.style'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

export default function FormInformation({
    personal,
    setPersonal,
    handleChange,
    setImage,
    image,
}) {
    React.useEffect(() => {
        console.log(image)
    }, [image])

    const onImageChange = (e) => {
        const reader = new FileReader()
        let file = e.target.files[0] // get the supplied file
        // if there is a file, set image to that file
        if (file) {
            reader.onload = () => {
                if (reader.readyState === 2) {
                    console.log(file)
                    setImage(file)
                }
            }
            reader.readAsDataURL(e.target.files[0])
            // if there is no file, set image back to null
        } else {
            setImage(null)
        }
    }

    return (
        <>
            <Stack spacing={3}>
                <Typography variant="h4">ENTER FORMS HERE</Typography>
                <FormControl>
                    <Input
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        id="password"
                        type="file"
                        autoComplete="current-password"
                        onChange={(e) => {
                            onImageChange(e)
                        }}
                    />
                    <FormHelperText>Enter your Form</FormHelperText>
                </FormControl>
            </Stack>
        </>
    )
}
