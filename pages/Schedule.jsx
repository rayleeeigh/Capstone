import { Flex, Heading } from '@chakra-ui/react';
import Layout from '../layouts/layout';

export default function Schedule() {
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
        <Heading py="4vh">Schedule</Heading>
      </Flex>
    </Layout>
  );
}
