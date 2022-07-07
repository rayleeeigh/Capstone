import { Button, Flex, Image, Text, Input } from "@chakra-ui/react";
import Link from 'next/link'

export default function Login() {

  return (
    <Flex w='100vw' h='100vh'>
      <Flex w='50vw' h='100vh' alignItems='center' justifyContent='center'>
        <Image src='https://i.ibb.co/K69pSjw/undraw-true-friends-c94g-1.png'/>
      </Flex>
      <Flex w='50vw' h='100vh' bg='gray.200' alignItems='center' justifyContent='center'>
        <Flex w='36vw' h='64vh' bg='white' alignItems='center' justifyContent='center' flexDirection='column'>
          <Text mb='4vh'>Login to your account</Text>
          <Input w='24vw' mb='4vh' placeholder='Student ID'/>
          <Input w='24vw' mb='4vh' placeholder='Password'/>
          <Link href='/Announcement'>
            <Button w='24vw'>Login</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
