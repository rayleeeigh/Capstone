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
import { AuthContext } from '../../AuthContext/AuthContext';
import { AnnouncementAddModal } from '../../components/Announcements/AnnouncementAddModal';
import Layout from '../../layouts/layout';
import parseCookies from '../../lib/auth';
import { userType } from '../../constants/userType';


export default function AnnouncementsPage({ cookies, userInfo }) {
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
        bg="white"
        boxShadow="lg"
        alignItems="center"
        flexDirection="column"
      >
        <Heading py="4vh"> ADMIN ANNOUNCEMENTS</Heading>
      </Flex>
    </Layout>
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
  }else{
    const user = JSON.parse(cookies.user);

    if(user.type !== userType.admin){
      return {
        redirect: {
          destination: '/Login',
          permanent: false,
        },
      };
    }
  }

  return {
    props: { cookies },
  };
}
