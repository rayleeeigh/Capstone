import { Button, Flex, Image, Text, Input } from '@chakra-ui/react';
import Link from 'next/link';
import LoginForm from '../components/Login/LoginForm';

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
