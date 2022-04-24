import React, { useContext, useEffect, useState } from 'react';
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
} from '@mui/material';
import { db, auth, storage } from '../../../firebase';
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
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { AuthContext } from '../../../context/auth';
import { Close } from '@mui/icons-material';

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
  const [sectionName,setSectionName] = useState('');
  const [sectionYear,setSectionYear] = useState('');
  const handleClick = () => {
    setOpen(true);
  };

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
    // setOpen(true);
    await addDoc(collection(db, 'admin', user.uid, 'sections'), {
      sectionName: sectionName,
      sectionLevel: sectionYear,
      createdBy: user.uid,
      createdAt: Timestamp.fromDate(new Date()),
    }).then((res) => {
      setOpen(true);
      console.log(res);
    });
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
            <TextField label='section name' value={sectionName} onChange={(e)=>{setSectionName(e.target.value)}}>Section</TextField>
            <TextField label='section year' value={sectionYear} onChange={(e)=>{setSectionYear(e.target.value)}}>Section</TextField>
            <Button onClick={handleSubmit}>Add Section</Button>

          </Stack>
          
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
