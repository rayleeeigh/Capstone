import  React,{useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, CardHeader, TextField } from "@mui/material";
import {deleteDoc, doc,updateDoc} from 'firebase/firestore';
import { db, auth, storage } from '../../firebase';

export default function AnnouncementCard({content,getAll}) {
  const [updated,setUpdated]=useState('');

  const deleteData = async (id) =>{
    const annDelete = doc(db, "announcements", id);
    await deleteDoc(annDelete);
    getAll();
  }

  const updateData = async (id) =>{
    const annUpdate = doc(db, "announcements", id);
    content.content=updated;
    console.log(content.content);
    await updateDoc(annUpdate,content);
    
    getAll();
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined' sx={{ borderRadius: "10px" }}>
        <CardHeader
          avatar={<Avatar />}
          title={"Hatdogi ni oh"}
          subheader='Principal'
        />
        <CardContent sx={{ textAlign: "Center" }}>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant='h5' component='div'>
            {content.content} {content.id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            adjective
          </Typography>
          <Typography variant='body2'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <TextField value={updated} onChange={(e)=>{setUpdated(e.target.value)}} label='Update Content Here' >Update Content</TextField>
        </CardContent>
        <CardActions>
          <Button size='small'>See Full Announcement</Button>
          <Button size='small' onClick={(e)=>{deleteData(content.id)}}>Delete Announcement </Button>
          <Button size='small' onClick={(e)=>{updateData(content.id)}}>Update Announcement </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
