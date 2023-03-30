import { Flex } from '@chakra-ui/layout';
import Navbar from '../components/Navbar/Navbar';
import AdminNavbar from '../components/Navbar/AdminNavbar';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { userType } from '../constants/userType';
import {useRouter} from 'next/router';
import parseCookies from '../lib/auth';



export default function Layout({ children }) {
  const { user } = useContext(AuthContext);

  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="gray.100"
      flexDirection="column"
      alignItems="center"
    >
      {user.type === userType.admin ? 
      (
        <AdminNavbar />
      ) : 
      (
        <Navbar />
      )
      }
      {children}
    </Flex>
  );
}
