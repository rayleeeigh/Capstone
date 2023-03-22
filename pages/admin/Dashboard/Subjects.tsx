import {
    Avatar,
    Button,
    Flex,
    Heading,
    Text,
    useDisclosure,
    useToast,
  } from '@chakra-ui/react';
  import axios from 'axios';
  import React, { useContext, useEffect, useState } from 'react';
  import { AuthContext } from '../../../AuthContext/AuthContext';
  import AdminLayout from '../../../layouts/adminLayout';
  import parseCookies from '../../../lib/auth';
  import DashboardScreen from '../../../screens/Admin/Dashboard';
  
  export default function SubjectsPage({ cookies, userInfo }) {
    const [announcements, setAnnouncements] = useState([]);
    const authContext = useContext(AuthContext);
    const { setUser, user } = authContext;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const [refreshList, setRefreshList] = useState<boolean>(false);
  
    useEffect(() => {
      setUser(JSON.parse(cookies.user));
    }, [cookies.user, setUser]);
  
    return (
      <AdminLayout>
        <Flex
          mt="4vh"
          w="80vw"
          h="80vh"
          bg="white"
          boxShadow="lg"
          alignItems="center"
          flexDirection="column"
          overflowY="scroll"
          p="1rem"
        >
          <Heading py="4vh"> ADMIN DASHBOARD</Heading>
          <DashboardScreen />
        </Flex>
      </AdminLayout>
    );
  }
  
  export async function getServerSideProps({ req }) {
    const cookies = await parseCookies(req);
  
    if (Object.keys(cookies).length === 0) {
      return {
        redirect: {
          destination: '/Login',
          permanent: false,
        },
      };
    }
  
    return {
      props: { cookies },
    };
  }
  