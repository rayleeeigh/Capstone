import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React,{useEffect,useState,useContext} from "react";
import AnnouncementCard from "./AnnouncementCard";
import { FlexBox } from "../StudentDashboard/StudentDashboard";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { db, auth, storage } from '../../firebase';
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
import { AuthContext } from '../../context/auth';
import ModalContent from "./Modal";

function Announcements() {
  const [open,setOpen] = useState(false);
  const secRef = collection(db, 'announcements');
  const q = query(secRef, orderBy('createdAt', 'asc'));
  const [announcements,setAnnouncements] = useState([]);
  const { user } = useContext(AuthContext);
  const [id,setId] = useState('');
  const aRef = collection(db, "announcements");

  const getAnn = async () => {
    const data = await getDocs(aRef);
    console.log(data.docs);
    setAnnouncements(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    // onSnapshot(q, (querySnapshot) => {
    //   let announcements = [];
    //   querySnapshot.forEach((doc) => {
    //     announcements.push(doc.data());
    //   });
    //   console.log(announcements);
    //   setAnnouncements(announcements);
    // });
    getAnn();

  }, [])


  
  return (
    <Container sx={{ justifyContent: "center" }}>
      <Stack spacing={5} sx={{ padding: "20px" }}>
        
        <Typography variant='h2' textAlign={"center"} fontWeight='bold'>
          Announcements
        </Typography>
         
        <Stack>
          <Stack direction={'row'} display='flex'>
             <IconButton onClick={()=>{setOpen(true)}}>
            <AddCircleOutlineIcon  />
            </IconButton>
            <ModalContent  open={open}
                      handleClose={() => {
                        setOpen(false);
                      }}
                      content={
                        <Box>
                          
                          <Typography>Hatdog</Typography>
                        </Box>
                      }
                      title="Add a section" />
            <IconButton >
              <DeleteIcon />
            </IconButton>
          </Stack>
         {announcements.map((ann)=>(
           <Box sx={{ padding: "2%" }} key={ann.id}>
            <AnnouncementCard content={ann} getAll={getAnn} />
          </Box>
         ))}
          
        </Stack>
      </Stack>
    </Container>
  );
}

export default Announcements;
