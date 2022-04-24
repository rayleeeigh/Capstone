import React, { useContext, useEffect, useState, useRef } from 'react'
import {
    Modal,
    Box,
    Typography,
    Button,
    Snackbar,
    Alert,
    IconButton,
    TextField,
    Stack,
} from '@mui/material'
import { db, auth, storage } from '../../firebase'
import {
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    Timestamp,
    orderBy,
    setDoc,
    doc,
    getDoc,
    updateDoc,
} from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { AuthContext } from '../../context/auth'
import { Close } from '@mui/icons-material'
import emailjs from '@emailjs/browser'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
function ModalContent({ open, handleClose, content, title }) {
    const form = useRef()
    const { user } = useContext(AuthContext)
    const [opens, setOpen] = React.useState(false)
    const [contents, setContents] = React.useState('')
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: '',
    })

    const handleClick = () => {
        setOpen(true)
    }

    const handleCloses = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloses}
            >
                <Close fontSize="small" />
            </IconButton>
        </React.Fragment>
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setOpen(true);
        await addDoc(collection(db, 'announcements'), {
            content: contents,
            header: 'sayote',
            type: 'principal announcement',
            email: user.email,
            createdBy: user.uid,
            createdAt: Timestamp.fromDate(new Date()),
        }).then((res) => {
            setOpen(false)
            console.log(res)
            emailjs
                .sendForm(
                    'service_tzwkexr',
                    'template_rc1cyq7',
                    values,
                    'Rn1ge1P1VT9uW2aiV'
                )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response)
                    },
                    (error) => {
                        console.log('FAILED...', error)
                    }
                )
        })
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_tzwkexr',
                'template_rc1cyq7',
                form.current,
                'Rn1ge1P1VT9uW2aiV'
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {title}
                    </Typography>
                    <form ref={form} onSubmit={sendEmail}>
                        <Stack space={3}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </Stack>
                    </form>
                    <TextField
                        value={contents}
                        onChange={(e) => {
                            setContents(e.target.value)
                        }}
                    >
                        Input announcement content
                    </TextField>
                    <Button onClick={handleSubmit}>Add Section</Button>
                </Box>
            </Modal>
            <Snackbar
                open={opens}
                autoHideDuration={6000}
                onClose={handleCloses}
                message="Note archived"
                action={action}
            />
        </>
    )
}

export default ModalContent
