import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import parseCookies from '../lib/auth'
import SubjectInterface from '../interfaces/SubjectInterface'

export default function Subjects({cookies}) {
  const [subjects, setSubjects] = useState<SubjectInterface[]>([]);
  const authContext = useContext(AuthContext);
  const { setUser } = authContext;

  useEffect(() => {
    axios.get('api/subjects/getSubjects',{
        params: {
          year: 7
        }
      }).then(function (response) {
      setSubjects(response.data);
    });
    setUser(JSON.parse(cookies.user))
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
        <Heading py="4vh">Subjects</Heading>
        <Flex flexDirection="column" w="70vw" h="54vh" overflowY="auto">
          {subjects.map((subject) => (
            <Text key={subject.subject_id}>{subject.name}</Text>
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
