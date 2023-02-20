import { Flex } from '@chakra-ui/layout';
import AdminNavbar from '../components/Navbar/AdminNavbar';
import Navbar from '../components/Navbar/Navbar';

export default function AdminLayout({ children }) {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="gray.100"
      flexDirection="column"
      alignItems="center"
    >
      <AdminNavbar />
      {children}
    </Flex>
  );
}
