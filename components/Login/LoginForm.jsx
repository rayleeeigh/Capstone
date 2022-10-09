import React from 'react';
import { Text, Button, Input, Flex, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

function LoginForm() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      w="36vw"
      h="64vh"
      bg="white"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text mb="4vh">Login to your account</Text>
      <Input w="24vw" mb="4vh" placeholder="Student ID" />
      <Input w="24vw" mb="4vh" placeholder="Password" />
      <a href="/api/auth/login">
        <Button w="24vw">Login</Button>
      </a>
      <Button
        onClick={toggleColorMode}
        color="white"
        bgColor="black"
        variant="solid"
        bottom={10}
        right={10}
        position="absolute"
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Flex>
  );
}

export default LoginForm;
