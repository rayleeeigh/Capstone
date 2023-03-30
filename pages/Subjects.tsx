import {
  Avatar,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import parseCookies from '../lib/auth';
import SubjectInterface from '../interfaces/SubjectInterface';
import { userType } from '../constants/userType';


export default function Subjects({ cookies }) {
  const [subjects, setSubjects] = useState<SubjectInterface[]>([]);
  const authContext = useContext(AuthContext);
  const { setUser, userInfo } = authContext;

  useEffect(() => {
    axios
      .get('api/subjects/getSubjects', {
        params: {
          year: userInfo.year_level,
        },
      })
      .then(function (response) {
        setSubjects(response.data);
      });
    setUser(JSON.parse(cookies.user));
  }, [cookies, setUser, userInfo.year_level]);

  const addSubject = async () => {
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
        px="8vw"
      >
        <Heading py="4vh">Subjects</Heading>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Subject Name</Th>
              <Th>Subject Teacher</Th>
              <Th>Subject Year</Th>
            </Tr>
          </Thead>
          <Tbody>
            {subjects.map((subject) => (
              <Tr key={subject.subject_id}>
                <Td>
                  <Text>{subject.name}</Text>
                </Td>
                <Td>
                  <Text>Ms. Cañares</Text>
                </Td>
                <Td>
                  <Text>{subject.year}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
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

    if(user.type === userType.admin){
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
