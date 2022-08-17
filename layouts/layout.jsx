import { Flex } from '@chakra-ui/layout';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="gray.100"
      flexDirection="column"
      alignItems="center"
    >
      <Navbar />
      {children}
    </Flex>
  );
}
