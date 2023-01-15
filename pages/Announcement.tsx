import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import React from 'react';

export default function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    axios.get('api/announcements/getAnnouncements').then(function (response) {
      setAnnouncements(response.data);
    });
  }, []);

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
              <Flex alignItems="center">
                <Avatar size="sm" mr="1vw" />
                <Text fontWeight="bold">{res.title}</Text>
              </Flex>
              <Text>{res.content}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
}
