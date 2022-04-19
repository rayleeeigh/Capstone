import React, { useContext } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Snackbar,
  IconButton,
  TextField,
} from '@mui/material';
import { db } from '../../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
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
function ModalContent({ open, handleClose, content, title, getAll }) {
  const { user } = useContext(AuthContext);
  const [opens, setOpen] = React.useState(false);
  const [data, setData] = React.useState('');

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
    await addDoc(collection(db, 'subjects'), {
      name: data,
      createdBy: user.uid,
      approvedBy: null,
      createdAt: Timestamp.fromDate(new Date()),
    }).then((res) => {
      setOpen(false);
      handleClose();
      console.log(res);
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
          <TextField
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}>
            Email
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
  );
}

export default ModalContent;
