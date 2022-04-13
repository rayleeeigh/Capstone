import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  useMediaQuery,
} from '@mui/material';
// import ModalProfile from "../AccountVerification/ModalProfile";
import { db } from '../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

function TeacherContentCard({ Cardcontent, teachers, getAll }) {
  const breakpoint = useMediaQuery('(min-width:550px)');
  const [teacher, setTeacher] = useState('');

  const update = async (id) => {
    teachers.firstname = teacher;
    const studUpdate = doc(db, 'teachers', id);
    await updateDoc(studUpdate, teachers);
    setTeacher('');
    getAll();
  };

  return (
    <Card sx={{ maxWidth: breakpoint ? 200 : '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Germanvegetariansausage.jpg/1200px-Germanvegetariansausage.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {teachers.firstname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Cardcontent}
        </Typography>
        <TextField
          label="Update Subject name Here"
          onChange={(e) => {
            setTeacher(e.target.value);
          }}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => update(teachers.id)}>
          Update
        </Button>
      </CardActions>
    </Card>
  );
}

export default TeacherContentCard;