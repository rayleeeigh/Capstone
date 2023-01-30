import { Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Layout from '../layouts/layout';

export default function Grades() {
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([] as any[]);

  useEffect(() => {
    axios.get('api/subjects/getSubjects').then(function (response) {
      setSubjects(response.data);
      axios
        .get('api/grades/getGrades/subject_id', response.data.subject_id)
        .then(function (response: any) {
          setGrades((grade: any) => [...grade, response.data]);
        });
    });
  }, []);

  return (
    <Layout>
      <Flex
        mt="4vh"
        w="80vw"
        h="80vh"
        bg="white"
        px="12"
        boxShadow="lg"
        alignItems="center"
        flexDirection="column"
      >
        <Heading py="4vh">Grades</Heading>
        <DataTable subjects={subjects} grades={grades} />
      </Flex>
    </Layout>
  );
}
