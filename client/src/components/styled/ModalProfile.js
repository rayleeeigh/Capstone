import React, { useContext, useEffect, useState } from 'react'
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
import { AuthContext } from '../../context/auth'
import { Close } from '@mui/icons-material'

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
    const { user } = useContext(AuthContext)
    const [opens, setOpen] = React.useState(false)
    const [sectionName, setSectionName] = useState('')
    const [sectionYear, setSectionYear] = useState('')

    useEffect(() => {
        console.log(user, 'HAHAHAH')
    }, [])

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
                        Name: {user.email}
                    </Typography>
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