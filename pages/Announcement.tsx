import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import React from 'react';
import AnnouncementCard from '../components/Announcements/AnnouncementCard';
interface Test {
  test: string;
}
export default function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  const request = {
    params: {
      foo: [5, 2, 11],
    },
  };
  useEffect(() => {
    axios
      .get('api/announcements/getAnnouncements', { params: { hello: 'test' } })
      .then((response) => {
        setAnnouncements(response.data);
      });
  }, []);

  const addAnnouncement = async () => {
    axios
      .post('api/announcements/postAnnouncements', { test: 'heelllo' })
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
