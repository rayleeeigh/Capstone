import React, { useContext } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Snackbar,
  IconButton,
  TextField,
  Stack,
} from '@mui/material';
import { db, auth } from '../../../firebase';
import { collection, addDoc, Timestamp, setDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../../../context/auth';
import { Close } from '@mui/icons-material';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
};
function ModalContent({ open, handleClose, content, title }) {
  const { user } = useContext(AuthContext);
  const [opens, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');

  const handleCloses = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloses}>
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(true);
    await addDoc(collection(db, 'teachers'), {
      firstname: firstname,
      lastname: lastname,
      email: email,
      createdBy: user.uid,
      approvedBy: null,
      createdAt: Timestamp.fromDate(new Date()),
    }).then((res) => {
      setOpen(true);
      console.log(res);
    });
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      'password',
    );
    await setDoc(doc(db, 'users', result.user.uid), {
      uid: result.user.uid,
      firstname: firstname,
      lastname: lastname,
      email: email,
      createdAt: Timestamp.fromDate(new Date()),
      isAuthenticated: false,
      userType: 0,
    });
    // await setDoc(collection(db,'students'),{

    // })
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
          <Stack>
            <TextField
              label="Firstname"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}>
              Firstname
            </TextField>
            <TextField
              label="Lastname"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}>
              Lastname
            </TextField>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}>
              Email
            </TextField>
          </Stack>

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
  );
}

export default ModalContent;
