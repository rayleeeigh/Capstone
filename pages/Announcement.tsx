import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import React from 'react';
import AnnouncementCard from '../components/Announcements/AnnouncementCard';
import { AuthContext } from '../AuthContext/AuthContext';
import parseCookies from '../lib/auth'

export default function Announcement({cookies}) {
  const [announcements, setAnnouncements] = useState([]);
  const authContext = useContext(AuthContext);
  const { setUser } = authContext;

  useEffect(() => {
    axios.get('api/announcements/getAnnouncements').then(function (response) {
      setAnnouncements(response.data);
    });
    setUser(JSON.parse(cookies.user))
  }, []);

  const addAnnouncement = async () => {
    axios
      .post('api/announcements/postAnnouncements')
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.error(err);
      });
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
        <Button onClick={addAnnouncement}>Add Announcement</Button>
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
    }
  }

  return {
    props: {cookies}
  }
}
