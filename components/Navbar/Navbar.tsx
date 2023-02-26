import {
  Flex,
  Text,
  Spacer,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useToast,
} from '@chakra-ui/react';
import { MdAccountCircle, MdCircleNotifications } from 'react-icons/md';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useCookies } from 'react-cookie';
import Router from 'next/router';
import axios from 'axios';

export default function Navbar() {
  const authContext = useContext(AuthContext);
  const { user, setUser, userInfo, setUserInfo } = authContext;
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const toast = useToast();

  const logout = () => {
    removeCookie('user');
    setUser({});
    toast({
      title: 'Success',
      description: 'Account Successfully logged out.',
      status: 'success',
      duration: 5000,
      position: 'top',
    });
    Router.push('/Login');
  };

  useEffect(() => {
    if (cookies?.user?.account_id) {
      axios
        .get(
          `api/auth/getCurrentUser?accountID=${cookies.user.account_id}&type=${cookies.user.type}`
        )
        .then(function (res) {
          setUserInfo(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push('/Login');
    }
  }, [cookies, setUserInfo]);

  return (
    <Flex
      px="12"
      w="100vw"
      h="8vh"
      boxShadow="lg"
      justifyContent="center"
      alignItems="center"
      bg="white"
    >
      <Flex alignItems="center">
        <Image
          mr="1vw"
          w="4vw"
          h="6vh"
          src="https://i.ibb.co/jZRx5kv/gege.png"
          alt=""
        />
        <Text>Buyong Highschool School</Text>
      </Flex>
      <Spacer />
      <Flex alignItems="center">
        <Text mx="1vw">
          <Link href="/Announcements">Home</Link>
        </Text>
        <Text mx="1vw">
          <Link href="/About">About Us</Link>
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            fontWeight="normal"
            bg="white"
            _hover={{ background: 'white' }}
            _active={{ background: 'white' }}
          >
            {user.type === 1 ? `Student'` : `Teacher'`}s Tasks
          </MenuButton>
          <MenuList>
            <Link href="/Grades">
              <MenuItem>Grades</MenuItem>
            </Link>
            <Link href="/Subjects">
              <MenuItem>Subjects</MenuItem>
            </Link>
            <Link href="/Schedule">
              <MenuItem>Schedule</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Flex ml="1vw">
          <MdCircleNotifications size="32" />
        </Flex>
        <Flex ml="1vw">
          <Menu>
            <MenuButton
              as={Button}
              fontWeight="normal"
              bg="white"
              _hover={{ background: 'white' }}
              _active={{ background: 'white' }}
            >
              <MdAccountCircle size="32" />
            </MenuButton>
            <MenuList>
              <Text ml="12px" color="black">
                Hello {`${userInfo.first_name} ${userInfo.last_name}`}
              </Text>
              <Link href="/Login">
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}
