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
import { useContext, useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import React from 'react';
import AnnouncementCard from '../components/Announcements/AnnouncementCard';
import { AuthContext } from '../AuthContext/AuthContext';
import parseCookies from '../lib/auth';
import { AnnouncementAddModal } from '../components/Announcements/AnnouncementAddModal';

export default function Announcement({ cookies, userInfo }) {
  const [announcements, setAnnouncements] = useState([]);
  const authContext = useContext(AuthContext);
  const { setUser, user } = authContext;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [refreshList, setRefreshList] = useState<boolean>(false);

  useEffect(() => {
    setUser(JSON.parse(cookies.user));
  }, [cookies.user, setUser]);

  useEffect(() => {
    axios.get('api/announcements/getAnnouncements').then((res) => {
      setAnnouncements(res.data);
    });
  }, [refreshList]);

  const addAnnouncement = async () => {
    try {
      axios
        .post('api/announcements/postAnnouncements')
        .then((data) => {
          toast({
            title: 'Success',
            description: 'Announcement Successfully created.',
            status: 'success',
            duration: 5000,
            position: 'top',
          });
          setRefreshList(!refreshList);
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

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
        <Heading py="4vh">Announcements</Heading>
        <AnnouncementAddModal
          refreshList={refreshList}
          setRefreshList={setRefreshList}
        />
        {user.type === 1 ? (
          <></>
        ) : (
          <Button onClick={addAnnouncement}>Add Announcement</Button>
        )}
        <Flex flexDirection="column" w="70vw" h="54vh" overflowY="auto">
          {announcements.map((res: any) => (
            <Flex
              key={res.announcement_id}
              p="4"
              my="2vh"
              w="68vw"
              bg="gray.100"
              h="12vh"
              flexDirection="column"
            >
              <AnnouncementCard announcement={res} />
            </Flex>
          ))}
        </Flex>
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
  }

  return {
    props: { cookies },
  };
}
