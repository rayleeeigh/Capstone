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
} from '@chakra-ui/react';
import { MdAccountCircle, MdCircleNotifications } from 'react-icons/md';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
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
          <Link href="/Announcement">Home</Link>
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
            Student Tasks
          </MenuButton>
          <MenuList>
            <Link href="/Grades">
              <MenuItem>Grades</MenuItem>
            </Link>
            <Link href="/Schedule">
              <MenuItem>Schedule</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Flex ml="1vw">
          <Menu>
            <MenuButton
              as={Button}
              fontWeight="normal"
              bg="white"
              _hover={{ background: 'white' }}
              _active={{ background: 'white' }}
            >
              <MdCircleNotifications size="32" />
            </MenuButton>
            <MenuList>
              <Link href="/Login">
                <MenuItem>Logout</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
        <Flex mx="1vw">
          <MdAccountCircle size="32" />
        </Flex>
      </Flex>
    </Flex>
  );
}
