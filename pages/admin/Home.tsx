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
import { hasAccess } from '../../constants/routes';


export default function HomePage({ cookies, userInfo }) {
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
      >
        <Heading py="4vh">ADMIN HOME</Heading>
      </Flex>
    </Layout>
  );
}

export async function getServerSideProps({ req, resolvedUrl }) {
  const cookies = await parseCookies(req);

  if (cookies.user == null) {
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
