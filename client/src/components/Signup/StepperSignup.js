import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PersonalInformation from './PersonalInformation'
import FamilyInformation from './FamilyInformation'
import ContactInformation from './ContactInformation'
import { db, storage } from '../../firebase'
import { addDoc, doc, setDoc, Timestamp, collection } from 'firebase/firestore'
import {
    ref,
    getDownloadURL,
    uploadBytesResumable,
    uploadBytes,
} from 'firebase/storage'
import FormInformation from './FormInformation'

const steps = [
    'Personal Information',
    'Family Information',
    'Contact Information',
    'Form Information',
]

export default function StepperSignup() {
    const [activeStep, setActiveStep] = React.useState(0)
    const [skipped, setSkipped] = React.useState(new Set())
    const [personalData, setPersonalData] = React.useState([])
    const [personal, setPersonal] = React.useState({})
    const [image, setImage] = React.useState('')
    const [progresspercent, setProgresspercent] = React.useState(0)
    const handleChange = (event) => {
        setPersonal({ ...personal, [event.target.name]: event.target.value })
    }

    const uploadToFirebase = async () => {
        //1.
        if (image) {
            //2.
            const storageRef = ref(storage, image.name)
            //3.
            // const imageRef = storageRef.child(image.name)
            //4.
            uploadBytes(storageRef, image).then((snapshot) => {
                console.log('Uploaded a blob or file!')
            })
        } else {
            alert('Please upload an image first.')
        }
    }

    const addData = (data) => {
        setPersonalData([...personalData, data])
    }

    const isStepOptional = (step) => {
        return step === 1
    }

    const isStepSkipped = (step) => {
        return skipped.has(step)
    }

    const handleNext = async () => {
        renderForms()
        let newSkipped = skipped
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values())
            newSkipped.delete(activeStep)
        }
        if (activeStep === steps.length - 1) {
            uploadToFirebase()
                .then(() => {
                    console.log('haha')
                })
                .catch((err) => {
                    console.error(err)
                })

            const result = await addDoc(collection(db, 'users'), {
                ...personal,
                createdAt: Timestamp.fromDate(new Date()),
                isAuthenticated: false,
                userType: 2,
            })

            console.log(result)
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped(newSkipped)
    }

    const renderForms = () => {
        if (activeStep === 0) {
            return (
                <PersonalInformation
                    personalData={personalData}
                    setPersonalData={setPersonalData}
                    activeStep={activeStep}
                    personal={personal}
                    setPersonal={setPersonal}
                    handleChange={handleChange}
                />
            )
        } else if (activeStep === 1) {
            return (
                <FamilyInformation
                    personal={personal}
                    setPersonal={setPersonal}
                    handleChange={handleChange}
                />
            )
        } else if (activeStep === 2) {
            return (
                <ContactInformation
                    personal={personal}
                    setPersonal={setPersonal}
                    handleChange={handleChange}
                />
            )
        } else if (activeStep === 3) {
            return (
                <FormInformation
                    personal={personal}
                    setPersonal={setPersonal}
                    handleChange={handleChange}
                    setImage={setImage}
                />
            )
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        console.log(activeStep)
    }

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.")
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values())
            newSkipped.add(activeStep)
            return newSkipped
        })
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {}
                    const labelProps = {}
                    if (isStepSkipped(index)) {
                        stepProps.completed = false
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {renderForms()}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button
                                color="inherit"
                                onClick={handleSkip}
                                sx={{ mr: 1 }}
                            >
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext} type="submit">
                            {activeStep === steps.length - 1
                                ? 'Finish'
                                : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    )
}
