import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import CardComponent from '../components/Admin/CardComponent';

function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex flexDir="column" w="60vw" alignItems="center">
      <Flex>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Flex>
      {children}
    </Flex>
  );
}

export default AdminDashboardLayout;
