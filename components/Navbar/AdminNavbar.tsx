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
  useBreakpoint,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useMediaQuery,
} from '@chakra-ui/react';
import { MdAccountCircle, MdCircleNotifications } from 'react-icons/md';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useCookies } from 'react-cookie';
import Router from 'next/router';
import axios from 'axios';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function AdminNavbar() {
  const authContext = useContext(AuthContext);
  const { user, setUser, userInfo, setUserInfo } = authContext;
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const toast = useToast();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      alignItems="center"
      bg="white"
    >
      {!isLargerThan800 ? (
        <>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            w="100vw"
            mr="-3rem"
            ml="-1rem"
          >
            <HamburgerIcon onClick={onOpen} w={8} h={8} />
            <Image
              w="3rem"
              h="3rem"
              src="https://i.ibb.co/jZRx5kv/gege.png"
              alt=""
            />
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
                  Hello {`${userInfo?.first_name} ${userInfo?.last_name}`}
                </Text>
                <Link href="/Login">
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>

          <Drawer
            placement="left"
            onClose={onClose}
            isOpen={isOpen}
            size={'full'}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Navigation</DrawerHeader>
              <DrawerBody borderWidth="1px">
                <Flex flexDirection="column" gap="1rem">
                  <Link href="/admin/Dashboard">
                    <Text>DASHBOARD</Text>
                  </Link>
                  <Link href="/admin/Announcements">
                    <Text>ANNOUNCEMENTS</Text>
                  </Link>
                  <Link href="/admin/Accounts">
                    <Text>ACCOUNTS</Text>
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
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
                Admin Task
              </MenuButton>
              <MenuList>
                <Link href="/admin/Dashboard">
                  <MenuItem>DASHBOARD</MenuItem>
                </Link>
                <Link href="/admin/Announcements">
                  <MenuItem>ANNOUNCEMENTS</MenuItem>
                </Link>
                <Link href="/admin/Accounts">
                  <MenuItem>ACCOUNTS</MenuItem>
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
        </>
      )}
    </Flex>
  );
}
