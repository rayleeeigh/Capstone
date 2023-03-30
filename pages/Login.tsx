import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import { userType } from '../constants/userType';
import parseCookies from '../lib/auth';
import { hasAccess } from '../constants/routes';

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50vw" h="100vh" alignItems="center" justifyContent="center">
        <Image
          src="https://i.ibb.co/K69pSjw/undraw-true-friends-c94g-1.png"
          alt="Friends Picture"
        />
      </Flex>
      <Flex
        w="50vw"
        h="100vh"
        bg="gray.200"
        alignItems="center"
        justifyContent="center"
      >
        <LoginForm />
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps({ req, resolvedUrl }) {
  const cookies = await parseCookies(req);

  if (Object.keys(cookies).length > 0) {
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
    props: {},
  };
}
