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
import AdminDashboardLayout from '../../../layouts/adminDashboardLayout';
import Layout from '../../../layouts/layout';
import parseCookies from '../../../lib/auth';
import DashboardScreen from '../../../screens/Admin/Dashboard/Sections';
import StudentsScreen from '../../../screens/Admin/Dashboard/Students';
import { userType } from '../../../constants/userType';
import { hasAccess } from '../../../constants/routes';


export default function StudentsPage({ cookies, userInfo }) {
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
    <Layout>
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
        <AdminDashboardLayout>
          <StudentsScreen />
        </AdminDashboardLayout>
      </Flex>
    </Layout>
  );
}

export async function getServerSideProps({ req, resolvedUrl }) {
  const cookies = await parseCookies(req);

  if (Object.keys(cookies).length === 0) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      },
    };
  }else{
    const user = JSON.parse(cookies.user);
    const res = hasAccess(resolvedUrl, user.type)
    if(!res.hasAccess){
      return {
        redirect: {
          destination: res.path,
          permanent: false,
        },
      };
    }
  }

  return {
    props: { cookies },
  };
}
