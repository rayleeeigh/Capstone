import React, { useContext } from 'react';
import { Menu, MenuItem, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../../context/AuthProvider';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase'

export default function MenuAvatar(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const user = useContext(AuthProvider);

  function signout(){
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log();
    });
  }

  return (
    <>
      <Avatar
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={signout}>Logout</MenuItem>
      </Menu>
    </>
  )
}