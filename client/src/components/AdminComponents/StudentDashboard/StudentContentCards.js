import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,TextField,
  useMediaQuery
} from "@mui/material";
import ModalProfile from "../AccountVerification/ModalProfile";
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
    getDocs,
    updateDoc,
  } from 'firebase/firestore';

function StudentContentCards({ Cardcontent,students,getAll }) {
  const breakpoint = useMediaQuery("(min-width:550px)");
  const [open, setOpen] = React.useState(false);
    const [studentData,setStudentData] = useState('');

    const update = async (id) =>{
        students.firstname = studentData;
        const studUpdate = doc(db, "students", id);
        await updateDoc(studUpdate,students);
        setStudentData('');
        getAll();
    }
    

  return (
    <Card sx={{ maxWidth: breakpoint ? 200 : "100%" }}>
      <CardMedia
        component='img'
        height='140'
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Germanvegetariansausage.jpg/1200px-Germanvegetariansausage.jpg'
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {students.firstname}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {Cardcontent} group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
        <TextField label='Update student name Here' onChange={(e)=>{setStudentData(e.target.value)}} />
       
      </CardContent>
      <CardActions>
        <Button size='small' onClick={()=>update(students.id)}>Update</Button>
        <ModalProfile CardContent={Cardcontent} open={open} setOpen={setOpen} />
      </CardActions>
    </Card>
  );
}

export default StudentContentCards;
