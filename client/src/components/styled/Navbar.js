import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import styled from "styled-components";
import SchoolLogo from "../../assets/buyongLogo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Badge,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo className='Logo' href='/home'>
        <div>
          <img className='img' src={SchoolLogo} alt='School Logo' />
        </div>
        <div className='text'>BUYONG NATIONAL HIGHSCHOOL</div>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menus isOpen={isOpen}>
        <MenuLink href='/home'>Announcements</MenuLink>
        <MenuLink href='/about'>About</MenuLink>
        <MenuLink href=''>Faculty</MenuLink>
        <FormControl sx={{ width: "9rem" }}>
          <InputLabel>Student Task</InputLabel>
          <Select label='Student Task'>
            <a href='/grades'>
              <MenuItem>Grades</MenuItem>
            </a>
            <a href='/schedule'>
              <MenuItem>Schedule</MenuItem>
            </a>
            <a href='/Admin'>
              <MenuItem>Admin Dashboard</MenuItem>
            </a>
          </Select>
        </FormControl>
        <Stack direction={"row"} spacing={3}>
          <IconButton>
            <Box>
              <Badge color='primary' badgeContent={0} showZero>
                <NotificationsIcon sx={{ width: "30px", height: "30px" }} />
              </Badge>
            </Box>
          </IconButton>
          <Avatar />
        </Stack>
      </Menus>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #67bc98;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ghostwhite;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 4px 2px 2px black;
  z-index: 5;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: black;
  text-decoration: none;
  font-weight: 900 !important;
  font-size: 1rem;
  font-family: "lato", sans-serif;
  display: flex;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  .img {
    width: 70px;
  }
  .text {
    width: 80px;
  }

  div {
    margin: 5px;
  }

  @media (max-width: 820px) {
    .text {
      display: none;
    }
  }
`;

const Menus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 850px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;

    .user {
      display: none;
    }
  }

  .Row {
    width: 10vw;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 820px) {
    display: flex;
    span {
      background-color: black;
    }
  }
`;
