import { Flex, Heading, Select } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Layout from '../layouts/layout';
import { userType } from '../constants/userType';
import parseCookies from '../lib/auth';
import { hasAccess } from '../constants/routes';



export default function Grades() {
  const [grades, setGrades] = useState([] as any[]);

  useEffect(() => {
    axios.get('api/grades/getGradesOfStudent', {params: {id: 1}}).then(function (response) {
      setGrades(response.data)
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
        <Flex flexDirection="column">
          {/* <Select placeholder="Select Grade Level">
            <option>Grade 7</option>
            <option>Grade 8</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
          </Select> */}
        </Flex>

        <DataTable grades={grades} />
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
