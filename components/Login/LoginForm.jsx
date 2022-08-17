import React from 'react'
import {Text,Link,Button,Input, Flex} from '@chakra-ui/react';


function LoginForm() {
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
    <Link href="/Announcement">
      <Button w="24vw">Login</Button>
    </Link>
  </Flex>
  )
}

export default LoginForm