import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import React from 'react';

export default function Announcement() {
  return (
    <Layout>
      <Flex h="92vh" w="100vw" flexDirection="column">
        <Flex
          h="40vh"
          w="100vw"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            position="absolute"
            w="16vw"
            h="20vh"
            src="https://i.ibb.co/jZRx5kv/gege.png"
            alt="image2"
          />
          <Image
            w="100vw"
            h="40vh"
            src="https://i.ibb.co/f9VyxmD/101437826-114057670323532-5750187153158045696-n.jpg"
            alt="image3"
          />
        </Flex>
        <Flex
          px="20"
          h="50vh"
          w="100vw"
          bg="white"
          justifyContent="center"
          alignItems="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Flex>
      </Flex>
    </Layout>
  );
}
