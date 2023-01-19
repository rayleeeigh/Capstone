import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SignupForm from '../components/Signup/SignupForm';
import parseCookies from '../lib/auth'

export default function Signup() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex
        w="50vw"
        h="100vh"
        bg="gray.200"
        alignItems="center"
        justifyContent="center"
      >
        <SignupForm/>
      </Flex>
      <Flex w="50vw" h="100vh" alignItems="center" justifyContent="center">
        <Image
          src="https://i.ibb.co/K69pSjw/undraw-true-friends-c94g-1.png"
          alt="Friends Picture"
        />
      </Flex>
    </Flex>
  );
}


export async function getServerSideProps({ req }) {
  const cookies = await parseCookies(req);

  if (Object.keys(cookies).length > 0) {
    return {
      redirect: {
        destination: '/Announcement',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
}