import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Card, CardBody } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComponent from '../../../../components/Admin/CardComponent';
import { AccountInterface } from '../../../../interfaces/AccountInterface';
import StudentInterface from '../../../../interfaces/StudentInterface';
import AddStudentsModal from './components/AddStudentModal';
import StudentCard from './components/StudentCard';

interface StudentAccount extends AccountInterface, StudentInterface {
  dummy: 0;
}

function StudentsScreen() {
  const [refreshList, setRefreshList] = useState<boolean>(false);
  const [students, setStudents] = useState<StudentAccount[]>([]);

  useEffect(() => {
    axios.get('/api/students/getAllStudents').then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  }, [refreshList]);

  return (
    <Flex flexDir="column" w="60vw" alignItems="center">
      <Flex
        borderWidth="1px"
        padding="1rem"
        flexDirection="column"
        gap="1rem"
        w="60vw"
      >
        <Flex flexDirection="column" gap="1rem">
          <Flex>
            <Heading size="md">STUDENTS</Heading>
            <Spacer />
            <AddStudentsModal
              setRefreshList={setRefreshList}
              refreshList={refreshList}
            />
          </Flex>

          <SimpleGrid columns={3} spacing={10}>
            {students.map((data) => (
              <StudentCard key={data.account_id} student={data} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default StudentsScreen;
