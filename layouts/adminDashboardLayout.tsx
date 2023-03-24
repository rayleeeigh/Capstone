import { Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import CardComponent from '../components/Admin/CardComponent';

function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex flexDir="column" w="60vw" alignItems="center">
      <Link href="/admin/Dashboard">
        <Heading py="4vh" cursor="pointer">
          ADMIN DASHBOARD
        </Heading>
      </Link>

      <Flex gap="1rem" mb="3rem">
        <Link href="/admin/Dashboard/Students">
          <CardComponent title="Students" />
        </Link>
        <Link href="/admin/Dashboard/Subjects">
          <CardComponent title="Subjects" />
        </Link>
        <Link href="/admin/Dashboard/Teachers">
          <CardComponent title="Teachers" />
        </Link>
      </Flex>
      {children}
    </Flex>
  );
}

export default AdminDashboardLayout;
